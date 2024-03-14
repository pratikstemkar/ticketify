import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Footer from "./_components/Footer";
import StoreProvider from "./_components/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
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
                        <Navbar />
                        {children}
                        <Footer />
                    </StoreProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
