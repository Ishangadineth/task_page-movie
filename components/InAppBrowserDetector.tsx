"use client";

import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

export function InAppBrowserDetector() {
    const [isInApp, setIsInApp] = useState(false);
    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        // Run this instantly on component mount
        const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
        
        // Detect common in-app browsers
        const isTelegram = ua.indexOf("Telegram") > -1;
        const isFB = ua.indexOf("FBAN") > -1 || ua.indexOf("FBAV") > -1;
        const isInsta = ua.indexOf("Instagram") > -1;
        const isLine = ua.indexOf("Line") > -1;

        if (isTelegram || isFB || isInsta || isLine) {
            setIsInApp(true);
            const currentUrl = window.location.href;
            const urlWithoutHttp = currentUrl.replace(/^https?:\/\//, "");

            const androidDetect = /android/i.test(ua);
            const iosDetect = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
            
            setIsIOS(iosDetect);

            if (androidDetect) {
                // Instant Force Redirect for Android
                // This intent tells Android to use the default browser for HTTPS links
                // If no default is set, it will show the native "Open with Chrome, Firefox..." picker.
                window.location.href = `intent://${urlWithoutHttp}#Intent;scheme=https;end;`;
            }
        }
    }, []);

    // Only render the blocking UI if we detect an in-app browser
    if (!isInApp) return null;

    return (
        <div className="fixed inset-0 z-[99999] bg-[#19151A] flex flex-col items-center justify-center p-6 text-center">
            <ExternalLink className="w-20 h-20 text-primary mb-8 animate-bounce" />
            <h1 className="text-2xl font-black text-white mb-4 tracking-tight">
                System Browser Required
            </h1>
            <p className="text-muted-foreground text-sm mb-8 max-w-[300px] leading-relaxed">
                To continue the verification process without issues, please open this link in your standard web browser.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 p-5 rounded-2xl w-full max-w-[300px] animate-in slide-in-from-bottom-4 duration-700 shadow-xl">
                {isIOS ? (
                    <p className="text-white/80 font-medium text-sm leading-relaxed">
                        Tap the <strong className="text-white">compass icon</strong> <br/>
                        at the bottom right corner to<br/>
                        <span className="text-primary font-black mt-2 block tracking-wider uppercase">Open in Safari</span>
                    </p>
                ) : (
                    <p className="text-white/80 font-medium text-sm leading-relaxed">
                        Tap the <strong className="text-white">three dots (⋮)</strong><br/>
                        in the top right corner and select<br/>
                        <span className="text-primary font-black mt-2 block tracking-wider uppercase">Open in Browser</span>
                    </p>
                )}
            </div>

            <p className="absolute bottom-8 text-[9px] uppercase tracking-[0.3em] text-muted-foreground/30 font-black">
                UnlockGate Infrastructure
            </p>
        </div>
    );
}
