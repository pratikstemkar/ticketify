import LoginForm from "../_components/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Ticket Booking Made Easy!",
};

const LoginPage = () => {
    return (
        <main className="flex m-auto max-w-7xl justify-between items-center mt-28 px-5 lg:px-0">
            <div className="lg:w-2/3 hidden lg:block">Login Page</div>
            <div className="flex items-center justify-end w-full lg:w-1/3">
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
