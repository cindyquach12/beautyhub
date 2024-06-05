import { FunctionComponent } from "react";
import { BusinessGrid } from "./BusinessGrid";

export const BusinessSidebar: FunctionComponent = () => {
    return (
        <div className="fixed top-[20vh] bottom-0 overflow-y-scroll w-1/3 border-r border-border/70 bg-background">
            <BusinessGrid />
        </div>
    );
};

export default BusinessSidebar;
