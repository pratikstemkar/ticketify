import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-red-500">Not Found</h2>
            <p>Could not find requested resource</p>
            <Link
                href="/explore"
                className="underline underline-offset-4"
            >
                Return Home
            </Link>
        </main>
    );
}
