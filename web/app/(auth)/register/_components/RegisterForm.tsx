"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
    firstName: z
        .string()
        .min(3, {
            message: "First Name must be atleast 3 characters",
        })
        .max(32),
    lastName: z
        .string()
        .min(3, {
            message: "Last Name must be atleast 3 characters",
        })
        .max(32),
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

const RegisterForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-col lg:w-1/2"
            >
                <div>
                    <h1 className="text-xl font-bold">Create an Account</h1>
                    <h4 className="text-sm text-muted-foreground">
                        Enter your credentials to create a new account.
                    </h4>
                </div>
                <div className="flex space-x-2">
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="First Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Last Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                            <FormDescription className="text-xs">
                                We do not share your email with anyone.
                            </FormDescription>
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
                <Button type="submit">Create Account</Button>
                <span className="text-sm">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="underline underline-offset-4"
                    >
                        Login
                    </Link>
                </span>
            </form>
        </Form>
    );
};

export default RegisterForm;
