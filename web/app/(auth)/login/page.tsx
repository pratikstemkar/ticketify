import { Metadata } from "next";
import LoginForm from "./_components/LoginForm";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Login",
    description: "Sign In to your Ticketify account.",
};

const LoginPage = () => {
    return (
        <main className="flex flex-col lg:flex-row max-w-7xl w-full m-auto space-y-5 lg:space-y-0 lg:space-x-2 items-center">
            <div className="lg:w-2/3 px-2">
                <Image
                    src="/illustrations/billus-1.webp"
                    height={720}
                    width={1280}
                    alt="login"
                    className="rounded-xl"
                />
            </div>
            <div className="flex items-center justify-end w-full lg:w-1/3 px-10 lg:px-0">
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
