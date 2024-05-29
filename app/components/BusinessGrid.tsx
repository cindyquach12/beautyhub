"use client";
import { BusinessCard } from "./BusinessCard";
import businesses from "../mock-data/business-card-mock-data";

export const BusinessGrid = () => {
    const recommended = businesses.filter((business) => business.rating > 4.0);
    const newBusinessUser = businesses.filter(
        (business) => business.reviewCount < 100
    );

    return (
        <div>
            <h3 className="text-xl my-4 font-bold">Recommended</h3>
            <div className="grid grid-cols-3 gap-10">
                {recommended
                    .map((business) => (
                        <BusinessCard
                            name={business.name}
                            rating={business.rating}
                            reviewCount={business.reviewCount}
                            location={business.location}
                            imageSrc={business.imageSrc}
                        />
                    ))
                    .slice(0, 3)}
            </div>
            <h3 className="text-xl my-4 font-bold">New to BeautyHub</h3>
            <div className="grid grid-cols-3 gap-10">
                {newBusinessUser
                    .map((business) => (
                        <BusinessCard
                            name={business.name}
                            rating={business.rating}
                            reviewCount={business.reviewCount}
                            location={business.location}
                            imageSrc={business.imageSrc}
                        />
                    ))
                    .slice(0, 3)}
            </div>
        </div>
    );
};
