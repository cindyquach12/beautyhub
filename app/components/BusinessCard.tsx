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
        <div className="business-card bg-primary border rounded-sm border-border/70 h-[18.75rem] w-[20rem] md:w-full overflow-hidden shadow-md">
            <div className="business-details border-b border-border/40 pl-3 py-2 text-indigo-300">
                <h4 className="text-sm font-medium">{name}</h4>
                <div className="flex items-baseline my-1">
                    <Star className="mx-1 size-[1rem]" />
                    <p className="text-sm mr-1">
                        {`${rating}`} {`(${reviewCount}`})
                    </p>
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
