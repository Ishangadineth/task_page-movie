"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Globe, Megaphone, Lock, ArrowUpRight, CheckCircle2 } from "lucide-react";

function LandingContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "default_user";

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
        <main className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
            {/* Logo Header */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight flex items-center">
                    <span>Unlock</span>
                    <span className="text-purple-500">Gate</span>
                </h1>
                <div className="h-1 w-12 bg-purple-600 mx-auto mt-1 rounded-full opacity-60" />
            </div>

            {/* Main Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-[420px] unlock-card rounded-[2rem] overflow-hidden"
            >
                {/* Top Purple Border Accent */}
                <div className="h-1.5 w-full bg-purple-600/80" />

                <div className="p-10 flex flex-col items-center">
                    {/* Lock Icon Circle */}
                    <div className="w-20 h-20 bg-purple-900/20 rounded-full flex items-center justify-center mb-8 border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                        <Lock className="w-10 h-10 text-purple-500" />
                    </div>

                    <h2 className="text-3xl font-bold mb-3">Unlock Your File</h2>
                    <p className="text-gray-400 text-sm mb-10">Complete the tasks below to gain access</p>

                    {/* Progress Section */}
                    <div className="w-full mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-[11px] font-black tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" /> PROGRESS
                            </span>
                            <span className="text-sm font-bold text-purple-500">{completedCount}/2 done</span>
                        </div>
                        <div className="h-2.5 w-full bg-[#1e1a24] rounded-full overflow-hidden border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${(completedCount / 2) * 100}%` }}
                                className="h-full bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                            />
                        </div>
                    </div>

                    {/* Task Buttons */}
                    <div className="w-full space-y-4 mb-10">
                        {/* Task 1 - Red */}
                        <button
                            onClick={() => handleTaskClick("task1", "https://youtube.com/@thushlk")}
                            disabled={tasks.task1}
                            className={`w-full group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${tasks.task1
                                    ? "bg-green-600/20 border border-green-500/30 opacity-70 cursor-default"
                                    : "bg-[#c53030] hover:bg-[#b02a2a] shadow-lg active:scale-[0.98]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Globe className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-base">Verify via Page</span>
                            </div>
                            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </button>

                        {/* Task 2 - Blue */}
                        <button
                            onClick={() => handleTaskClick("task2", "https://www.google.com")} // Replace with Monetag link
                            disabled={tasks.task2}
                            className={`w-full group flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${tasks.task2
                                    ? "bg-green-600/20 border border-green-500/30 opacity-70 cursor-default"
                                    : "bg-[#3182ce] hover:bg-[#2b73b6] shadow-lg active:scale-[0.98]"
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                    <Megaphone className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-bold text-base">Verify via Page</span>
                            </div>
                            <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </div>

                    {/* Unlock Button */}
                    <button
                        onClick={handleUnlock}
                        disabled={!isUnlocked || loading}
                        className={`w-full h-14 rounded-xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 ${isUnlocked
                                ? "bg-purple-600 hover:bg-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.3)] text-white cursor-pointer active:scale-[0.97]"
                                : "bg-[#231f2b] text-gray-500 cursor-not-allowed border border-white/5"
                            }`}
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                            isUnlocked ? "Unlock Now" : "Unlock Button Disabled"
                        )}
                    </button>

                    {/* Session Info */}
                    <div className="mt-10 text-center uppercase">
                        <p className="text-[10px] font-black tracking-[0.2em] text-gray-600 mb-2">Session Identifier</p>
                        <p className="text-[11px] font-mono text-purple-400 bg-purple-900/10 px-3 py-1 rounded inline-block">
                            {id}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Footer Copyright */}
            <footer className="mt-12 text-gray-500 text-[11px] font-medium opacity-60">
                © 2026 UnlockGate System. All rights reserved.
            </footer>
        </main>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="text-white/20">Loading...</div>}>
            <LandingContent />
        </Suspense>
    );
}
