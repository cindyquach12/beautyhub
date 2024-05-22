import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { NavBar } from "./components/NavBar";

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
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NavBar/>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
