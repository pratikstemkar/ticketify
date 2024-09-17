import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/constants";

const Navbar = () => {
    return (
        <nav className="flex px-4 py-2 justify-between items-center">
            <Link href="/explore">
                <div className="flex items-center space-x-2 group">
                    <Image
                        src="/logos/icon.png"
                        alt="Ticketify Logo"
                        width={40}
                        height={40}
                    />
                    <h1 className="text-3xl font-extrabold tracking-tighter transition duration-300 ease-in-out group-hover:text-primary">
                        {APP_NAME}
                    </h1>
                </div>
            </Link>
            <div className="inline-flex space-x-2">
                <Button
                    variant="default"
                    asChild
                >
                    <Link href="/login">
                        <LogInIcon className="h-4 w-4 mr-2" />
                        <span>Login</span>
                    </Link>
                </Button>
                <ThemeToggle />
            </div>
        </nav>
    );
};

export default Navbar;
