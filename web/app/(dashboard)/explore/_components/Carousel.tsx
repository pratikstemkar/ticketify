"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const data = [
    {
        title: "Manorama: Six Feet Under",
        img: "manorama.jpg",
    },
    {
        title: "Bridge of Spies",
        img: "spies.jpg",
    },
    {
        title: "Gangs of Wasseypur",
        img: "gangs.avif",
    },
    {
        title: "Swades",
        img: "swades.avif",
    },
    {
        title: "Talvar",
        img: "talvar.jpg",
    },
    {
        title: "Parasite",
        img: "parasite.jpeg",
    },
];

export function ExploreCarousel() {
    return (
        <Carousel
            className="w-full"
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {data.map((movie, index) => (
                    <CarouselItem key={index}>
                        <div className="relative aspect-[200/60] h-32 lg:h-96 w-full hover:cursor-pointer">
                            <Image
                                src={`/movies/${movie.img}`}
                                alt=""
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
