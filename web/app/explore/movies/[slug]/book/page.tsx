import MovieCard from "@/app/explore/_components/MovieCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { findMovieBySlug } from "@/lib/utils";
import { Share2Icon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Booking from "../_components/Booking";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const foundMovie = findMovieBySlug(params.slug);
    return {
        title: "Book Tickets for " + foundMovie?.title,
    };
}

const BookPage = ({ params }: { params: { slug: string } }) => {
    const foundMovie = findMovieBySlug(params.slug);
    if (!foundMovie) {
        notFound();
    }

    return (
        <main className="flex-col space-y-10 max-w-7xl m-auto">
            <div className="flex lg:flex-row flex-col space-y-5 lg:space-y-0 space-x-0 lg:space-x-5 px-2 lg:px-0 mt-5">
                <div className="flex justify-center">
                    <MovieCard
                        title={foundMovie.title}
                        img={foundMovie.img}
                    />
                </div>
                <div className="flex-col space-y-5">
                    <div className="flex justify-between">
                        <h2 className="font-extrabold text-4xl tracking-tighter">
                            {foundMovie.title}
                        </h2>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline">
                                        <Share2Icon className="h-4 w-4 mr-2" />
                                        <span>Share</span>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Share the movie</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="">{foundMovie.desc}</div>
                    <div className="flex space-x-2">
                        {foundMovie?.tags?.map((tag, index) => (
                            <Badge
                                key={index}
                                className="hover:cursor-pointer"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                    <div>
                        <div className="flex space-x-2">
                            <span>{foundMovie.time}</span>
                            <span>&#x2022;</span>
                            <span>{foundMovie.rating}</span>
                        </div>
                        <div className="flex space-x-2">
                            {foundMovie?.languages?.map((lang, index) => (
                                <div
                                    className="flex space-x-2"
                                    key={index}
                                >
                                    <span className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
                                        {lang}
                                    </span>
                                    {index !=
                                    foundMovie?.languages.length - 1 ? (
                                        <span>&#x2022;</span>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Booking movie={foundMovie} />
        </main>
    );
};

export default BookPage;
