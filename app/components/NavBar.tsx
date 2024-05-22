import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ThemeToggle } from "./ThemeToggle";
import Profile from "./Profile";

export async function NavBar() {
    const { isAuthenticated } = getKindeServerSession();

    return (
        <nav className="border-b bg-background h-[10vh] flex items-center sticky top-0 w-full">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">BeautyHub</h1>
                </Link>

                {/* {(await isAuthenticated()) ? (
                    <LogoutLink>
                        <Button>Log out</Button>
                    </LogoutLink>
                ) : (
                    <div className="flex items-center gap-x-5">
                        <ThemeToggle />
                        <LoginLink>
                            <Button>Sign In</Button>
                        </LoginLink>
                        <RegisterLink>
                            <Button variant="secondary">Sign Up</Button>
                        </RegisterLink>
                    </div>
                )} */}

                <div className="flex items-center gap-x-5">
                    <ThemeToggle />
                    <Profile/>
                </div>
            </div>
        </nav>
    );
}
