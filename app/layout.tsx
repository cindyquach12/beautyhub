import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { LocationAndServiceProvider } from "./contexts/location-and-service/LocationAndService.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BeautyHub - Find beauty services in your area",
    description: "Find beauty services in your area",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <LocationAndServiceProvider>
                    <NavBar />
                    {children}
                </LocationAndServiceProvider>
            </body>
        </html>
    );
}
