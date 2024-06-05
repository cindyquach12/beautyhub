"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent, useEffect } from "react";
import { usePathname } from "next/navigation";
import supabase from "../config/supabaseClient";

const DEFAULT_HEADER_STYLING =
    "text-xl h-12 my-4 border-b border-border/70 font-bold bg-background";
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

    let isOnSearch = usePathname() === "/search";

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
                    .map((business: BusinessType, index) => (
                        <div className="px-5">
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
                    .slice(0, 3)}
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
                    .map((business: BusinessType, index) => (
                        <div className="px-5">
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
                    .slice(0, 3)}
            </div>
        </div>
    );
};
