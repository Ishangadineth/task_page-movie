import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
    title: "UnlockGate - Complete Tasks to Unlock",
    description: "Subscribe to YouTube and verify via ads to unlock your content seamlessly.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex items-center justify-center p-4 bg-[#0d0b10] selection:bg-purple-500/30">
                {children}
            </body>
        </html>
    );
}
