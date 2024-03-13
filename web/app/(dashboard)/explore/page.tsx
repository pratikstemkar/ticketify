import { Metadata } from "next";
import { ExploreCarousel } from "./_components/Carousel";
import MovieCard from "./_components/Card";
import { movies } from "@/app/data/movies";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Movie Tickets, Stand Up comedy, Cricket Matches",
    description: "Book movie tickets with ease on Ticketify.",
};

const Explore = () => {
    return (
        <main className="flex flex-col max-w-7xl w-full m-auto space-y-5 mt-5 lg:space-y-10 px-2 lg:px-0">
            <ExploreCarousel />
            <div className="">
                <h4 className="text-lg lg:text-2xl font-bold">
                    Recommended Movies
                </h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5">
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
            </div>
        </main>
    );
};

export default Explore;
