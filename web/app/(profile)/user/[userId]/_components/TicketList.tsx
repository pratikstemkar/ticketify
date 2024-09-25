import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ArchiveIcon, Trash2Icon } from "lucide-react";
import { tickets } from "@/data/tickets";

const TicketList = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {tickets?.map((ticket, index) => (
                <Card key={index}>
                    <CardHeader className="">
                        <CardTitle>{ticket.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="">
                        <div className="text-sm">
                            <div className="flex-col space-y-1">
                                <div>
                                    <span className="font-semibold">
                                        Movie Name:{" "}
                                    </span>
                                    <span>{ticket.movieName}</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Theatre Name:{" "}
                                    </span>
                                    <span>{ticket.movieName}</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Show Date:{" "}
                                    </span>
                                    <span className="font-mono">
                                        {ticket.date}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Show Time:{" "}
                                    </span>
                                    <span className="font-mono">
                                        {ticket.time}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Address:{" "}
                                    </span>
                                    <span>{ticket.address}</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Ticket Price:{" "}
                                    </span>
                                    <span>₹ {ticket.price}</span>
                                </div>
                                <div>
                                    <span className="font-semibold">Qty: </span>
                                    <span>{ticket.qty}</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Total Amount:{" "}
                                    </span>
                                    <span>₹ 15000</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-row-reverse">
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                >
                                    <Trash2Icon className="h-4 w-4 text-red-500" />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Are you sure you want to delete the
                                        ticket?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete the ticket and you
                                        would not be able to recover it.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction>
                                        Continue
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <Button
                            variant="ghost"
                            size="icon"
                        >
                            <ArchiveIcon className="h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default TicketList;
