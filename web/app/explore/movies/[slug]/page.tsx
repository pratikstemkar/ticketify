import {
    convertToList,
    convertToLowercaseHyphen,
    findMovieBySlug,
} from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import MovieCard from "../../_components/MovieCard";
import { Button } from "@/components/ui/button";
import {
    Share2Icon,
    StarIcon,
    ThumbsDownIcon,
    ThumbsUpIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const foundMovie = findMovieBySlug(params.slug);
    return {
        title: foundMovie?.title,
    };
}

const MovieDetail = ({ params }: { params: { slug: string } }) => {
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
                        <Button variant="outline">
                            <Share2Icon className="h-4 w-4 mr-2" />
                            <span>Share</span>
                        </Button>
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
                    <div>
                        <Link href={`/explore/movies/${params.slug}/book`}>
                            <Button size="lg">
                                <span>Book Tickets</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex-col px-2 lg:px-0 space-y-10 max-w-5xl">
                <div>
                    <h4 className="font-bold text-2xl">Cast</h4>
                    <div className="flex space-x-5 mt-2">
                        {foundMovie?.actors.map((actor, index) => (
                            <div
                                key={index}
                                className="flex flex-col space-y-2 items-center justify-center hover:cursor-pointer"
                            >
                                <div>
                                    <Image
                                        src={`/casts/${convertToLowercaseHyphen(
                                            actor
                                        )}.webp`}
                                        alt={actor}
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                </div>
                                <div className="flex flex-col space-y-1 items-center justify-center">
                                    <div>{actor}</div>
                                    <div className="text-muted-foreground text-sm">
                                        {actor}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div>
                    <h4 className="font-bold text-2xl">Crew</h4>
                    <div className="flex space-x-5 mt-2">
                        {convertToList(foundMovie?.director).map(
                            (actor, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col space-y-2 items-center justify-center hover:cursor-pointer"
                                >
                                    <div>
                                        <Image
                                            src="https://github.com/pratikstemkar.png"
                                            alt={actor}
                                            width={100}
                                            height={100}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div className="flex flex-col space-y-1 items-center justify-center">
                                        <div>{actor}</div>
                                        <div className="text-muted-foreground text-sm">
                                            <span>Director</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <hr />
                <div className="flex-col space-y-5">
                    <h4 className="font-bold text-2xl">Reviews</h4>
                    <div className="flex flex-col lg:flex-row space-y-2 space-x-0 lg:space-x-5 lg:space-y-0">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    <span>Review 1</span>
                                    <div className="text-base flex space-x-2 items-center">
                                        <StarIcon className="h-5 w-5" />
                                        <span>9.5/10</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit ipsam cum
                                    asperiores recusandae odio et animi nemo?
                                    Magni, assumenda obcaecati? Autem tempore
                                    consequuntur praesentium illo odio libero
                                    doloribus, ut mollitia?
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ThumbsUpIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ThumbsDownIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Share2Icon className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    <span>Review 2</span>
                                    <div className="text-base flex space-x-2 items-center">
                                        <StarIcon className="h-5 w-5" />
                                        <span>9.5/10</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit ipsam cum
                                    asperiores recusandae odio et animi nemo?
                                    Magni, assumenda obcaecati? Autem tempore
                                    consequuntur praesentium illo odio libero
                                    doloribus, ut mollitia?
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ThumbsUpIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ThumbsDownIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Share2Icon className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex justify-between items-center">
                                    <span>Review 3</span>
                                    <div className="text-base flex space-x-2 items-center">
                                        <StarIcon className="h-5 w-5" />
                                        <span>8/10</span>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Impedit ipsam cum
                                    asperiores recusandae odio et animi nemo?
                                    Magni, assumenda obcaecati? Autem tempore
                                    consequuntur praesentium illo odio libero
                                    doloribus, ut mollitia?
                                </CardDescription>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ThumbsUpIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                    >
                                        <ThumbsDownIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Share2Icon className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MovieDetail;
