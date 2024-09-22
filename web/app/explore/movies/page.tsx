import { movies } from "@/data/movies";
import Link from "next/link";
import MovieCard from "../_components/MovieCard";

const MoviesPage = () => {
    return (
        <main className="max-w-7xl m-auto w-full px-2 lg:px-0">
            <div>
                <h1 className="font-extrabold text-4xl tracking-tighter">
                    Movies
                </h1>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
                    {movies?.map((movie, index) => (
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
            </div>
        </main>
    );
};

export default MoviesPage;
