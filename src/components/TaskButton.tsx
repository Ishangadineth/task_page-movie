"use client";

import { LucideIcon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaskButtonProps {
    onClick: () => void;
    done: boolean;
    icon: LucideIcon;
    label: string;
    variant: "red" | "blue";
}

export function TaskButton({ onClick, done, icon: Icon, label, variant }: TaskButtonProps) {
    return (
        <Button
            onClick={onClick}
            disabled={done}
            variant={done ? "secondary" : variant}
            className={`w-full group flex items-center justify-between p-4.5 rounded-[1.2rem] transition-all duration-300 border ${done
                    ? "bg-green-600/10 border-green-500/20 opacity-70 cursor-default"
                    : ""
                }`}
        >
            <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                    <Icon className="w-5.5 h-5.5 text-white" />
                </div>
                <span className="font-black text-[15px] tracking-tight">{label}</span>
            </div>
            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
        </Button>
    );
}
