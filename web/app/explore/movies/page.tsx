"use client";

import { movies } from "@/data/movies";
import Link from "next/link";
import MovieCard from "../_components/MovieCard";
import { paginate } from "@/lib/utils";
import { ExplorePagination } from "../_components/ExplorePagination";
import { useSearchParams } from "next/navigation";

const MoviesPage = () => {
    const searchParams = useSearchParams();
    let page = Number(searchParams.get("page"));
    if (!searchParams.has("page")) page = 1;
    return (
        <main className="max-w-7xl m-auto w-full px-2 lg:px-0">
            <div className="flex-col space-y-5">
                <h1 className="font-extrabold text-4xl tracking-tighter">
                    Movies
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                    {paginate(movies, page, 10)?.map((movie, index) => (
                        <Link
                            href={`/explore/movies/${movie.url}`}
                            key={index}
                        >
                            <MovieCard
                                title={movie.title}
                                img={movie.img}
                            />
                        </Link>
                    ))}
                </div>
                <ExplorePagination currentPage={page} />
            </div>
        </main>
    );
};

export default MoviesPage;
