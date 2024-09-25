import { Button } from "@/components/ui/button";
import { theatres } from "@/data/theatres";

const TheatreList = () => {
    return (
        <div className="flex-col space-y-5">
            {theatres?.map((theatre, index) => (
                <div
                    className="flex-col space-y-1"
                    key={index}
                >
                    <div className="flex space-x-2 items-center">
                        <h4 className="font-bold">{theatre.name}</h4>
                        <span className="text-muted-foreground text-sm">
                            {theatre.address}
                        </span>
                    </div>
                    <div className="flex-col space-y-2 max-w-xl">
                        {theatre?.shows?.map((show, index) => (
                            <div
                                key={index}
                                className="flex-col space-y-1"
                            >
                                <h4 className="text-md font-mono text-sm">
                                    {show.date}
                                </h4>
                                <div className="flex space-x-2">
                                    {show.times?.map((time, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="rounded-full hover:border-primary text-sm"
                                        >
                                            {time}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TheatreList;
