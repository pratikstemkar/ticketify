import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Party",
    description:
        "Ticket booking and management. Book tickets for movies, stand up comedy shows, cricket matches and many more.",
};

const PartyListPage = () => {
    return (
        <div className="font-bold text-4xl flex flex-col m-auto w-full max-w-7xl">
            Coming Soon!
            <span className="text-lg font-mono">
                We&apos;re working on the products and we&apos;ll be adding
                parties soon.
            </span>
        </div>
    );
};

export default PartyListPage;
