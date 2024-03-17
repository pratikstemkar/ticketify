import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./_components/Footer";
import StoreProvider from "./_components/StoreProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://ticketify.vercel.app"),
    title: {
        template: "%s | Ticketify",
        default: "Ticketify - Ticketing Made Simple",
    },
    description:
        "Ticket booking and management. Book tickets for movies, stand up comedy shows, cricket matches and many more.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta
                property="og:url"
                content="https://ticketify.vercel.app/explore"
            ></meta>
            <body
                className={`${inter.className} flex flex-col justify-between min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <StoreProvider>
                        <div>
                            <Navbar />
                            {children}
                        </div>
                        <Toaster />
                        <Footer />
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
