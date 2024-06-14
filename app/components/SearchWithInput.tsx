"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContext, useState } from "react";
import { FunctionComponent } from "react";
import Link from "next/link";
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
import supabase from "../config/supabaseClient";
import { LocationAndServiceContext } from "../contexts/location-and-service/LocationAndService.context";

export const SearchWithInput: FunctionComponent = () => {
    const { location, setLocation, setLocationTextInput, setService } =
        useContext(LocationAndServiceContext);

    const [userLocationInput, setUserLocationInput] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [services, setServices] = useState<any>([]);

    const fetchServices = async () => {
        const { data, error } = await supabase.from("services").select();
        setServices(data);
        if (error) {
            throw error;
        }
    };

    const onUseCurrentLocationClick = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const currLatitude = position.coords.latitude;
                    const currLongitude = position.coords.longitude;
                    const response = await fetch(
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

    const onSearchClick = () => {
        setService(value);
        setLocationTextInput(userLocationInput);
    };

    return (
        <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="w-80">
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            onClick={fetchServices}
                            className="w-80 justify-between"
                        >
                            {value === "" ? "Select service" : value}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <Command>
                            <CommandInput placeholder="Search service" />
                            <CommandList>
                                <CommandEmpty>No service found.</CommandEmpty>
                                <CommandGroup>
                                    {services.map((service, index: number) => (
                                        <CommandItem
                                            key={`${service.id}-${index}`}
                                            value={service.name}
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
                                                    value === service.name
                                                        ? "opacity-100"
                                                        : "opacity-0"
                                                )}
                                            />
                                            {service.name}
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
                value={
                    location.city !== "" && location.state !== ""
                        ? `${location.city}, ${location.state}`
                        : userLocationInput
                }
                className="w-80 truncate"
                onClick={onUseCurrentLocationClick}
                onInput={(event) =>
                    setUserLocationInput(event.currentTarget.value)
                }
            />
            <Link href="/search">
                <Button onClick={onSearchClick}>Search</Button>
            </Link>
        </div>
    );
};
