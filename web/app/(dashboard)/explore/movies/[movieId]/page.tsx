import { Button } from "@/components/ui/button";
import MovieCard from "../../_components/Card";
import { ShareIcon, ThumbsUpIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { findMovieByUrl } from "@/data/movies";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import type { Metadata } from "next";
import BookTicketButton from "../../_components/BookTicketButton";

export async function generateMetadata({
    params,
}: {
    params: { movieId: string };
}): Promise<Metadata> {
    const id = params.movieId;

    const foundMovie = findMovieByUrl(params.movieId);

    return {
        title: foundMovie?.title,
    };
}

const MoviePage = ({ params }: { params: { movieId: string } }) => {
    const foundMovie = findMovieByUrl(params.movieId);
    if (!foundMovie) {
        notFound();
    }

    return (
        <main className="flex flex-col space-y-5 lg:space-y-10 max-w-7xl m-auto w-full min-h-screen px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center w-full mt-5 lg:mt-10">
                <Suspense
                    fallback={
                        <Skeleton className="w-full h-[100px] rounded-lg mb-5 lg:hidden" />
                    }
                >
                    <Image
                        src={`/movies/${foundMovie.imgL}`}
                        alt="hah"
                        height={100}
                        width={500}
                        className="w-full rounded-lg mb-5 lg:hidden"
                    />
                </Suspense>
                <MovieCard
                    title={foundMovie.title}
                    img={foundMovie.imgP}
                />
                <div className="flex flex-col space-y-4 w-full lg:ml-5">
                    <div className="flex justify-between">
                        <h1 className="text-4xl font-bold">
                            {foundMovie.title}
                        </h1>
                        <Button variant="ghost">
                            <ShareIcon className="h-4 w-4 mr-2" />
                            <span>Share</span>
                        </Button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ThumbsUpIcon className="h-4 w-4" />
                        <span>30k liked</span>
                    </div>
                    <div className="flex items-center space-x-4 rounded-lg py-2">
                        <div className="flex flex-col space-y-0.5">
                            <span>Releasing on 15 Mar, 2024</span>
                            <span className="text-xs">
                                Are you interested in watching this movie?
                            </span>
                        </div>
                        <Button variant="secondary">I&apos;m interested</Button>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex space-x-2">
                            {foundMovie.languages.map((lang, index) => (
                                <div
                                    className="px-2 py-0.5 bg-slate-300 dark:bg-slate-700 text-black dark:text-white rounded-md text-sm"
                                    key={index}
                                >
                                    {lang}
                                </div>
                            ))}
                        </div>
                        <div className="flex space-x-2 items-center">
                            <span className="mr-2">{foundMovie.time}</span>
                            <span className="mr-2">{foundMovie.tags}</span>
                            <span>{foundMovie.rating}</span>
                        </div>
                    </div>
                    <BookTicketButton />
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">About the movie</h3>
                <p>{foundMovie.about}</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Cast</h3>
                <div className="flex space-x-5 mt-2">
                    {foundMovie.actors?.map((actor, index) => (
                        <div
                            className="flex flex-col items-center justify-center space-y-2 hover:cursor-pointer"
                            key={index}
                        >
                            <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                                <AvatarImage src="https://github.com/pratikstemkar.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h4 className="text-sm">{actor}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Director</h3>
                <div className="flex space-x-5 mt-2">
                    <div className="flex flex-col items-center justify-center space-y-2 hover:cursor-pointer">
                        <Avatar className="h-24 w-24 lg:h-32 lg:w-32">
                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4 className="text-sm">{foundMovie.director}</h4>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MoviePage;
