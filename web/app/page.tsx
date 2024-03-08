import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Catch your favorite shows, movies, and events hassle-free with Ticketify – where ticketing is made simple. Whether it's the latest blockbuster, a live concert, or a thrilling sports match, our platform streamlines the ticket booking process, putting you in the front row of entertainment. Say goodbye to long queues and complicated bookings – with Ticketify, securing your tickets is as easy as a few clicks. Elevate your experience and unlock the door to unforgettable moments with Ticketify.`;

export default function Home() {
    return (
        <main className="flex max-w-7xl m-auto">
            <div className="flex flex-col space-y-5 w-full lg:min-h-dvh items-center justify-center max-w-4xl m-auto">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 hidden lg:block"
                    fill="white"
                />
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                    <h1 className="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
                        Ticketing <br /> made simple!
                    </h1>

                    <TextGenerateEffect words={words} />
                </div>
            </div>
        </main>
    );
}
