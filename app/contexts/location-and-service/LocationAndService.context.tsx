"use client";

import React, {
    createContext,
    FunctionComponent,
    PropsWithChildren,
    useState,
} from "react";

type LocationType = {
    city: string;
    state: string;
};

type LocationAndServiceContextState = {
    location: LocationType;
    locationTextInput: string;
    setLocation: (location: LocationType) => void;
    setLocationTextInput: (locationTextInput: string) => void;
    service: string;
    setService: (service: string) => void;
};

const initialState: LocationAndServiceContextState = {
    location: { city: "", state: "" },
    locationTextInput: "",
    setLocation: () => {},
    setLocationTextInput: () => {},
    service: "",
    setService: () => {},
};

export const LocationAndServiceContext =
    createContext<LocationAndServiceContextState>(initialState);

export const LocationAndServiceProvider: FunctionComponent<
    PropsWithChildren
> = ({ children }) => {
    const [location, setLocation] = useState<LocationType>({
        city: "",
        state: "",
    });
    const [locationTextInput, setLocationTextInput] = useState("");
    const [service, setService] = useState("");

    const value = {
        location,
        setLocation,
        locationTextInput,
        setLocationTextInput,
        service,
        setService,
    };

    return (
        <LocationAndServiceContext.Provider value={value}>
            {children}
        </LocationAndServiceContext.Provider>
    );
};
