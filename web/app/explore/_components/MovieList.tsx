"use client";

import { movies } from "@/data/movies";
import { paginate } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ExplorePagination } from "../_components/ExplorePagination";
import MovieCard from "./MovieCard";

const MovieList = () => {
    const searchParams = useSearchParams();
    let page = Number(searchParams.get("page"));
    if (!searchParams.has("page")) page = 1;

    return (
        <div className="flex-col items-center space-y-5">
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
    );
};

export default MovieList;
