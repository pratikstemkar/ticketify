"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { CalendarDaysIcon, CheckIcon } from "lucide-react";
import { changePassword } from "@/lib/requests/user";

const accountFormSchema = z
    .object({
        currentPassword: z
            .string()
            .min(6, {
                message: "Current Password must be at least 6 characters.",
            })
            .max(30, {
                message:
                    "Current Password must not be longer than 30 characters.",
            }),
        newPassword: z
            .string()
            .min(6, {
                message: "Current Password must be at least 6 characters.",
            })
            .max(30, {
                message:
                    "Current Password must not be longer than 30 characters.",
            }),
        confirmationPassword: z
            .string()
            .min(6, {
                message: "Current Password must be at least 6 characters.",
            })
            .max(30, {
                message:
                    "Current Password must not be longer than 30 characters.",
            }),
    })
    .refine(data => data.newPassword === data.confirmationPassword, {
        message: "Passwords do not match.",
        path: ["confirmationPassword"],
    });

export type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
    // name: "Your name",
    // dob: new Date("2023-01-23"),
};

export function AccountForm() {
    const form = useForm<AccountFormValues>({
        resolver: zodResolver(accountFormSchema),
        defaultValues,
    });

    async function onSubmit(values: AccountFormValues) {
        console.log(values);

        await changePassword(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
            >
                <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="********"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormDescription>
                                This is the name that will be displayed on your
                                profile and in emails.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="*********"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmationPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="***********"
                                    {...field}
                                    type="password"
                                />
                            </FormControl>
                            <FormDescription>
                                New Password and Confirm Password should match.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Change Password</Button>
            </form>
        </Form>
    );
}
