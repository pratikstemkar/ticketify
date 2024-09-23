import MovieCard from "@/app/explore/_components/MovieCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { findMovieBySlug } from "@/lib/utils";
import { Share2Icon } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

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
                </div>
            </div>
            <div className="flex-col px-2 lg:px-0 space-y-10">
                <div>
                    <h1 className="text-2xl font-bold">Book your Tickets</h1>
                    <div className="flex justify-between">
                        <div className="flex flex-col space-y-5 mt-5 w-1/3">
                            <div className="flex-col space-y-2">
                                <div className="flex space-x-2 items-center">
                                    <h4 className="font-bold">Hello Theatre</h4>
                                    <span className="text-muted-foreground text-sm">
                                        Area 1
                                    </span>
                                </div>
                                <div className="flex-col space-y-2 max-w-xl">
                                    <h4 className="text-md font-mono text-sm">
                                        3rd July, 2024
                                    </h4>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            10:00 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:00 PM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:30 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            08:00 PM
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col space-y-2">
                                <div className="flex space-x-2 items-center">
                                    <h4 className="font-bold">Hello Theatre</h4>
                                    <span className="text-muted-foreground text-sm">
                                        Area 1
                                    </span>
                                </div>
                                <div className="flex-col space-y-2 max-w-xl">
                                    <h4 className="text-md font-mono text-sm">
                                        3rd July, 2024
                                    </h4>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            10:00 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:00 PM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:30 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            08:00 PM
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col space-y-2">
                                <div className="flex space-x-2 items-center">
                                    <h4 className="font-bold">Hello Theatre</h4>
                                    <span className="text-muted-foreground text-sm">
                                        Area 1
                                    </span>
                                </div>
                                <div className="flex-col space-y-2 max-w-xl">
                                    <h4 className="text-md font-mono text-sm">
                                        3rd July, 2024
                                    </h4>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            10:00 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:00 PM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:30 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            08:00 PM
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col space-y-2">
                                <div className="flex space-x-2 items-center">
                                    <h4 className="font-bold">Hello Theatre</h4>
                                    <span className="text-muted-foreground text-sm">
                                        Area 1
                                    </span>
                                </div>
                                <div className="flex-col space-y-2 max-w-xl">
                                    <h4 className="text-md font-mono text-sm">
                                        3rd July, 2024
                                    </h4>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            10:00 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:00 PM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            12:30 AM
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full hover:border-primary"
                                        >
                                            08:00 PM
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 mt-5 w-1/3">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Booking Details</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="flex-col space-y-5">
                                        <div>
                                            {/* <h4 className="font-semibold">
                                                Ticket Details
                                            </h4> */}
                                            <div className="flex-col space-y-1">
                                                <div>
                                                    <span className="font-semibold">
                                                        Movie Name:{" "}
                                                    </span>
                                                    <span>
                                                        {foundMovie?.title}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Theatre Name:{" "}
                                                    </span>
                                                    <span>Hello Theatre</span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Show Date:{" "}
                                                    </span>
                                                    <span className="font-mono">
                                                        3rd July, 2024
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Show Time:{" "}
                                                    </span>
                                                    <span className="font-mono">
                                                        10:00 AM
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold">
                                                        Address:{" "}
                                                    </span>
                                                    <span>
                                                        Area 51, Hinjewadi, Pune
                                                        - 411057
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-md text-black">
                                            <div>
                                                <span className="font-semibold">
                                                    Ticket Price:{" "}
                                                </span>
                                                <span>₹ 1500</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold">
                                                    Qty:{" "}
                                                </span>
                                                <span>x10</span>
                                            </div>
                                            <div>
                                                <span className="font-semibold">
                                                    Total Amount:{" "}
                                                </span>
                                                <span>₹ 15000</span>
                                            </div>
                                        </div>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            <Button>Confirm Booking</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default BookPage;
