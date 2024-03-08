import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex max-w-7xl m-auto">
            <div className="flex flex-col space-y-5 w-full min-h-screen items-center justify-center max-w-4xl m-auto">
                <h1 className="text-7xl font-extrabold tracking-tight">
                    Ticketing Made Simple!
                </h1>
                <p className="font-medium text-center">
                    Catch your favorite shows, movies, and events hassle-free
                    with Ticketify – where ticketing is made simple. Whether
                    it&apos;s the latest blockbuster, a live concert, or a
                    thrilling sports match, our platform streamlines the ticket
                    booking process, putting you in the front row of
                    entertainment. Say goodbye to long queues and complicated
                    bookings – with Ticketify, securing your tickets is as easy
                    as a few clicks. Elevate your experience and unlock the door
                    to unforgettable moments with Ticketify.
                </p>
                <Link href="/login">
                    <Button>
                        <span>Join Now</span>
                        <MoveRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>
        </main>
    );
}
