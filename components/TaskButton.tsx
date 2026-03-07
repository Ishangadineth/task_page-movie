"use client";

import React from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskButtonProps {
    label: string;
    icon: React.ReactNode;
    colorClass: string;
    isDone: boolean;
    onClick: () => void;
    url: string;
}

export function TaskButton({ label, icon, colorClass, isDone, onClick, url }: TaskButtonProps) {
    const handleClick = () => {
        window.open(url, "_blank");
        onClick();
    };

    return (
        <button
            onClick={handleClick}
            disabled={isDone}
            className={cn(
                "w-full h-14 relative flex items-center justify-between px-6 rounded-xl transition-all duration-300 group overflow-hidden border-none text-left",
                isDone ? "bg-muted cursor-default" : cn("text-white hover:scale-[1.02] active:scale-[0.98]", colorClass)
            )}
        >
            <div className="flex items-center gap-3 relative z-10">
                <div className={cn(
                    "p-2 rounded-lg transition-colors",
                    isDone ? "bg-background text-muted-foreground" : "bg-white/10 text-white"
                )}>
                    {icon}
                </div>
                <span className={cn(
                    "font-semibold text-base transition-colors",
                    isDone ? "text-muted-foreground" : "text-white"
                )}>
                    {isDone ? `${label} (Done)` : label}
                </span>
            </div>

            <div className="flex items-center relative z-10">
                {isDone ? (
                    <CheckCircle2 className="w-6 h-6 text-[#10b981] animate-in zoom-in duration-300" />
                ) : (
                    <ExternalLink className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
            </div>

            {!isDone && (
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            )}
        </button>
    );
}
