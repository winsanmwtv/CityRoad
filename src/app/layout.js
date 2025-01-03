import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CommonAlert from "@/app/components/commonAlert";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "CityRoad",
    description: "A solution for community to update real-time transport status.",
    author: "Phongsiri Loedphongthai",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
                href={`https://fonts.googleapis.com/css2?family=${geistSans.style.fontFamily}&family=${geistMono.style.fontFamily}&display=swap`}
                rel="stylesheet"
            />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <div className="h-16" />
        <CommonAlert />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}