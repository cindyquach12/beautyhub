"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FunctionComponent } from "react";
import Link from "next/link";
import { services } from "../mock-data/search-with-input-mock-data";
import { cn } from "@/lib/utils";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown, Check } from "lucide-react";

type LocationType = {
    city: string;
    state: string;
};

export const SearchWithInput: FunctionComponent = () => {
    const [location, setLocation] = useState<LocationType>();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const onUseCurrentLocationClick = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const currLatitude = position.coords.latitude;
                    const currLongitude = position.coords.longitude;
                    const response = await fetch(
                        // TODO: protect API key
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currLatitude},${currLongitude}&key=AIzaSyATA-Pdjz9ALmao1bYQPy7daywxkpSu75Q`
                    );
                    const responseJson = await response.json();
                    if (
                        responseJson.results &&
                        responseJson.results.length > 0
                    ) {
                        const currCity =
                            responseJson.results[0].address_components[4]
                                .long_name;
                        const currState =
                            responseJson.results[0].address_components[5]
                                .long_name;
                        setLocation({ city: currCity, state: currState });
                    }
                },
                (error) => {
                    throw error;
                }
            );
        } else {
            throw new Error("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div className="flex w-100 items-center gap-6">
            <div className="w-80">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-80 justify-between"
                        >
                            {(services &&
                                services.find(
                                    (service) => service.value === value
                                )?.label) ??
                                "Select service"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <Command>
                            <CommandInput placeholder="Search service" />
                            <CommandList>
                                <CommandEmpty>No service found.</CommandEmpty>
                                <CommandGroup>
                                    {services.map((service) => (
                                        <CommandItem
                                            key={service.value}
                                            value={service.value}
                                            onSelect={(currentValue) => {
                                                setValue(
                                                    currentValue === value
                                                        ? ""
                                                        : currentValue
                                                );
                                                setOpen(false);
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value === service.value
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {service.label}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
            <Input
                type="text"
                placeholder="Enter a location"
                value={location ? `${location.city}, ${location.state}` : ""}
                className="w-80"
                onClick={onUseCurrentLocationClick}
            />
            <Link href="/dashboard">
                <Button onClick={() => {}}>Search</Button>
            </Link>
        </div>
    );
};
