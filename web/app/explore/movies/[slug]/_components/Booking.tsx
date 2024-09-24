import { Movie } from "@/lib/utils";
import TheatreList from "./TheatreList";
import BookingDetail from "./BookingDetail";

const Booking = (props: { movie: Movie }) => {
    return (
        <div className="flex-col px-2 lg:px-0">
            <h1 className="text-2xl font-bold">Book your Tickets</h1>
            <div className="flex justify-between flex-col lg:flex-row">
                <div className="flex flex-col space-y-5 mt-5 w-full lg:w-1/3">
                    <TheatreList />
                </div>
                <div className="flex flex-col space-y-2 mt-5 w-full lg:w-1/3">
                    <BookingDetail movie={props.movie} />
                </div>
            </div>
        </div>
    );
};

export default Booking;
