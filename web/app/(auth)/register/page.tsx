import { Metadata } from "next";
import RegisterForm from "./_components/RegisterForm";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Create a new Ticketify account.",
};

const RegisterPage = () => {
    return (
        <main className="flex max-w-7xl w-full m-auto">
            <div className="lg:w-1/2 hidden lg:block"></div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <RegisterForm />
            </div>
        </main>
    );
};

export default RegisterPage;
