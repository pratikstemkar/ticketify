import RegisterForm from "../_components/RegisterForm";

const RegisterPage = () => {
    return (
        <main className="flex m-auto max-w-7xl justify-between items-center mt-28">
            <div className="w-2/3">Register Page</div>
            <div className="flex items-center justify-end w-1/3">
                <RegisterForm />
            </div>
        </main>
    );
};

export default RegisterPage;
