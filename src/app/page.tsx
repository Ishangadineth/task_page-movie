"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Globe, Megaphone } from "lucide-react";
import { UnlockCard } from "@/components/UnlockCard";
import { TaskButton } from "@/components/TaskButton";

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

    const handleTaskClick = (taskKey: "task1" | "task2", url: string) => {
        window.open(url, "_blank");
        setTasks((prev) => ({ ...prev, [taskKey]: true }));
    };

    const handleUnlock = () => {
        if (isUnlocked) {
            setLoading(true);
            setTimeout(() => {
                window.location.href = `https://t.me/Ishanga_dineth_TEST_Bot?start=${id}`;
            }, 1200);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen text-white w-full">
            {/* Logo Header */}
            <div className="mb-10 text-center">
                <h1 className="text-[2.6rem] font-black tracking-tight flex items-center justify-center">
                    <span>Unlock</span>
                    <span className="text-purple-500">Gate</span>
                </h1>
                <div className="h-1 w-14 bg-purple-600 mx-auto mt-1.5 rounded-full opacity-60 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
            </div>

            <UnlockCard
                id={id}
                completedCount={completedCount}
                isUnlocked={isUnlocked}
                loading={loading}
                onUnlock={handleUnlock}
            >
                <TaskButton
                    onClick={() => handleTaskClick("task1", "https://youtube.com/@thushlk")}
                    done={tasks.task1}
                    icon={Globe}
                    label="Verify via Page"
                    variant="red"
                />
                <TaskButton
                    onClick={() => handleTaskClick("task2", "https://www.google.com")}
                    done={tasks.task2}
                    icon={Megaphone}
                    label="Verify via Page"
                    variant="blue"
                />
            </UnlockCard>

            <footer className="mt-12 text-gray-500 text-[10px] font-black opacity-40 tracking-[0.2em] uppercase">
                © 2026 UNLOCKGATE SYSTEM. ALL RIGHTS RESERVED.
            </footer>
        </main>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div className="font-black opacity-10 uppercase tracking-widest text-sm">Loading...</div>}>
            <LandingContent />
        </Suspense>
    );
}
