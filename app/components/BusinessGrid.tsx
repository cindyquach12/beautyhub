"use client";
import { BusinessCard } from "./BusinessCard";
import { useState, FunctionComponent } from "react";
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
    const [fetchError, setFetchError] = useState<any | null>(null);
    const [businesses, setBusinesses] = useState<any | null>([]);

    const fetchBusinesses = async () => {
        const { data, error } = await supabase.from("businesses").select();

        if (error) {
            setBusinesses(null);
            setFetchError("Could not fetch businesses");
            console.log(error);
        }
        if (data) {
            setBusinesses(data);
            setFetchError(null);
            console.log("successfully got businesses data");
        }
    };

    fetchBusinesses();

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
                    .map((business: BusinessType) => (
                        <BusinessCard
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
                    .map((business: BusinessType) => (
                        <BusinessCard
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
