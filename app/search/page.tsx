"use client";
import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessSidebar } from "../components/BusinessSidebar";

export const SearchPage: FunctionComponent = () => {
    return (
        <div className="bg-background">
            <NavBarWithFilters />
            <div className="flex">
                <BusinessSidebar />
                <div className="fixed right-0 w-2/3">Map</div>
            </div>
        </div>
    );
};

export default SearchPage;
