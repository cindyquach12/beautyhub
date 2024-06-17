"use client";

import { Star } from "lucide-react";
import { FunctionComponent } from "react";

type BusinessCardProps = {
    name: string;
    rating: Number;
    reviewCount: Number;
    location: string;
    imgSrc: string;
};

export const BusinessCard: FunctionComponent<BusinessCardProps> = ({
    name,
    rating,
    reviewCount,
    location,
    imgSrc,
}) => {
    return (
        <div className="bg-primary border rounded-sm border-border/70 h-[18.75rem] sm:max-w-[31.25rem] md:max-w-full overflow-hidden shadow-md">
            <div className="business-details border-b border-border/40 pl-3 py-2 text-indigo-300">
                <h4 className="text-lg font-medium">{name}</h4>
                <div className="flex items-center my-1">
                    <p>{`${rating}`}</p>
                    <Star className="ml-1 mr-2 size-[1rem]" />
                    <p className="text-sm">{`${reviewCount}`} reviews</p>
                </div>
                <p className="text-xs">{location}</p>
            </div>
            <img
                src={imgSrc}
                alt="business picture"
                className="object-cover w-full"
            />
        </div>
    );
};
