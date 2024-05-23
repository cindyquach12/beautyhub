// Profile component - doubles as picture and settings menu dropdown

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function ProfileMenu(){
    const { isAuthenticated } = getKindeServerSession();

    // Login / Sign up vs just Log in?

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    Profile
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href={'/{profileId}'}>Profile</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={'/{profileId}/favorites'}>Favorites</Link></DropdownMenuItem>
                <DropdownMenuItem><Link href={'/{profileId}/settings'}>Settings</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    {(await isAuthenticated()) ? (
                        <LogoutLink>
                            Log out
                        </LogoutLink>
                    ) : (
                        <LoginLink>
                            Log in
                        </LoginLink>
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}