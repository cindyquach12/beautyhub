import { FunctionComponent } from "react";
import { BusinessGrid } from "./BusinessGrid";

export const BusinessSidebar: FunctionComponent = () => {
    return (
        <div className="fixed top-[20vh] bottom-0 overflow-y-scroll w-1/3 border-r border-border/40 px-5">
            <BusinessGrid />
        </div>
    );
};

export default BusinessSidebar;
