import { Star } from "lucide-react";
import { FunctionComponent } from "react";

type BusinessCardProps = {
    name: string;
    rating: Number;
    reviewCount: Number;
    location: string;
    imageSrc: string;
};

export const BusinessCard: FunctionComponent<BusinessCardProps> = ({
    name,
    rating,
    reviewCount,
    location,
}) => {
    return (
        <div className="border rounded-sm h-[18.75rem]">
            <div className="business-details border-b pl-3 py-2 ">
                <h4 className="text-lg">{name}</h4>
                <div className="flex items-center my-1">
                    <p>{`${rating}`}</p>{" "}
                    <Star className="ml-1 mr-2 size-[14px]" />{" "}
                    <p className="text-sm">({`${reviewCount}`} reviews)</p>
                </div>
                <p className="text-xs text-gray-400">{location}</p>
            </div>
            <img src="" alt="business picture" className="s-fit" />
        </div>
    );
};
