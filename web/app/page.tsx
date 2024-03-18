import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const words = `Catch your favorite shows, movies, and events hassle-free with Ticketify – where ticketing is made simple.  Skip the lines and book your tickets effortlessly with us. Elevate your entertainment experience today.`;

// export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <main className="flex max-w-7xl m-auto w-full mt-24 lg:mt-60">
            <div className="flex flex-col space-y-5 w-full items-center justify-center max-w-4xl m-auto">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20 hidden lg:block"
                    fill="white"
                />
                <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 space-y-5">
                    <h1 className="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">
                        Ticketing <br /> made simple!
                    </h1>

                    <TextGenerateEffect words={words} />

                    <div className="flex w-full justify-center">
                        <Button
                            asChild
                            className="group"
                        >
                            <Link href="/explore">
                                <span>Explore</span>
                                <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-2 transition duration-200 ease-in-out" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
