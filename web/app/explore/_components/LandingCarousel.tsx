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
import CarouselCard from "./CarouselCard";
import { findMovieByUrl, getRandomCarousels } from "@/lib/utils";
import { carousels } from "@/data/carousels";
import { movies } from "@/data/movies";
import Link from "next/link";

export function LandingCarousel() {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
    const randomUrls = getRandomCarousels(carousels, 6);

    const foundMovies = randomUrls
        .map(url => findMovieByUrl(movies, url))
        .filter(movie => movie !== undefined);
    return (
        <Carousel
            className="w-full"
            plugins={[plugin.current]}
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {foundMovies?.map((movie, index) => (
                    <CarouselItem key={index}>
                        <Link href={`/explore/movies/${movie.url}`}>
                            <CarouselCard
                                title={movie.title}
                                img={movie.img}
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
