"use client";

import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import supabase from "../config/supabaseClient";
import ThemedImage from "./ThemedImage";
import { Loader, SlidersHorizontal } from "lucide-react";
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
        <nav className="border-b border-border/40 bg-background h-[10vh] flex items-center sticky top-[10vh] w-full z-10">
            <div className="container flex items-end justify-between">
                <div className="flex text-xs gap-x-7 justify-between">
                    {services.map((service, index) => (
                        <div
                            className="flex flex-col items-center gap-y-2"
                            key={index}
                        >
                            <ThemedImage src={service.iconSrc} />
                            <div>{service.name}</div>
                        </div>
                    ))}
                    <Button className="gap-x-2">
                        <SlidersHorizontal className="size-[1rem]" />
                        <span className="text-xs">Filters</span>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
