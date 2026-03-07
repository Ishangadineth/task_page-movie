"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, ExternalLink, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskButtonProps {
    label: string;
    icon: React.ReactNode;
    colorClass: string;
    isDone: boolean;
    onComplete: () => void;
    url: string;
}

export function TaskButton({ label, icon, colorClass, isDone, onComplete, url }: TaskButtonProps) {
    const [isVerifying, setIsVerifying] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isVerifying && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        } else if (isVerifying && timeLeft === 0) {
            setIsVerifying(false);
            onComplete();
        }
        return () => clearTimeout(timer);
    }, [isVerifying, timeLeft, onComplete]);

    const handleClick = () => {
        if (!isDone && !isVerifying) {
            window.open(url, "_blank");
            setIsVerifying(true);
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isDone || isVerifying}
            className={cn(
                "w-full h-14 relative flex items-center justify-between px-6 rounded-xl transition-all duration-300 group overflow-hidden border-none text-left",
                isDone
                    ? "bg-green-600/10 border border-green-500/20 cursor-default"
                    : isVerifying
                        ? "bg-muted animate-pulse cursor-wait"
                        : cn("text-white hover:scale-[1.02] active:scale-[0.98]", colorClass)
            )}
        >
            <div className="flex items-center gap-3 relative z-10">
                <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isDone
                        ? "bg-green-500/20 text-green-500"
                        : isVerifying
                            ? "bg-background text-primary animate-spin-slow"
                            : "bg-white/10 text-white"
                )}>
                    {isVerifying ? <Loader2 className="w-5 h-5 animate-spin" /> : icon}
                </div>
                <div className="flex flex-col">
                    <span className={cn(
                        "font-semibold text-base transition-colors leading-tight",
                        isDone ? "text-green-500" : isVerifying ? "text-muted-foreground" : "text-white"
                    )}>
                        {isDone ? `${label} (Done)` : isVerifying ? "Verifying..." : label}
                    </span>
                    {isVerifying && (
                        <span className="text-[10px] text-primary font-bold tracking-wider uppercase">
                            Please wait {timeLeft}s
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center relative z-10">
                {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-[#10b981] animate-in zoom-in duration-300" />
                ) : isVerifying ? (
                    <div className="text-xs font-black text-primary bg-primary/10 px-2 py-1 rounded">
                        {Math.round((10 - timeLeft) * 10)}%
                    </div>
                ) : (
                    <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
            </div>

            {!isDone && !isVerifying && (
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            )}

            {isVerifying && (
                <div
                    className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-1000 ease-linear"
                    style={{ width: `${(10 - timeLeft) * 10}%` }}
                />
            )}
        </button>
    );
}
