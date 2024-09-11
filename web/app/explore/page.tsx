import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ExplorePagination } from "./_components/ExplorePagination";
import { LandingCarousel } from "./_components/LandingCarousel";
import { Button } from "@/components/ui/button";
import { BookmarkIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";

const ExplorePage = () => {
    return (
        <main className="flex flex-col max-w-7xl m-auto space-y-5">
            <LandingCarousel />
            <div>
                <h4 className="text-2xl font-bold">Recommendations</h4>
                <div className="flex space-x-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hehe</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <Image
                                    src="https://picsum.photos/id/876/500/300"
                                    width={300}
                                    height={600}
                                    className="rounded-lg mb-2"
                                    alt="heh"
                                />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab hic dolorem consequuntur
                                ullam quidem commodi, molestias, nam magni illo
                                adipisci veritatis temporibus eligendi sunt
                                accusamus iure officiis maiores optio autem.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <div className="inline-flex space-x-2 w-full justify-between">
                                <Button variant="ghost">
                                    <ThumbsUpIcon className="w-4 h-4" />
                                </Button>
                                <Button>
                                    <span>Watch Now</span>
                                </Button>
                                <Button variant="ghost">
                                    <BookmarkIcon className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hehe</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <Image
                                    src="https://picsum.photos/id/345/500/300"
                                    width={300}
                                    height={600}
                                    className="rounded-lg mb-2"
                                    alt="heh"
                                />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab hic dolorem consequuntur
                                ullam quidem commodi, molestias, nam magni illo
                                adipisci veritatis temporibus eligendi sunt
                                accusamus iure officiis maiores optio autem.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <div className="inline-flex space-x-2 w-full justify-between">
                                <Button variant="ghost">
                                    <ThumbsUpIcon className="w-4 h-4" />
                                </Button>
                                <Button>
                                    <span>Watch Now</span>
                                </Button>
                                <Button variant="ghost">
                                    <BookmarkIcon className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hehe</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <Image
                                    src="https://picsum.photos/id/983/500/300"
                                    width={300}
                                    height={600}
                                    className="rounded-lg mb-2"
                                    alt="heh"
                                />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab hic dolorem consequuntur
                                ullam quidem commodi, molestias, nam magni illo
                                adipisci veritatis temporibus eligendi sunt
                                accusamus iure officiis maiores optio autem.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <div className="inline-flex space-x-2 w-full justify-between">
                                <Button variant="ghost">
                                    <ThumbsUpIcon className="w-4 h-4" />
                                </Button>
                                <Button>
                                    <span>Watch Now</span>
                                </Button>
                                <Button variant="ghost">
                                    <BookmarkIcon className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Hehe</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                <Image
                                    src="https://picsum.photos/id/555/500/300"
                                    width={300}
                                    height={600}
                                    className="rounded-lg mb-2"
                                    alt="heh"
                                />
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab hic dolorem consequuntur
                                ullam quidem commodi, molestias, nam magni illo
                                adipisci veritatis temporibus eligendi sunt
                                accusamus iure officiis maiores optio autem.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <div className="inline-flex space-x-2 w-full justify-between">
                                <Button variant="ghost">
                                    <ThumbsUpIcon className="w-4 h-4" />
                                </Button>
                                <Button>
                                    <span>Watch Now</span>
                                </Button>
                                <Button variant="ghost">
                                    <BookmarkIcon className="w-4 h-4" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            <ExplorePagination />
        </main>
    );
};

export default ExplorePage;
