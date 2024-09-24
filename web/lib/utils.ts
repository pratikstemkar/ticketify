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

export type Movie = {
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
    const moviesCopy = [...movies]; // Create a copy of the original list
    const randomMovies: Movie[] = [];

    while (randomMovies.length < count && moviesCopy.length) {
        const randomIndex = Math.floor(Math.random() * moviesCopy.length);
        randomMovies.push(moviesCopy[randomIndex]); // Add the random movie to the result
        moviesCopy.splice(randomIndex, 1); // Remove the selected movie from the copy
    }

    return randomMovies;
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

export function convertToLowercaseHyphen(str: string) {
    return str
        .toLowerCase() // Convert the string to lowercase
        .replace(/[^a-z0-9\s-]/g, "") // Remove any special characters except spaces and hyphens
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-");
}

export function convertToList(str: string) {
    return str.split(",").map(item => item.trim());
}

export function paginate<Movie>(
    items: Movie[],
    pageNumber: number = 1,
    pageSize: number = 10
): Movie[] {
    const startIndex = (pageNumber - 1) * pageSize; // Calculate the starting index for the page
    const endIndex = startIndex + pageSize; // Calculate the ending index for the page
    return items.slice(startIndex, endIndex); // Return the sliced portion of the list
}
