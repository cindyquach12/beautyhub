"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent, useEffect } from "react";
import supabase from "../config/supabaseClient";

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

export const BusinessSidebar: FunctionComponent = () => {
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
    return (
        <div className="absolute top-[16vh] lg:top-[20vh] bottom-0 overflow-y-scroll w-1/3 border-r border-border/70 bg-background">
            <h4 className={SIDEBAR_HEADER_STYLING}>recommended</h4>
            <div className="grid grid-cols-1 gap-5">
                {recommended
                    .map((business: BusinessType, index: Number) => (
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
                    .slice(0, 6)}
            </div>
            <h4 className={SIDEBAR_HEADER_STYLING}>new to beautyhub</h4>
            <div className="grid grid-cols-1 gap-5">
                {newBusinessUser
                    .map((business: BusinessType, index: Number) => (
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
                    .slice(0, 6)}
            </div>
        </div>
    );
};

export default BusinessSidebar;
