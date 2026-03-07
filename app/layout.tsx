import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UnlockGate - Complete tasks to unlock",
    description: "Professional Sub2Unlock system for content creators.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
                {children}
            </body>
        </html>
    );
}
