import { Geist, Geist_Mono } from "next/font/google";
import { Mitr } from "next/font/google"; // Import Mitr font
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CommonAlert from "@/app/components/commonAlert";

// Importing fonts
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// Import Mitr font with specified weight
const mitr = Mitr({
    variable: "--font-mitr",
    subsets: ["latin", "thai"],
    weight: "400", // You can change this to another weight like "300", "500", etc. if needed
});

export const metadata = {
    title: "CityRoad",
    description: "A solution for the community to update real-time transport status.",
    author: "Phongsiri Loedphongthai",
};

export default function RootLayout({ children }) {
    return (
        <>
            {/* Manually define <html> and <body> */}
            <html lang="th">
            <body className={`${geistSans.variable} ${geistMono.variable} ${mitr.variable} antialiased`}>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <CommonAlert/>
                <div className="flex-grow pt-0"> {/* Ensure no overlap between navbar and content */}
                    <main>{children}</main>
                </div>
                <Footer/>
            </div>
            </body>
            </html>
        </>
    );
}
