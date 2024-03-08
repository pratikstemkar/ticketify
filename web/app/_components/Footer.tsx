import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex px-20 py-5 text-muted-foreground text-sm">
            <span className="mr-2">
                Ticketify &copy; {new Date().getFullYear()}
            </span>
            {" | "}
            <span className="ml-2">
                Made by{" "}
                <Link
                    href="https://pratikstemkar.in"
                    target="_blank"
                >
                    Pratik
                </Link>
                . Code available on{" "}
                <Link
                    href="https://github.com/pratikstemkar/ticketify"
                    target="_blank"
                >
                    GitHub
                </Link>
                .
            </span>
        </footer>
    );
};

export default Footer;
