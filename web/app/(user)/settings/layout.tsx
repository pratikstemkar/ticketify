import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import { SidebarNav } from "../_components/SideBarNav";

export const metadata: Metadata = {
    title: `Settings`,
    description:
        "Manage your account settings and set notification preferences.",
};

const sidebarNavItems = [
    {
        title: "Profile",
        href: "/settings",
    },
    {
        title: "Account",
        href: "/settings/account",
    },
    // {
    //     title: "Notifications",
    //     href: "/settings/notifications",
    // },
];

interface SettingsLayoutProps {
    children: React.ReactNode;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
    return (
        <main className="flex flex-col space-y-5 w-full max-w-7xl justify-center mx-auto py-5 lg:py-10 px-5 lg:px-0">
            <div className="space-y-0.5">
                <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                <aside className="-mx-4 lg:w-1/5">
                    <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className="flex-1 lg:max-w-2xl">{children}</div>
            </div>
        </main>
    );
};

export default SettingsLayout;
