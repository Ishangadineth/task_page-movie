"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Globe, Megaphone, Lock, ArrowUpRight, CheckCircle2 } from "lucide-react";

function LandingContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "DEFAULT_USER";

    const [tasks, setTasks] = useState({
        task1: false,
        task2: false,
    });

    const [loading, setLoading] = useState(false);

    const isUnlocked = tasks.task1 && tasks.task2;
    const completedCount = Object.values(tasks).filter(Boolean).length;

    const handleTaskClick = (taskKey, url) => {
        window.open(url, "_blank");
        setTasks((prev) => ({ ...prev, [taskKey]: true }));
    };

    const handleUnlock = () => {
        if (isUnlocked) {
            setLoading(true);
            setTimeout(() => {
                window.location.href = `https://t.me/Ishanga_dineth_TEST_Bot?start=${id}`;
            }, 800);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 text-white bg-[#0d0b10]">
            {/* Logo Header */}
            <div className="mb-8 text-center">
                <h1 className="text-[2.6rem] font-black tracking-tight flex items-center justify-center">
                    <span>Unlock</span>
                    <span className="text-purple-500">Gate</span>
                </h1>
                <div className="h-1 w-14 bg-purple-600 mx-auto mt-1.5 rounded-full opacity-60 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            </div>

            {/* Main Card - Narrower and Taller Alignment */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[340px] bg-[#121017] rounded-[2.8rem] overflow-hidden border border-white/[0.03] shadow-2xl relative"
            >
                {/* Top Purple Border Accent (slightly thicker and glowing) */}
                <div className="h-2 w-full bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.4)]" />

                <div className="p-8 pt-10 flex flex-col items-center">
                    {/* Lock Icon Circle (Smaller and more refined) */}
                    <div className="w-16 h-16 bg-purple-900/15 rounded-full flex items-center justify-center mb-8 border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.1)]">
                        <Lock className="w-8 h-8 text-purple-500" />
                    </div>

                    <h2 className="text-2xl font-black mb-2.5 tracking-tight text-center">Unlock Your File</h2>
                    <p className="text-gray-400 text-[13px] font-medium mb-10 text-center opacity-80">Complete the tasks below to gain access</p>

                    {/* Progress Section */}
                    <div className="w-full mb-8 px-1">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black tracking-[0.15em] text-gray-500 uppercase flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5" /> PROGRESS
                            </span>
                            <span className="text-[13px] font-black text-purple-500 uppercase tracking-wide">
                                {completedCount}/2 done
                            </span>
                        </div>
                        <div className="h-2.5 w-full bg-[#1c1a24] rounded-full overflow-hidden border border-white/[0.03]">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(completedCount / 2) * 100}%` }}
                                className="h-full bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                            />
                        </div>
                    </div>

                    {/* Task Buttons - Bigger/More prominent */}
                    <div className="w-full space-y-4 mb-10">
                        {/* Task 1 - Red */}
                        <button
                            onClick={() => handleTaskClick("task1", "https://youtube.com/@thushlk")}
                            disabled={tasks.task1}
                            className={`w-full group flex items-center justify-between p-4.5 rounded-[1.2rem] transition-all duration-300 border ${tasks.task1
                                    ? "bg-green-600/10 border-green-500/20 opacity-70 cursor-default"
                                    : "bg-[#c53030] border-[#d84040]/50 hover:bg-[#b02a2a] shadow-lg active:scale-[0.97]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                    <Globe className="w-5.5 h-5.5 text-white" />
                                </div>
                                <span className="font-black text-[15px] tracking-tight">Verify via Page</span>
                            </div>
                            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </button>

                        {/* Task 2 - Blue */}
                        <button
                            onClick={() => handleTaskClick("task2", "https://www.google.com")}
                            disabled={tasks.task2}
                            className={`w-full group flex items-center justify-between p-4.5 rounded-[1.2rem] transition-all duration-300 border ${tasks.task2
                                    ? "bg-green-600/10 border-green-500/20 opacity-70 cursor-default"
                                    : "bg-[#3182ce] border-[#4299e1]/50 hover:bg-[#2b73b6] shadow-lg active:scale-[0.97]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center border border-white/10">
                                    <Megaphone className="w-5.5 h-5.5 text-white" />
                                </div>
                                <span className="font-black text-[15px] tracking-tight">Verify via Page</span>
                            </div>
                            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>

                    {/* Unlock Button - Sleek and modern */}
                    <button
                        onClick={handleUnlock}
                        disabled={!isUnlocked || loading}
                        className={`w-full h-14 rounded-[1.2rem] font-black text-base tracking-wide transition-all duration-500 flex items-center justify-center gap-3 border ${isUnlocked
                                ? "bg-purple-600 border-purple-400/30 hover:bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] text-white cursor-pointer active:scale-[0.96]"
                                : "bg-[#18161f] text-gray-600 cursor-not-allowed border-white/[0.02]"
                            }`}
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                            isUnlocked ? "UNLOCK NOW" : "UNLOCK BUTTON DISABLED"
                        )}
                    </button>

                    {/* Session Info */}
                    <div className="mt-10 text-center uppercase">
                        <p className="text-[9px] font-black tracking-[0.25em] text-gray-600 mb-2.5">Session Identifier</p>
                        <p className="text-[11px] font-black font-mono text-purple-500 bg-purple-900/10 px-4 py-1.5 rounded-lg border border-purple-500/10 inline-block shadow-inner">
                            {id}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Footer Copyright */}
            <footer className="mt-12 text-gray-500 text-[10px] font-black opacity-40 tracking-wider">
                © 2026 UNLOCKGATE SYSTEM. ALL RIGHTS RESERVED.
            </footer>
        </main>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="text-white/20 bg-[#0d0b10] min-h-screen flex items-center justify-center font-black">LOADING...</div>}>
            <LandingContent />
        </Suspense>
    );
}
