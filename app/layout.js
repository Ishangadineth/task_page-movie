import "./globals.css";

export const metadata = {
    title: "Sub2Unlock - Complete Tasks to Unlock",
    description: "Subscribe to YouTube and verify via ads to unlock your content seamlessly.",
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex items-center justify-center p-4 bg-black selection:bg-purple-500/30">
                {children}
            </body>
        </html>
    );
}
