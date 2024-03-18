"use client";

import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "../_components/ProfileForm";
import { useAuth } from "@/lib/hooks/useAuth";
import { redirect } from "next/navigation";

const ProfilePage = () => {
    const auth = useAuth();

    if (!auth.user) {
        redirect("/login");
    }

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    );
};

export default ProfilePage;
