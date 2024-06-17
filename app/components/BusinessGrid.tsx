"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent, useEffect } from "react";
import { usePathname } from "next/navigation";
import supabase from "../config/supabaseClient";

const DEFAULT_HEADER_STYLING =
    "text-xl md:text-3xl mb-3 mt-10 border-border/70 flex md:block tracking-wide text-white";
const SIDEBAR_HEADER_STYLING =
    "text-xl h-14 pl-5 py-4 mb-4 border-b border-border/70 sticky top-0 bg-background shadow-sm tracking-wide text-white";

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

    const headerStyle = isOnSearch
        ? SIDEBAR_HEADER_STYLING
        : DEFAULT_HEADER_STYLING;

    return (
        <div>
            <h4 className={headerStyle}>recommended</h4>
            <div
                className={
                    isOnSearch
                        ? "grid grid-cols-1 gap-5"
                        : "grid grid-cols-1 sm:max-md:justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-10"
                }
            >
                {recommended
                    .map((business: BusinessType, index: Number) => (
                        <div className={isOnSearch ? "px-5" : ""}>
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
            <h4 className={headerStyle}>new to beautyhub</h4>
            <div
                className={
                    isOnSearch
                        ? "grid grid-cols-1 gap-5"
                        : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 "
                }
            >
                {newBusinessUser
                    .map((business: BusinessType, index: Number) => (
                        <div className={isOnSearch ? "px-5" : ""}>
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
