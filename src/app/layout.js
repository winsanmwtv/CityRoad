import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

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
        <Navbar/>
        <div className='h-16'/>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        <Footer/>
      </html>
  );
}
