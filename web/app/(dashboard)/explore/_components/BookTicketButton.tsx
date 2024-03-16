"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const BookTicketButton = () => {
    const router = useRouter();

    const handleBookTickets = () => {
        toast("Log In to book tickets.", {
            description: "You must have an account to book tickets.",
            action: {
                label: "Log In",
                onClick: () => router.push("/login"),
            },
        });
    };

    return (
        <Button
            className="mt-5 lg:w-1/4"
            onClick={handleBookTickets}
        >
            Book tickets
        </Button>
    );
};

export default BookTicketButton;
