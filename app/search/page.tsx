"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessSidebar } from "../components/BusinessSidebar";
import { LocationAndServiceProvider } from "../contexts/location-and-service/LocationAndService.context";

export const SearchPage: FunctionComponent = () => {
    return (
        <LocationAndServiceProvider>
            <div className="bg-background">
                <NavBarWithFilters />
                <BusinessSidebar />
                <div className="fixed right-0 w-2/3 bg-background">Map</div>
            </div>
        </LocationAndServiceProvider>
    );
};

export default SearchPage;
