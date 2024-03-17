import { Metadata } from "next";
import RegisterForm from "./_components/RegisterForm";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Create Account",
    description: "Create a new Ticketify account.",
};

const RegisterPage = () => {
    return (
        <main className="flex flex-col lg:flex-row max-w-7xl w-full m-auto space-y-5 lg:space-y-0 lg:space-x-2 items-center mt-5 lg:mt-28">
            <div className="lg:w-2/3 px-2">
                <Image
                    src="/illustrations/billus-2.webp"
                    height={1080}
                    width={1920}
                    alt="login"
                    className="rounded-xl"
                />
            </div>
            <div className="flex items-center justify-end w-full lg:w-1/3 px-10 lg:px-0">
                <RegisterForm />
            </div>
        </main>
    );
};

export default RegisterPage;
