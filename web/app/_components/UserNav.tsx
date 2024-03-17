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
import { toast } from "sonner";

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
                    className="relative h-9 w-9 rounded-full"
                >
                    <Avatar className="h-9 w-9">
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
                        <UserIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/profile/orders");
                        }}
                    >
                        <CreditCardIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Orders</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover:cursor-pointer"
                        onClick={() => {
                            router.push("/profile/settings");
                        }}
                    >
                        <SettingsIcon className="mr-2 w-4 h-4 text-muted-foreground" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => {
                        dispatch(logout());
                        toast("Logged out!", {
                            description:
                                "You have been logged out from Ticketify.",
                        });
                    }}
                    className="hover:cursor-pointer text-primary group"
                >
                    <LogOutIcon className="mr-2 w-4 h-4 group-hover:text-muted-foreground" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
