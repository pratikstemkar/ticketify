import LoginForm from "../_components/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Ticket Booking Made Easy!",
};

const LoginPage = () => {
    return (
        <main className="flex m-auto max-w-7xl justify-between items-center mt-28">
            <div className="w-2/3">Login Page</div>
            <div className="flex items-center justify-end w-1/3">
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
