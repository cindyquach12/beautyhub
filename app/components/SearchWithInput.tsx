"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import Link from "next/link";

export function SearchWithInput() {
    const [searchText, setSearchText] = useState("");
    const [location, setLocation] = useState(0);
    const onSearchClick = () => {
        console.log(searchText, location);
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation(latitude);
                console.log(latitude, longitude);
            });
        }
    }, []);

    return (
        <div className="flex w-full items-center space-x-2">
            <Input
                type="text"
                placeholder="lashes, brows, lips, and more"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Input
                type="text"
                placeholder="Location"
                onChange={(e) => setLocation(e.target.value)}
            />
            <Link href="/dashboard">
                <Button onClick={() => onSearchClick()}>Search</Button>
            </Link>
        </div>
    );
}
