import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
    return (
        <nav className="flex px-10 py-2 shadow-md justify-between">
            <Link href="/">
                <div className="flex items-center space-x-2 group">
                    <Image
                        src="/icon.png"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <h1 className="font-extrabold text-3xl tracking-tighter transition ease-in-out duration-300 group-hover:text-primary">
                        Ticketify
                    </h1>
                </div>
            </Link>

            <div className="flex space-x-2">
                <Link href="/login">
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
        </nav>
    );
};

export default Navbar;
