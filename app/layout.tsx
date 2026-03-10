import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "UnlockGate - Complete tasks to unlock",
    description: "Professional Sub2Unlock system for content creators.",
    other: {
        monetag: "a4080fb652b5ebdc9b2241f956d49a5d"
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <script src="https://quge5.com/88/tag.min.js" data-zone="218322" async data-cfasync="false"></script>
            </head>
            <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
                {children}
            </body>
        </html>
    );
}
