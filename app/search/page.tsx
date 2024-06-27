"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessBar } from "../components/BusinessBar";
import { LocationAndServiceProvider } from "../contexts/location-and-service/LocationAndService.context";

export const SearchPage: FunctionComponent = () => {
    return (
        <div>
            <NavBarWithFilters />
            <BusinessBar />

            <div className="absolute w-full md:w-2/3 md:right-0 bg-red-500">
                Map
            </div>
        </div>
    );
};

export default SearchPage;
