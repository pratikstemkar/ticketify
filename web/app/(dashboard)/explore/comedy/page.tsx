import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stand Up Comedy",
    description:
        "Ticket booking and management. Book tickets for movies, stand up comedy shows, cricket matches and many more.",
};

const ComedyListPage = () => {
    return (
        <div className="font-bold text-4xl flex flex-col m-auto w-full max-w-7xl">
            Coming Soon!
            <span className="text-lg font-mono">
                We&apos;re working on the products and we&apos;ll be adding
                comedy shows soon.
            </span>
        </div>
    );
};

export default ComedyListPage;
