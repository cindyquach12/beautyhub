import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function ProfileMenu() {
    const { isAuthenticated } = getKindeServerSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Profile</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={"/{profileId}"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/{profileId}/favorites"}>Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={"/{profileId}/settings"}>Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    {(await isAuthenticated()) ? (
                        <LogoutLink>Log out</LogoutLink>
                    ) : (
                        <LoginLink>Log in</LoginLink>
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
