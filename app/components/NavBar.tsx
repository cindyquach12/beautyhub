import { Button } from "@/components/ui/button";
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
        <nav className="flex items-center sticky top-0 h-[8vh] lg:h-[9vh] z-10 border-b border-border/40 backdrop-blur-md bg-background/90">
            <div className="container px-4 sm:px-8 flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-2xl sm:text-3xl">
                        BeautyHub
                    </h1>
                </Link>

                <div className="flex items-center gap-x-5">
                    <Link href={"/business"}>
                        <Button className="hidden sm:block">
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
                                    <Button>Sign In</Button>
                                </LoginLink>
                                <RegisterLink>
                                    <Button variant="secondary">Sign Up</Button>
                                </RegisterLink>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};
