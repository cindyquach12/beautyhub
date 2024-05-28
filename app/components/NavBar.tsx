import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    RegisterLink,
    LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ThemeToggle } from "./ThemeToggle";
import { ProfileMenu } from "./ProfileMenu";

export async function NavBar(){
    const { isAuthenticated } = getKindeServerSession();

    return (
        <nav className="border-b border-border/40 backdrop-blur-md bg-background/90 h-[10vh] flex items-center sticky top-0 w-full z-10">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">BeautyHub</h1>
                </Link>

                <div className="flex items-center gap-x-5">
                    <ThemeToggle />
                    <Link href={"/business"}><Button>For business</Button></Link>
                    
                    {(await isAuthenticated()) ? (
                        <ProfileMenu/>
                    ) : (
                        <div className="flex items-center gap-x-5">
                            <LoginLink>
                                <Button>Sign In</Button>
                            </LoginLink>
                            <RegisterLink>
                                <Button variant="secondary">Sign Up</Button>
                            </RegisterLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
