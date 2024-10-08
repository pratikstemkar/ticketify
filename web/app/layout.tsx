import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";
import StoreProvider from "@/store/StoreProvider";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

// const geistSans = localFont({
//     src: "./fonts/GeistVF.woff",
//     variable: "--font-geist-sans",
//     weight: "100 900",
// });
// const geistMono = localFont({
//     src: "./fonts/GeistMonoVF.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });
// const inter = localFont({
//     src: "./fonts/Inter.woff",
//     variable: "--font-geist-mono",
//     weight: "100 900",
// });

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
                className={`${inter.className} relative antialiased flex flex-col justify-between min-h-screen`}
            >
                <StoreProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                    >
                        <div>
                            <Navbar />
                            {children}
                        </div>
                        <Toaster />
                        <Footer />
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
