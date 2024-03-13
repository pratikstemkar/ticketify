import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import MobNav from "./MobNav";
import { APP_NAME } from "@/constants";

const Navbar = () => {
    return (
        <nav className="flex px-4 lg:px-10 py-2 justify-between">
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

            <div className="space-x-2 hidden lg:inline-block">
                <Link href="/register">
                    <Button variant="outline">
                        <span>Create Account</span>
                    </Button>
                </Link>
                <Link href="/login">
                    <Button>
                        <LogInIcon className="h-4 w-4 mr-2" />
                        <span>Login</span>
                    </Button>
                </Link>
                <ThemeToggle />
            </div>
            <MobNav />
        </nav>
    );
};

export default Navbar;
