"use client";

import React, {
    createContext,
    useContext,
    FunctionComponent,
    PropsWithChildren,
    useState,
} from "react";

type LocationType = {
    city: string;
    state: string;
};

type LocationAndServiceContextType = {
    location: LocationType;
    locationTextInput: string;
    setLocation: (location: LocationType) => void;
    setLocationTextInput: (locationTextInput: string) => void;
    service: string;
    setService: (service: string) => void;
};

const initialState: LocationAndServiceContextType = {
    location: { city: "", state: "" },
    locationTextInput: "",
    setLocation: () => {},
    setLocationTextInput: () => {},
    service: "",
    setService: () => {},
};

export const LocationAndServiceContext =
    createContext<LocationAndServiceContextType>(initialState);

export const useLocationAndService = () => {
    return useContext(LocationAndServiceContext);
};

export const LocationAndServiceProvider: FunctionComponent<
    PropsWithChildren
> = ({ children }) => {
    const [location, setLocation] = useState<LocationType>({
        city: "",
        state: "",
    });
    const [locationTextInput, setLocationTextInput] = useState("");
    const [service, setService] = useState("");

    const props = {
        location,
        setLocation,
        locationTextInput,
        setLocationTextInput,
        service,
        setService,
    };

    return (
        <LocationAndServiceContext.Provider value={props}>
            {children}
        </LocationAndServiceContext.Provider>
    );
};
