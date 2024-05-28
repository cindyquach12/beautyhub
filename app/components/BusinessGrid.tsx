'use client';
import { BusinessCard } from "./BusinessCard";
import businesses from "../mock-data/business-card-mock-data";

export const BusinessGrid = () => {
    return (
        <div className="grid grid-rows-3 grid-cols-3 gap-10">
            {businesses.map(business => (
                <BusinessCard
                    name={business.name}
                    rating={business.rating}
                    reviewCount={business.reviewCount} 
                    location={business.location} 
                    imageSrc={business.imageSrc}
                />
            ))}
        </div>
    )
}