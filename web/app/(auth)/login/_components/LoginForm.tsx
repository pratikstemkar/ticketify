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

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);

        fetch("http://localhost:8080/api/v1/auth/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: values!,
        })
            .then(res => {
                res.json();
                dispatch(
                    setCredentials({
                        user: {
                            id: 1,
                            firstName: "Pratik",
                            lastName: "Temkar",
                            email: "pratikstemkar@gmail.com",
                        },
                        access_token: "ahgsdhadsuytasdhj",
                    })
                );
                toast("Logged In!", {
                    description:
                        "You have logged in to your Ticketify account.",
                });
                router.replace("/explore");
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
                toast("Log In Failed!", {
                    description: "Please check your credentials and try again.",
                });
            });
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
