"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { LocationAndServiceProvider } from "../contexts/location-and-service/LocationAndService.context";

export const SearchPage: FunctionComponent = () => {
    return (
        <LocationAndServiceProvider>
            <NavBarWithFilters />
        </LocationAndServiceProvider>
    );
};

export default SearchPage;
