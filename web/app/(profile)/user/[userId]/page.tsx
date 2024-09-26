"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Edit2Icon } from "lucide-react";
import ProfileTabs from "./_components/ProfileTabs";
import { useAuth } from "@/store/hooks/useAuth";

const ProfilePage = ({ params }: { params: { userId: string } }) => {
    const auth = useAuth();

    return (
        <main className="w-full max-w-7xl m-auto px-2 lg:px-0 mt-5">
            <div className="flex-col space-y-5">
                <div className="flex space-x-5">
                    <Avatar className="h-1/6 w-1/6">
                        <AvatarImage src="https://github.com/pratikstemkar.png" />
                        <AvatarFallback>{params.userId}</AvatarFallback>
                    </Avatar>
                    <div className="flex-col space-y-2 w-5/6">
                        <div className="flex justify-between w-full">
                            <div className="flex-col">
                                <h4 className="text-2xl lg:text-4xl font-bold">
                                    {auth.user?.firstName +
                                        " " +
                                        auth.user?.lastName}
                                </h4>

                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <h6 className="text-sm lg:text-base font-mono text-muted-foreground hover:cursor-pointer">
                                                Elite User
                                            </h6>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>
                                                Top User for straight 320 days
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <Button variant="outline">
                                <Edit2Icon className="h-4 w-4 mr-2" />
                                <span>Edit</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <ProfileTabs />
                </div>
            </div>
        </main>
    );
};

export default ProfilePage;
