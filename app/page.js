"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, ExternalLink, Unlock, CheckCircle, Info } from "lucide-react";

function LandingContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id") || "default";

    const [tasks, setTasks] = useState({
        youtube: false,
        ads: false,
    });

    const [loading, setLoading] = useState(false);

    const isUnlocked = tasks.youtube && tasks.ads;
    const progressPercent = (Object.values(tasks).filter(Boolean).length / 2) * 100;

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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full max-w-md mx-auto"
        >
            <div className="glass-card rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                {/* Glow Effects */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/20 rounded-full blur-[80px]" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-[80px]" />

                {/* Header */}
                <div className="text-center mb-8 relative">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 bg-white/5 rounded-3xl mx-auto flex items-center justify-center mb-6 border border-white/10"
                    >
                        <Unlock className="w-10 h-10 text-white/50" />
                    </motion.div>
                    <h1 className="text-3xl font-black mb-3 tracking-tight bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
                        Unlock Content
                    </h1>
                    <p className="text-white/40 text-sm font-medium leading-relaxed px-4">
                        Complete the mandatory steps below to gain access to your requested file.
                    </p>
                </div>

                {/* Progress Section */}
                <div className="mb-8 space-y-3 px-1">
                    <div className="flex justify-between items-end text-xs font-bold uppercase tracking-widest text-white/20">
                        <span>Overall Progress</span>
                        <span className="text-white/60">
                            {Object.values(tasks).filter(Boolean).length}/2 Done
                        </span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercent}%` }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        />
                    </div>
                </div>

                {/* Task Cards */}
                <div className="space-y-4 mb-10">
                    {/* YouTube Task */}
                    <button
                        onClick={() => handleTaskClick("youtube", "https://youtube.com/@thushlk")}
                        disabled={tasks.youtube}
                        className={`w-full group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 border ${tasks.youtube
                                ? "bg-white/5 border-white/10 opacity-70"
                                : "bg-red-600/10 hover:bg-red-600/20 border-red-500/20 active:scale-[0.98]"
                            }`}
                    >
                        <div
                            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${tasks.youtube ? "bg-green-500/20" : "bg-red-600 shadow-lg shadow-red-600/20"
                                }`}
                        >
                            {tasks.youtube ? (
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            ) : (
                                <Youtube className="w-6 h-6 text-white" />
                            )}
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-bold text-base text-white/90">
                                {tasks.youtube ? "Subscribed!" : "Subscribe YouTube"}
                            </h3>
                            <p className="text-white/40 text-xs font-medium">Step 01: Mandatory Action</p>
                        </div>
                        {!tasks.youtube && <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/40" />}
                    </button>

                    {/* Ads Task */}
                    <button
                        onClick={() => handleTaskClick("ads", "https://www.google.com")} // Replace with Monetag link
                        disabled={tasks.ads}
                        className={`w-full group relative flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 border ${tasks.ads
                                ? "bg-white/5 border-white/10 opacity-70"
                                : "bg-blue-600/10 hover:bg-blue-600/20 border-blue-500/20 active:scale-[0.98]"
                            }`}
                    >
                        <div
                            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-colors ${tasks.ads ? "bg-green-500/20" : "bg-blue-600 shadow-lg shadow-blue-600/20"
                                }`}
                        >
                            {tasks.ads ? (
                                <CheckCircle className="w-6 h-6 text-green-400" />
                            ) : (
                                <Info className="w-6 h-6 text-white" />
                            )}
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-bold text-base text-white/90">
                                {tasks.ads ? "Verified!" : "Verify via Ads"}
                            </h3>
                            <p className="text-white/40 text-xs font-medium">Step 02: Verification Link</p>
                        </div>
                        {!tasks.ads && <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/40" />}
                    </button>
                </div>

                {/* Final Unlock Action */}
                <button
                    onClick={handleUnlock}
                    disabled={!isUnlocked || loading}
                    className={`w-full h-16 rounded-2xl font-black text-lg tracking-wider flex items-center justify-center gap-3 transition-all duration-500 ${isUnlocked
                            ? "bg-green-600 hover:bg-green-500 shadow-2xl shadow-green-600/30 text-white cursor-pointer active:scale-95"
                            : "bg-white/5 text-white/10 cursor-not-allowed border border-white/5"
                        }`}
                >
                    {loading ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                        />
                    ) : (
                        <>
                            {isUnlocked ? <Unlock className="w-6 h-6" /> : <Unlock className="w-6 h-6 opacity-30" />}
                            {isUnlocked ? "UNLOCK NOW" : "LOCKED"}
                        </>
                    )}
                </button>

                {/* Footer Info */}
                <p className="mt-8 text-center text-[10px] font-bold text-white/10 uppercase tracking-[0.2em]">
                    Powered by Movie Planet Security
                </p>
            </div>
        </motion.div>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="text-white/20">Loading...</div>}>
            <LandingContent />
        </Suspense>
    );
}
