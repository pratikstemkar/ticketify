import { Metadata } from "next";
import LoginForm from "./_components/LoginForm";

export const metadata: Metadata = {
    title: "Login",
    description: "Sign In to your Ticketify account.",
};

const LoginPage = () => {
    return (
        <main className="flex max-w-7xl w-full m-auto px-10 lg:px-0">
            <div className="lg:w-1/2 hidden lg:block"></div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
