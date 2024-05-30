import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { SearchWithInput } from "./components/SearchWithInput";
import { BusinessGrid } from "./components/BusinessGrid";

export default async function HomeSplash() {
    const { isAuthenticated } = getKindeServerSession();

    return (
        <section className="flex justify-center bg-background h-[125rem]">
            <div className="relative items-center w-full px-5 py-12 mx-auto lg:px-16 max-w-7xl md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <div>
                        <h1 className="my-8 text-3xl font-extrabold tracking-tight lg:text-5xl">
                            Find beauty services in your area
                        </h1>
                        <SearchWithInput />
                    </div>
                    <div className="flex justify-center max-w-sm mx-auto mt-10">
                        {(await isAuthenticated()) ? null : (
                            <RegisterLink>
                                <Button className="w-full" size="lg">
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
