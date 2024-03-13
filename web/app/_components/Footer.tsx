import { APP_NAME } from "@/constants";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex lg:flex-row px-4 lg:px-20 py-5 text-muted-foreground text-sm">
            <span className="hidden lg:block">
                {APP_NAME} &copy; {new Date().getFullYear()} |
            </span>
            <span className="lg:ml-1.5">
                Built by{" "}
                <Link
                    href="https://pratikstemkar.in"
                    target="_blank"
                    className="underline underline-offset-4"
                >
                    Pratik
                </Link>
                . Code available on{" "}
                <Link
                    href="https://github.com/pratikstemkar/ticketify"
                    target="_blank"
                    className="underline underline-offset-4"
                >
                    GitHub
                </Link>
                .
            </span>
        </footer>
    );
};

export default Footer;
