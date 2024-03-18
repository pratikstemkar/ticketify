"use client";

import { Button } from "@/components/ui/button";
import { BellIcon, LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import MobNav from "./MobNav";
import { APP_NAME } from "@/constants";
import { useAuth } from "@/lib/hooks/useAuth";
import UserNav from "./UserNav";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { toast } from "sonner";

const Navbar = () => {
    const auth = useAuth();

    return (
        <nav className="flex px-4 lg:px-10 py-2 justify-between items-center">
            <Link href="/explore">
                <div className="flex items-center space-x-2 group">
                    <Image
                        src="/icon.png"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <h1 className="font-extrabold text-3xl tracking-tighter transition ease-in-out duration-300 group-hover:text-primary">
                        {APP_NAME}
                    </h1>
                </div>
            </Link>

            <div className="flex flex-row-reverse justify-center items-center">
                <div className="inline-flex space-x-2 ml-2 items-center">
                    {auth.user ? (
                        <>
                            <Button
                                variant="ghost"
                                size="icon"
                            >
                                <BellIcon className="h-[1.2rem] w-[1.2rem]" />
                            </Button>
                            <UserNav {...auth.user} />
                        </>
                    ) : (
                        <>
                            <MobNav />
                        </>
                    )}
                    <div className="space-x-2 hidden lg:inline-flex ml-2 ">
                        {!auth.user && (
                            <>
                                <Button
                                    variant="outline"
                                    asChild
                                >
                                    <Link href="/register">
                                        <span>Create Account</span>{" "}
                                    </Link>
                                </Button>
                                <Button
                                    variant="default"
                                    asChild
                                >
                                    <Link href="/login">
                                        <LogInIcon className="h-4 w-4 mr-2" />
                                        <span>Login</span>{" "}
                                    </Link>
                                </Button>
                            </>
                        )}
                        <ThemeToggle />
                    </div>
                </div>
                <SearchBar />
            </div>
        </nav>
    );
};

export default Navbar;
