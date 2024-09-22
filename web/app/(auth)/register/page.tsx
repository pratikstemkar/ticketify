import RegisterForm from "../_components/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Ticket Booking Made Easy!",
};

const RegisterPage = () => {
    return (
        <main className="flex m-auto max-w-7xl justify-between items-center mt-28 px-5 lg:px-0">
            <div className="flex items-center w-full lg:w-1/3">
                <RegisterForm />
            </div>
            <div className="w-2/3 justify-end hidden lg:block">
                {/* <div className="">Register Page</div> */}
            </div>
        </main>
    );
};

export default RegisterPage;
