"use client";

import { movies } from "@/data/movies";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

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
                {movies.map((movie, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-1/2 lg:basis-1/3"
                    >
                        <Link href={`/explore/movies/${movie.url}`}>
                            <Image
                                src={`/movies/${movie.imgL}`}
                                alt={movie.title}
                                width={1280}
                                height={720}
                                className="rounded-md hover:cursor-pointer"
                            />
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
