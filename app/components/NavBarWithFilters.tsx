"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import supabase from "../config/supabaseClient";
import { Loader, SlidersHorizontal } from "lucide-react";

export const NavBarWithFilters: FunctionComponent = () => {
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
        <nav className="border-b border-border/40 backdrop-blur-md bg-background/90 h-[10vh] flex items-center sticky top-0 w-full z-2">
            <div className="container flex items-end justify-between">
                <div className="flex text-xs gap-x-7 justify-between">
                    {services.map((service) => (
                        <div className="flex flex-col items-center gap-y-2">
                            <Loader className="size-[1rem]" />
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
