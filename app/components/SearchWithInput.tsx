"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";

export function SearchWithInput() {
    const [searchText, setSearchText] = useState("");
    const onSearchClick = () => {
        console.log(searchText);
    };

    return (
        <div className="flex w-full items-center space-x-2">
            <Input
                type="text"
                placeholder="lashes, brows, lips, and more"
                onChange={(e) => setSearchText(e.target.value)}
            />
            <Input type="text" placeholder="Location" onChange={() => {}} />
            <Link href="/dashboard">
                <Button onClick={() => onSearchClick()}>Search</Button>
            </Link>
        </div>
    );
}
