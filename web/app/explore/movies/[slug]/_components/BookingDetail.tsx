import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import PaymentDialog from "../_components/PaymentDialog";
import { Movie } from "@/lib/utils";

const BookingDetail = (props: { movie: Movie }) => {
    return (
        <div>
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
                                    <span>{props.movie?.title}</span>
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
                                    <span className="font-mono">10:00 AM</span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Address:{" "}
                                    </span>
                                    <span>
                                        Area 51, Hinjewadi, Pune - 411057
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-md text-black dark:text-white">
                            <div>
                                <span className="font-semibold">
                                    Ticket Price:{" "}
                                </span>
                                <span>₹ 1500</span>
                            </div>
                            <div>
                                <span className="font-semibold">Qty: </span>
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
            <PaymentDialog />
        </div>
    );
};

export default BookingDetail;
