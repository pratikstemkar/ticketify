"use client";

import * as React from "react";
import {
    ClapperboardIcon,
    CreditCard,
    SearchIcon,
    Settings,
    User,
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { movies } from "@/data/movies";

export default function SearchBar() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(open => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            <Button
                variant="outline"
                className="flex justify-between space-x-5"
                onClick={() => setOpen(open => !open)}
            >
                <div className="flex items-center">
                    <SearchIcon className="lg:mr-2 h-4 w-4 shrink-0 lg:opacity-50" />
                    <span className="text-muted-foreground hidden lg:block">
                        Search for a movie
                    </span>
                </div>
                <p className="text-sm text-muted-foreground hidden lg:block">
                    Press{" "}
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>J
                    </kbd>
                </p>
            </Button>
            <CommandDialog
                open={open}
                onOpenChange={setOpen}
            >
                <CommandInput placeholder="Type a movie title..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Movies">
                        {movies.map((movie, index) => (
                            <CommandItem
                                key={index}
                                onSelect={() => {
                                    router.push(`/explore/movies/${movie.url}`);
                                    setOpen(open => !open);
                                }}
                            >
                                <ClapperboardIcon className="mr-2 w-4 h-4" />
                                <span>{movie.title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Orders</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
