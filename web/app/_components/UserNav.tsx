import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/features/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import {
    CreditCardIcon,
    LogOutIcon,
    SettingsIcon,
    UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

type UserNavProps = {
    firstName: string;
    lastName: string;
    email: string;
};

const UserNav = (props: UserNavProps) => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                >
                    <Avatar>
                        <AvatarImage
                            src="https://github.com/pratikstemkar.png"
                            alt={`${props.email}`}
                        />
                        <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56"
                align="end"
                forceMount
            >
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                            {props.firstName + " " + props.lastName}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {props.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/profile");
                        }}
                    >
                        <UserIcon className="mr-2 w-4 h-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/profile/orders");
                        }}
                    >
                        <CreditCardIcon className="mr-2 w-4 h-4" />
                        <span>Orders</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/profile/settings");
                        }}
                    >
                        <SettingsIcon className="mr-2 w-4 h-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => dispatch(logout())}
                    className="hover:cursor-pointer text-primary"
                >
                    <LogOutIcon className="mr-2 w-4 h-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
