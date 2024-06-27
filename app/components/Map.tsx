import { GoogleMap } from "@react-google-maps/api";

export const defaultMapContainerStyle = {
    width: "100%",
    height: "80vh",
};

const defaultMapCenter = {
    lat: 34.098907,
    lng: -118.327759,
};

const defaultMapZoom = 12;

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "roadmap",
};

const Map = () => {
    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={defaultMapCenter}
                options={defaultMapOptions}
                zoom={defaultMapZoom}
            ></GoogleMap>
        </div>
    );
};

export { Map };
