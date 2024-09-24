import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import PaymentForm from "./PaymentForm";

const PaymentDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button className="w-full">Confirm Booking</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        Pay for your booking
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. No refunds will be issued
                        in any circumstance after booking payment is done.
                    </DialogDescription>
                    <PaymentForm />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PaymentDialog;
