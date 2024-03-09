import { Metadata } from "next";
import { ExploreCarousel } from "./_components/Carousel";
import MovieCard from "./_components/Card";

export const metadata: Metadata = {
    title: "Movie Tickets",
    description: "Book movie tickets with ease on Ticketify.",
};

const Explore = () => {
    return (
        <main className="flex flex-col max-w-7xl w-full m-auto space-y-5 mt-5 lg:space-y-10 px-2 lg:px-0">
            <ExploreCarousel />
            <div className="min-h-screen">
                <h4 className="text-xl font-bold">Recommended Movies</h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
            </div>
        </main>
    );
};

export default Explore;
