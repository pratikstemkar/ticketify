"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, MenuIcon, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const MobNav = () => {
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="lg:hidden"
                asChild
            >
                <Button variant="ghost">
                    <MenuIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => router.push("/register")}>
                    <User2Icon className="h-4 w-4 mr-2 text-muted-foreground" />
                    Create Account
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/login")}>
                    <LogInIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                    Login
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobNav;
