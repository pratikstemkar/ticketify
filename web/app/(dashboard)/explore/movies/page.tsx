import { movies } from "@/data/movies";
import type { Metadata } from "next";
import Link from "next/link";
import MovieCard from "../_components/Card";

export const metadata: Metadata = {
    title: "Movies",
    description:
        "Ticket booking and management. Book tickets for movies, stand up comedy shows, cricket matches and many more.",
};

const MoviesListPage = () => {
    return (
        <main className="flex flex-col w-full max-w-7xl m-auto mt-4 lg:mt-10 px-2 lg:px-0">
            <h2 className="font-bold text-2xl">Movies to watch</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5 mt-5">
                {movies?.map((movie, index) => (
                    <Link
                        href={`/explore/movies/${movie.url}`}
                        key={index}
                    >
                        <MovieCard
                            title={movie.title}
                            img={movie.imgP}
                        />
                    </Link>
                ))}
            </div>
        </main>
    );
};

export default MoviesListPage;
