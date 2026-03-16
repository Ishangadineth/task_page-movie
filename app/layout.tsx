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

import { InAppBrowserDetector } from "@/components/InAppBrowserDetector";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <head>
                <script src="https://quge5.com/88/tag.min.js" data-zone="218322" async data-cfasync="false"></script>
                
                {/* Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-4CGG7SM62C"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-4CGG7SM62C');
                        `,
                    }}
                />
            </head>
            <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
                <InAppBrowserDetector />
                {children}
            </body>
        </html>
    );
}
