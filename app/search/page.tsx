"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
<<<<<<< HEAD
import { BusinessBar } from "../components/BusinessBar";
import { LocationAndServiceProvider } from "../contexts/location-and-service/LocationAndService.context";
=======
import { BusinessSidebar } from "../components/BusinessSidebar";
>>>>>>> d75f12833fc64ed89f5b49114361820e5adb31fa

export const SearchPage: FunctionComponent = () => {
    return (
        <div>
            <NavBarWithFilters />
<<<<<<< HEAD
            <BusinessBar />

            <div className="absolute w-full md:w-2/3 md:right-0 bg-red-500">
                Map
            </div>
        </LocationAndServiceProvider>
=======
            <BusinessSidebar />
            <div className="fixed right-0 w-2/3 bg-background">Map</div>
        </div>
>>>>>>> d75f12833fc64ed89f5b49114361820e5adb31fa
    );
};

export default SearchPage;
