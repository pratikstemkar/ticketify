import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex items-center justify-center px-2 lg:px-0 mt-10 lg:mt-10">
            <div className="max-w-7xl w-full">
                <div className="flex flex-col items-center text-center space-y-5 justify-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tighter">
                        Ticketing Made Easy
                    </h1>
                    <p className="text-base lg:text-lg max-w-3xl">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quod at rem quasi repudiandae dicta nulla atque
                        rerum nisi, officiis dolor, aut quam, maxime quo! Iusto
                        laudantium vero accusantium quibusdam doloremque! Lorem
                        ipsum dolor sit, amet consectetur adipisicing elit.
                        Perspiciatis officiis perferendis qui sequi eligendi at,
                        velit totam? Iure libero hic autem quidem quasi quia id,
                        eligendi, rem quam aut reprehenderit.
                    </p>
                    <div>
                        <Link href="/explore">
                            <Button
                                size="lg"
                                className="shadow-lg hover:shadow-none hover:scale-105 transition ease-in-out duration-300"
                            >
                                <span>Book Tickets Now</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
