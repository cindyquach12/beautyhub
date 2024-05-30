import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
    CircleUserRound,
    CreditCard,
    Settings,
    Star,
    LogIn,
    LogOut,
    BookHeart,
    Book,
} from "lucide-react";
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
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}`}>
                        <div className="flex items-center">
                            <CircleUserRound className="size-4 mr-2" />
                            Profile
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/favorites`}>
                        <div className="flex items-center">
                            <BookHeart className="size-4 mr-2" />
                            Favorites
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/settings`}>
                        <div className="flex items-center">
                            <Settings className="size-4 mr-2" />
                            Settings
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/billing`}>
                        <div className="flex items-center">
                            <CreditCard className="size-4 mr-2" />
                            Billing
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href={`/profile/${profileId}/reviews`}>
                        <div className="flex items-center">
                            <Star className="size-4 mr-2" />
                            Reviews
                        </div>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    {(await isAuthenticated()) ? (
                        <LogoutLink>
                            <div className="flex items-center">
                                <LogOut className="size-4 mr-2" /> Log out
                            </div>
                        </LogoutLink>
                    ) : (
                        <LoginLink>
                            <div className="flex items-center">
                                <LogIn className="size-4 mr-2" /> Log in
                            </div>
                        </LoginLink>
                    )}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
