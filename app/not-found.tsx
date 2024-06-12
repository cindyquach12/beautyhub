import { FunctionComponent } from "react";

export const NotFound: FunctionComponent = () => {
    return (
        <section className="bg-background flex justify-center direction">
            <div className="relative items-center h-screen">
                <h2 className="font-bold text-2xl mt-[12rem] mb-7">
                    Page not found
                </h2>
                <p>Sorry! We can't find what you're looking for...</p>
            </div>
        </section>
    );
};

export default NotFound;
