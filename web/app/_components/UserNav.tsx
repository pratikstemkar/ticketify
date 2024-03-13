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

type UserNavProps = {
    firstName: string;
    lastName: string;
    email: string;
};

const UserNav = (props: UserNavProps) => {
    const dispatch = useAppDispatch();

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
                    <DropdownMenuItem className="hover:cursor-pointer">
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                        Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:cursor-pointer">
                        Settings
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={() => dispatch(logout())}
                    className="hover:cursor-pointer text-primary"
                >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserNav;
