import { Metadata } from "next";
import { ExploreCarousel } from "./_components/Carousel";
import MovieCard from "./_components/Card";

export const metadata: Metadata = {
    title: "Movie Tickets",
    description: "Book movie tickets with ease on Ticketify.",
};

const data = [
    {
        title: "Shaitaan",
        img: "shaitan.avif",
    },
    {
        title: "Laapata Ladies",
        img: "lapata.avif",
    },
    {
        title: "Article 370",
        img: "370.avif",
    },
    {
        title: "Chak De India",
        img: "chak.avif",
    },
    {
        title: "Demon Slayer",
        img: "demon.avif",
    },
    {
        title: "Tera Kya Hoga Lovely",
        img: "lovely.avif",
    },
    {
        title: "Raazi",
        img: "raazi.avif",
    },
    {
        title: "Teri Baaton Mein Aisa Uljha Jiya",
        img: "uljha.avif",
    },
];

const Explore = () => {
    return (
        <main className="flex flex-col max-w-7xl w-full m-auto space-y-5 mt-5 lg:space-y-10 px-2 lg:px-0">
            <ExploreCarousel />
            <div className="">
                <h4 className="text-xl font-bold">Recommended Movies</h4>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5">
                    {data?.map((movie, index) => (
                        <MovieCard
                            key={index}
                            title={movie.title}
                            img={movie.img}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Explore;
