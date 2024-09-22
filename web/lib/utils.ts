import { movies } from "@/data/movies";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function findMovieBySlug(slug: string) {
    const foundMovie = movies.find(movie => movie.url === slug);
    return foundMovie;
}

type Movie = {
    title: string;
    img: string;
    desc: string;
    url: string;
    actors: string[];
    director: string;
    tags: string[];
    time: string;
    rating: string;
    languages: string[];
};

export function getRandomMovies(movies: Movie[], count: number = 5): Movie[] {
    const shuffled = movies.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
}

export function findMovieByUrl(
    movies: Movie[],
    url: string
): Movie | undefined {
    return movies.find(movie => movie.url === url);
}

export function getRandomCarousels(
    strings: string[],
    count: number = 5
): string[] {
    const shuffled = strings.sort(() => 0.5 - Math.random());

    return shuffled.slice(0, count);
}
