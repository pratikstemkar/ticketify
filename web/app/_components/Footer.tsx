import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex px-20 py-5 text-muted-foreground text-sm">
            <span className="hidden lg:block">
                Ticketify &copy; {new Date().getFullYear()} |
            </span>
            <span className="lg:ml-1.5">
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
        </footer>
    );
};

export default Footer;
