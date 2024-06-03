"use client";
import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessGrid } from "../components/BusinessGrid";

export const SearchPage: FunctionComponent = () => {
    return (
        <div className="bg-background">
            <NavBarWithFilters />
            <div className="flex">
                <div className="fixed top-[20vh] bottom-0 overflow-y-scroll w-1/3 border-r border-border/40 px-5">
                    <BusinessGrid />
                </div>
                <div className="fixed right-0 w-2/3">Map</div>
            </div>
        </div>
    );
};

export default SearchPage;
