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
