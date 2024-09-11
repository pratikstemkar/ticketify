import RegisterForm from "../_components/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Ticket Booking Made Easy!",
};

const RegisterPage = () => {
    return (
        <main className="flex m-auto max-w-7xl justify-between items-center mt-28">
            <div className="flex items-center w-1/3">
                <RegisterForm />
            </div>
            <div className="w-2/3 justify-end">
                <div className="bg-red-500">Register Page</div>
            </div>
        </main>
    );
};

export default RegisterPage;
