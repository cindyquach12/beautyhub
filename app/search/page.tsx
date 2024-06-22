"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessSidebar } from "../components/BusinessSidebar";

export const SearchPage: FunctionComponent = () => {
    return (
        <div>
            <NavBarWithFilters />
            <BusinessSidebar />
            <div className="fixed right-0 w-2/3 bg-background">Map</div>
        </div>
    );
};

export default SearchPage;
