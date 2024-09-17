import { movies } from "@/data/movies";
import { ExplorePagination } from "./_components/ExplorePagination";
import { LandingCarousel } from "./_components/LandingCarousel";
import Link from "next/link";
import MovieCard from "./_components/MovieCard";

const ExplorePage = () => {
    return (
        <main className="flex flex-col max-w-7xl m-auto space-y-5">
            <LandingCarousel />
            <div>
                <h4 className="text-2xl font-bold">Recommended Movies</h4>
                <div className="grid grid-cols-5 gap-5">
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
            <ExplorePagination />
        </main>
    );
};

export default ExplorePage;
