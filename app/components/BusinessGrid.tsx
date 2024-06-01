"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent, useEffect } from "react";
import supabase from "../config/supabaseClient";

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

    return (
        <div>
            <h3 className="text-xl my-4 font-bold">Recommended</h3>
            <div className="grid grid-cols-3 gap-10">
                {recommended
                    .map((business: BusinessType, index) => (
                        <BusinessCard
                            key={`${business.id}-${index}`}
                            name={business.name}
                            rating={business.rating}
                            reviewCount={business.reviewCount}
                            location={business.address}
                            imageSrc={business.imgSrc}
                        />
                    ))
                    .slice(0, 3)}
            </div>
            <h3 className="text-xl my-4 font-bold">New to BeautyHub</h3>
            <div className="grid grid-cols-3 gap-10">
                {newBusinessUser
                    .map((business: BusinessType, index) => (
                        <BusinessCard
                            key={`${business.id}-${index}`}
                            name={business.name}
                            rating={business.rating}
                            reviewCount={business.reviewCount}
                            location={business.address}
                            imageSrc={business.imgSrc}
                        />
                    ))
                    .slice(0, 3)}
            </div>
        </div>
    );
};