import { Loader2Icon } from "lucide-react";

const Loading = () => {
    return (
        <main className="flex w-full justify-center items-center min-h-screen">
            <Loader2Icon className="animate-spin h-10 w-10" />
        </main>
    );
};

export default Loading;
