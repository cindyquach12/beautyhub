"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent, useEffect } from "react";
import supabase from "../config/supabaseClient";

const HEADER_STYLING =
    "header text-xl md:text-xl h-12 w-screen md:h-14 pl-5 py-2 mb-4 border-b border-border/70 sticky top-0 bg-background shadow-sm tracking-wide text-white";

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

export const BusinessBar: FunctionComponent = () => {
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
        <div className="business-bar fixed top-[10rem] border-border/70 md:absolute md:w-1/3 lg:border-r bottom-0 overflow-y-scroll bg-indigo-200 z-10">
            <h4 className={HEADER_STYLING}>recommended</h4>
            <div className="grid grid-cols-1 gap-5 pb-4 justify-items-center">
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
            <h4 className={HEADER_STYLING}>new to beautyhub</h4>
            <div className="grid grid-cols-1 gap-5 pb-4 justify-items-center">
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

export default BusinessBar;
