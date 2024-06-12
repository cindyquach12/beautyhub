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

type LocationAndServiceProviderState = {
    location: LocationType;
    locationTextInput: string;
    service: string;
    setLocation: (location: LocationType) => void;
    setLocationTextInput: (locationTextInput: string) => void;
    setService: (service: string) => void;
};

const initialState: LocationAndServiceProviderState = {
    location: { city: "", state: "" },
    locationTextInput: "",
    service: "",
    setLocation: () => {},
    setLocationTextInput: () => {},
    setService: () => {},
};

export const LocationAndServiceContext =
    createContext<LocationAndServiceProviderState>(initialState);

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
