"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { APP_NAME } from "@/constants";
import { useAppDispatch } from "@/lib/hooks";
import { setCredentials } from "@/lib/features/authSlice";
import { toast } from "sonner";

const formSchema = z.object({
    email: z
        .string()
        .min(4, {
            message: "Email must be atleast 4 characters",
        })
        .max(50)
        .email(),
    password: z
        .string()
        .min(4, {
            message: "Password must be atleast 4 characters",
        })
        .max(32),
});

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);

        try {
            const response = await fetch(
                "http://localhost:8080/api/v1/auth/authenticate",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to authenticate");
            }

            const data = await response.json();
            console.log(data);

            try {
                const myHeaders = new Headers();
                myHeaders.append(
                    "Authorization",
                    `Bearer ${data.access_token}`
                );
                const profileResponse = await fetch(
                    "http://localhost:8080/api/v1/users",
                    {
                        method: "GET",
                        headers: myHeaders,
                        redirect: "follow",
                    }
                );
                if (!profileResponse.ok) {
                    throw new Error("Failed to authenticate token");
                }

                const profileData = await profileResponse.json();
                console.log(profileData);

                dispatch(
                    setCredentials({
                        user: profileData,
                        access_token: data.access_token,
                        refresh_token: data.refresh_token,
                    })
                );
                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("refresh_token", data.refresh_token);

                toast("Logged In!", {
                    description:
                        "Your have logged into your Ticketify account.",
                });

                router.replace("/explore");
            } catch (error: any) {
                console.error("Error: ", error.message);
                toast(error.message, {
                    description:
                        "Failed to authenticate token. Log In again to generate a new token.",
                });
            }
        } catch (error: any) {
            console.error("Error:", error.message);
            toast(error.message, {
                description: "Please check your credentials and try again.",
            });
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col "
            >
                <div>
                    <h1 className="text-xl font-bold">Welcome to {APP_NAME}</h1>
                    <h4 className="text-sm text-muted-foreground">
                        Enter your credentials to Sign In to your account.
                    </h4>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="me@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Login</Button>
                <span className="text-sm">
                    Don&apos;t have an account?{" "}
                    <Link
                        href="/register"
                        className="underline underline-offset-4"
                    >
                        Create Account
                    </Link>
                </span>
            </form>
        </Form>
    );
};

export default LoginForm;
