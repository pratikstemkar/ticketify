import { Button } from "@/components/ui/button";
import MovieCard from "../../_components/Card";
import { ShareIcon, ThumbsUpIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { findMovieByUrl } from "@/app/data/movies";
import { notFound } from "next/navigation";

const MoviePage = ({ params }: { params: { movieId: string } }) => {
    const foundMovie = findMovieByUrl(params.movieId);
    if (!foundMovie) {
        notFound();
    }

    return (
        <main className="flex flex-col space-y-5 lg:space-y-10 max-w-7xl m-auto w-full min-h-screen px-4 lg:px-0">
            <div className="flex flex-col lg:flex-row items-center w-full mt-5 lg:mt-10">
                <Image
                    src={`/movies/${foundMovie.imgL}`}
                    alt="hah"
                    height={100}
                    width={500}
                    className="w-full rounded-lg mb-5 lg:hidden"
                />
                <MovieCard
                    title="Shaitan"
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
                                    className="px-2 py-0.5 bg-slate-400 rounded-md text-sm"
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
                    <Button className="mt-5 lg:w-1/4">Book tickets</Button>
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
                            className="flex flex-col items-center justify-center space-y-2"
                            key={index}
                        >
                            <Avatar className="h-32 w-32">
                                <AvatarImage src="https://github.com/pratikstemkar.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <h4>{actor}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Director</h3>
                <div className="flex space-x-5 mt-2">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <Avatar className="h-32 w-32">
                            <AvatarImage src="https://github.com/pratikstemkar.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>{foundMovie.director}</h4>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MoviePage;
