"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent, useEffect } from "react";
import { usePathname } from "next/navigation";
import supabase from "../config/supabaseClient";

const DEFAULT_HEADER_STYLING =
    "text-3xl h-12 mb-3 mt-10 border-border/70 font-bold";
const SIDEBAR_HEADER_STYLING =
    "text-xl h-14 pl-5 py-4 mb-4 border-b border-border/70 font-bold sticky top-0 bg-background shadow-sm";

type BusinessType = {
    id: number;
    name: string;
    rating: number;
    reviewCount: number;
    services: string[];
    address: string;
    createdAt: string;
    imgSrc: string;
};

export const BusinessGrid: FunctionComponent = () => {
    const [businesses, setBusinesses] = useState<any | null>([]);

    useEffect(() => {
        const fetchBusinesses = async () => {
            const { data, error } = await supabase.from("businesses").select();
            if (data) {
                setBusinesses(data);
            }
            if (error) {
                throw error;
            }
        };
        fetchBusinesses();
    }, []);

    const recommended = businesses.filter(
        (business: BusinessType) => business.rating > 4.0
    );
    const newBusinessUser = businesses.filter(
        (business: BusinessType) => business.reviewCount < 100
    );

    const isOnSearch = usePathname() === "/search";
    const NUM_DISPLAYED_CARDS = isOnSearch ? 5 : 6;

    return (
        <div>
            <h3
                className={
                    isOnSearch ? SIDEBAR_HEADER_STYLING : DEFAULT_HEADER_STYLING
                }
            >
                Recommended
            </h3>
            <div
                className={
                    isOnSearch
                        ? "grid grid-cols-1 gap-5"
                        : "grid grid-cols-3 gap-10"
                }
            >
                {recommended
                    .map((business: BusinessType, index: Number) => (
                        <div className="pr-5">
                            <BusinessCard
                                key={`${business.id}-${index}`}
                                name={business.name}
                                rating={business.rating}
                                reviewCount={business.reviewCount}
                                location={business.address}
                                imgSrc={business.imgSrc}
                            />
                        </div>
                    ))
                    .slice(0, NUM_DISPLAYED_CARDS)}
            </div>
            <h3
                className={
                    isOnSearch ? SIDEBAR_HEADER_STYLING : DEFAULT_HEADER_STYLING
                }
            >
                New to BeautyHub
            </h3>
            <div
                className={
                    isOnSearch
                        ? "grid grid-cols-1 gap-5"
                        : "grid grid-cols-3 gap-10"
                }
            >
                {newBusinessUser
                    .map((business: BusinessType, index: Number) => (
                        <div className="pr-5">
                            <BusinessCard
                                key={`${business.id}-${index}`}
                                name={business.name}
                                rating={business.rating}
                                reviewCount={business.reviewCount}
                                location={business.address}
                                imgSrc={business.imgSrc}
                            />
                        </div>
                    ))
                    .slice(0, NUM_DISPLAYED_CARDS)}
            </div>
        </div>
    );
};
