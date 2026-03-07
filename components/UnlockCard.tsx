"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Globe, Megaphone, ShieldCheck } from "lucide-react";
import { TaskButton } from "@/components/TaskButton";
import { cn } from "@/lib/utils";

function UnlockGateContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id') || 'default_user';

    const [task1Done, setTask1Done] = useState(false);
    const [task2Done, setTask2Done] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const tasksCompleted = [task1Done, task2Done].filter(Boolean).length;
    const totalTasks = 2;
    const progress = (tasksCompleted / totalTasks) * 100;
    const allTasksDone = tasksCompleted === totalTasks;

    const handleUnlock = () => {
        if (allTasksDone) {
            window.location.href = `https://t.me/Ishanga_dineth_TEST_Bot?start=${id}`;
        }
    };

    if (!mounted) return null;

    const targetUrl = "https://omg10.com/4/10694851";

    return (
        <Card className="w-full max-w-md mx-auto bg-card border-border shadow-2xl rounded-3xl overflow-hidden relative animate-in fade-in zoom-in duration-700">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-secondary to-primary shadow-[0_2px_10px_rgba(168,85,247,0.3)]" />

            <CardHeader className="pt-10 pb-6 text-center">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary/5 shadow-inner">
                    {allTasksDone ? (
                        <Unlock className="w-10 h-10 text-primary animate-bounce" />
                    ) : (
                        <Lock className="w-10 h-10 text-primary/80" />
                    )}
                </div>
                <CardTitle className="text-3xl font-black tracking-tight text-white mb-2">
                    Unlock Your File
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base font-medium opacity-80">
                    Complete the tasks below to gain access
                </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-10 space-y-8">
                <div className="space-y-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-end mb-1 px-1">
                        <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Progress
                        </span>
                        <span className="text-base font-black text-primary tabular-nums">
                            {tasksCompleted}/{totalTasks} DONE
                        </span>
                    </div>
                    <Progress value={progress} className="h-2.5 bg-background shadow-inner" />
                </div>

                <div className="space-y-4">
                    <TaskButton
                        label="Verify via Page"
                        icon={<Globe className="w-5 h-5" />}
                        colorClass="bg-[#BF3A3A] shadow-[0_5px_15px_rgba(191,58,58,0.3)]"
                        url={targetUrl}
                        isDone={task1Done}
                        onComplete={() => setTask1Done(true)}
                    />

                    <TaskButton
                        label="Verify via Page"
                        icon={<Megaphone className="w-5 h-5" />}
                        colorClass="bg-[#3A8EBF] shadow-[0_5px_15px_rgba(58,142,191,0.3)]"
                        url={targetUrl}
                        isDone={task2Done}
                        onComplete={() => setTask2Done(true)}
                    />
                </div>

                <div className="pt-4">
                    <Button
                        onClick={handleUnlock}
                        disabled={!allTasksDone}
                        className={cn(
                            "w-full h-16 rounded-2xl text-lg font-black uppercase tracking-widest transition-all duration-500 shadow-xl border-t border-white/10",
                            allTasksDone
                                ? "bg-gradient-to-r from-[#10b981] to-[#059669] text-white scale-100 hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_rgba(16,185,129,0.3)] shimmer"
                                : "bg-[#1c1a24] text-gray-600 cursor-not-allowed grayscale border border-white/5"
                        )}
                    >
                        {allTasksDone ? "Unlock File Now" : "Unlock Button Disabled"}
                    </Button>

                    <div className="text-center mt-10">
                        <p className="text-[9px] text-muted-foreground/30 font-black uppercase tracking-[0.3em] mb-2 leading-none">Session Security Token</p>
                        <p className="font-mono text-[11px] font-black text-primary/40 bg-primary/5 py-1.5 px-4 rounded-lg border border-primary/10 inline-block shadow-inner">
                            {id}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function UnlockCard() {
    return (
        <Suspense fallback={
            <div className="w-full max-w-md mx-auto p-12 flex flex-col justify-center items-center gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-[3px] border-primary/20 border-t-primary"></div>
                <p className="text-[10px] font-black tracking-widest text-primary/40 uppercase">Initialising System...</p>
            </div>
        }>
            <UnlockGateContent />
        </Suspense>
    );
}
