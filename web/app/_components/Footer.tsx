import { APP_NAME } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex px-5 lg:px-20 py-5 text-muted-foreground text-sm justify-between">
            <div className="flex">
                <span className="">
                    {APP_NAME} &copy; {new Date().getFullYear()} |
                </span>
                <span className="ml-1.5">
                    Code available on{" "}
                    <Link
                        href="https://github.com/pratikstemkar/ticketify"
                        target="_blank"
                        className="underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </span>
            </div>
            <div className="hidden lg:block">
                <span>
                    <Link
                        href="/about"
                        className="underline underline-offset-4"
                    >
                        About
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
