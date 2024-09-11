import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: {
        template: "%s - Ticketify",
        default: "Ticketify - Ticket Booking Made Easy",
    },
    description: "Ticket Booking Made Easy!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-between min-h-screen`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                >
                    <div>
                        <Navbar />
                        {children}
                    </div>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
