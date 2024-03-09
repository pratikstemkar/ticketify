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
import { LogInIcon, MenuIcon } from "lucide-react";
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
                    Create Account
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/login")}>
                    <LogInIcon className="h-4 w-4 mr-2" />
                    Login
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default MobNav;
