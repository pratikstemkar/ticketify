import { movies } from "@/data/movies";
import { LandingCarousel } from "./_components/LandingCarousel";
import Link from "next/link";
import MovieCard from "./_components/MovieCard";
import { getRandomMovies } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";

const ExplorePage = () => {
    return (
        <main className="flex flex-col max-w-7xl m-auto space-y-5">
            <LandingCarousel />
            <div>
                <div className="flex items-center justify-between">
                    <h4 className="text-2xl font-bold">Recommended Movies</h4>
                    <Link
                        href="/explore/movies"
                        className="hover:underline hover:underline-offset-4 hover:text-primary group flex items-center"
                    >
                        <span>View All</span>
                        <ChevronRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-2 transition ease-in-out duration-300" />
                    </Link>
                </div>
                <div className="grid grid-cols-5 gap-5">
                    {getRandomMovies(movies)?.map((movie, index) => (
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

export default ExplorePage;
