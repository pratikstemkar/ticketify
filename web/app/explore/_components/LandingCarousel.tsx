"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function LandingCarousel() {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    return (
        <Carousel
            className="w-full"
            plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Image
                            src="/carousels/500-days-of-summer.webp"
                            alt="ha"
                            width={1920}
                            height={480}
                            className="rounded-lg hover:cursor-pointer"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Image
                            src="/carousels/parasite.webp"
                            alt="ha"
                            width={1920}
                            height={480}
                            className="rounded-lg hover:cursor-pointer"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Image
                            src="/carousels/oppenheimer.webp"
                            alt="ha"
                            width={1920}
                            height={480}
                            className="rounded-lg hover:cursor-pointer"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                        <Image
                            src="/carousels/past-lives.webp"
                            alt="ha"
                            width={1920}
                            height={480}
                            className="rounded-lg hover:cursor-pointer"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
