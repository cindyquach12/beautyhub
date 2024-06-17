import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import {
    RegisterLink,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ProfileMenu } from "./ProfileMenu";
import { FunctionComponent } from "react";

export const NavBar: FunctionComponent = async () => {
    const { isAuthenticated } = getKindeServerSession();

    return (
        <nav className="flex items-center sticky top-0 h-[8vh] lg:h-[10vh] z-10 border-b border-border/40 backdrop-blur-md bg-background/90">
            <div className="container px-4 sm:px-8 flex items-center justify-between">
                <Link href="/">
                    <div className="flex items-center">
                        <MapPin className="text-indigo-300 mr-1" />
                        <h3 className="text-lg sm:text-2xl text-indigo-300 tracking-wide">
                            beautyhub
                        </h3>
                    </div>
                </Link>

                <div className="flex items-center gap-x-5">
                    <Link href={"/business"}>
                        <Button className="hidden sm:block min-h-[2.75rem]">
                            For business
                        </Button>
                    </Link>

                    {(await isAuthenticated()) ? (
                        <ProfileMenu />
                    ) : (
                        <div className="flex items-center gap-x-5">
                            <div className="sm:hidden">
                                <ProfileMenu />
                            </div>
                            <div className="hidden sm:flex items-center gap-x-5">
                                <LoginLink>
                                    <Button className="min-h-[2.75rem]">
                                        Sign in
                                    </Button>
                                </LoginLink>
                                <RegisterLink>
                                    <Button
                                        className="min-h-[2.75rem]"
                                        variant="secondary"
                                    >
                                        Sign up
                                    </Button>
                                </RegisterLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
