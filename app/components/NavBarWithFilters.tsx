"use client";

import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import supabase from "../config/supabaseClient";
import ThemedImage from "./ThemedImage";
import { SlidersHorizontal } from "lucide-react";
import { LocationAndServiceContext } from "../contexts/location-and-service/LocationAndService.context";

export const NavBarWithFilters: FunctionComponent = () => {
    const { location, locationTextInput, service } = useContext(
        LocationAndServiceContext
    );

    const [services, setServices] = useState<any>([]);

    useEffect(() => {
        const fetchServices = async () => {
            const { data, error } = await supabase.from("services").select();
            setServices(data);
            if (error) {
                throw error;
            }
        };
        fetchServices();
    }, []);

    return (
        <nav className="flex items-center justify-between sticky top-20 h-[8vh] lg:h-[10vh] z-10 bg-background">
            <div className="container flex items-center justify-between overflow-x-auto py-2.5 px-4 sm:px-8 gap-x-5 sm:gap-x-2">
                {services.map((service, index) => (
                    <div
                        className="flex flex-col items-center gap-y-2"
                        key={index}
                    >
                        <ThemedImage src={service.iconSrc} />
                        <div>{service.name}</div>
                    </div>
                ))}
                <Button className="gap-x-2" variant="secondary">
                    <SlidersHorizontal className="size-[1rem]" />
                    <span className="text-xs">Filters</span>
                </Button>
            </div>
        </nav>
    );
};
