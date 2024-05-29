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
    const tempUserName = "Mickey Tran";
    const profileId = 1337;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>{tempUserName}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}`}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/favorites`}>
                        Favorites
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/settings`}>
                        Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/billing`}>Billing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/reviews`}>Reviews</Link>
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
