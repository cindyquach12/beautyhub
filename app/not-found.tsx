import { FunctionComponent } from "react";

export const NotFound: FunctionComponent = () => {
    return (
        <div className="bg-background">
            <h2>Page not found</h2>
            <p>Sorry! We can't find what you're looking for...</p>
        </div>
    );
};

export default NotFound;
