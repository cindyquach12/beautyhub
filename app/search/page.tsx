"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessSidebar } from "../components/BusinessSidebar";
import { BusinessBottomBar } from "../components/BusinessBottomBar";
import { LocationAndServiceProvider } from "../contexts/location-and-service/LocationAndService.context";

export const SearchPage: FunctionComponent = () => {
    return (
        <LocationAndServiceProvider>
            <NavBarWithFilters />
            <div className="lg:invisible">
                <BusinessBottomBar />
            </div>
            <div className="invisible lg:visible">
                <BusinessSidebar />
            </div>

            {/* <div className="absolute right-0 w-2/3 bg-red-500">Map</div> */}
        </LocationAndServiceProvider>
    );
};

export default SearchPage;
