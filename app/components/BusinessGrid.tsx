'use client';
import BusinessCard from "./BusinessCard";

// Chris's note: i'll need to use a forEach to iterate through the businesses to populate grid

export default function BusinessGrid(){
    return (
        <div className="grid grid-rows-3 grid-cols-3 gap-10">
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
            <BusinessCard/>
        </div>
    )
}