import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SearchWithInput } from "./components/SearchWithInput";
import { BusinessGrid } from "./components/BusinessGrid";

export default async function HomeSplash() {
    const { isAuthenticated } = getKindeServerSession();

    return (
        <section className="flex justify-center bg-indigo-200">
            <div className="relative items-center w-full px-5 md:py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <div>
                        <h2 className="my-8 text-2xl md:text-4xl text-white tracking-wider">
                            find beauty services in your area
                        </h2>
                        <SearchWithInput />
                    </div>
                    <div className="flex justify-center max-w-sm mx-auto mt-5">
                        {(await isAuthenticated()) ? null : (
                            <RegisterLink>
                                <Button
                                    className="w-80 md:w-full min-h-[2.75rem]"
                                    size="lg"
                                    variant="secondary"
                                >
                                    Sign up for free
                                </Button>
                            </RegisterLink>
                        )}
                    </div>
                </div>
                <BusinessGrid />
            </div>
        </section>
    );
}
