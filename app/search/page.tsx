"use client";

import { FunctionComponent } from "react";
import { NavBarWithFilters } from "../components/NavBarWithFilters";
import { BusinessBar } from "../components/BusinessBar";
import { MapProvider } from "../api/map/MapProvider";
import { Map } from "../components/Map";
import { LocationAndServiceProvider } from "../contexts/location-and-service/LocationAndService.context";

export const SearchPage: FunctionComponent = () => {
    return (
        <MapProvider>
            <div>
                <NavBarWithFilters />
                <BusinessBar />
                <div className="absolute w-2/3 right-0">
                    <Map />
                </div>
            </div>
        </MapProvider>
    );
};

export default SearchPage;
