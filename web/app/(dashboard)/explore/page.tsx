import { Metadata } from "next";
import { ExploreCarousel } from "./_components/Carousel";
import MovieCard from "./_components/Card";
import { movies } from "@/data/movies";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Movie Tickets, Stand Up comedy, Cricket Matches",
    description: "Book movie tickets with ease on Ticketify.",
};

const Explore = () => {
    return (
        <main className="flex flex-col max-w-7xl w-full m-auto space-y-5 mt-5 lg:space-y-10 px-2 lg:px-0">
            <ExploreCarousel />
            <div className="flex w-full justify-center">
                <Link href="/explore/movies">
                    <Image
                        src="/icons/movie.png"
                        alt="iconssd"
                        height={100}
                        width={100}
                        className="p-5 hover:border hover:border-opacity-80 hover:cursor-pointer rounded-xl"
                    />
                </Link>
                <Link href="/explore/comedy">
                    <Image
                        src="/icons/comedy.png"
                        alt="iconssd"
                        height={100}
                        width={100}
                        className="p-5 hover:border hover:border-opacity-80 hover:cursor-pointer rounded-xl"
                    />
                </Link>
                <Link href="party">
                    <Image
                        src="/icons/party.png"
                        alt="iconssd"
                        height={100}
                        width={100}
                        className="p-5 hover:border hover:border-opacity-80 hover:cursor-pointer rounded-xl"
                    />
                </Link>
            </div>
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
