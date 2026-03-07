"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Lock, Unlock, Globe, Megaphone, ShieldCheck } from "lucide-react";
import { TaskButton } from "./TaskButton";
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
        <Card className="w-full max-w-md mx-auto bg-card border-border shadow-2xl rounded-3xl overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

            <CardHeader className="pt-10 pb-6 text-center">
                <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 ring-4 ring-primary/5">
                    {allTasksDone ? (
                        <Unlock className="w-10 h-10 text-primary animate-bounce" />
                    ) : (
                        <Lock className="w-10 h-10 text-primary/80" />
                    )}
                </div>
                <CardTitle className="text-3xl font-bold tracking-tight text-white mb-2">
                    Unlock Your File
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                    Complete the tasks below to gain access
                </CardDescription>
            </CardHeader>

            <CardContent className="px-6 pb-10 space-y-8">
                <div className="space-y-3">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" /> Progress
                        </span>
                        <span className="text-lg font-bold text-primary">
                            {tasksCompleted}/{totalTasks} done
                        </span>
                    </div>
                    <Progress value={progress} className="h-3 bg-muted" />
                </div>

                <div className="space-y-4">
                    <TaskButton
                        label="Verify via Page"
                        icon={<Globe className="w-5 h-5" />}
                        colorClass="bg-[#BF3A3A]"
                        url={targetUrl}
                        isDone={task1Done}
                        onClick={() => setTask1Done(true)}
                    />

                    <TaskButton
                        label="Verify via Page"
                        icon={<Megaphone className="w-5 h-5" />}
                        colorClass="bg-[#3A8EBF]"
                        url={targetUrl}
                        isDone={task2Done}
                        onClick={() => setTask2Done(true)}
                    />
                </div>

                <div className="pt-4">
                    <Button
                        onClick={handleUnlock}
                        disabled={!allTasksDone}
                        className={cn(
                            "w-full h-16 rounded-xl text-lg font-bold transition-all duration-500 shadow-xl",
                            allTasksDone
                                ? "bg-[#10b981] hover:bg-[#059669] text-white scale-100 hover:scale-[1.02] active:scale-95 shimmer"
                                : "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                        )}
                    >
                        {allTasksDone ? "Unlock File Now" : "Unlock Button Disabled"}
                    </Button>

                    <div className="text-center mt-6">
                        <p className="text-[10px] text-muted-foreground/40 uppercase tracking-[0.2em] mb-1">Session Identifier</p>
                        <p className="font-mono text-xs text-primary/60 bg-primary/5 py-1 px-3 rounded-full inline-block">
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
            <div className="w-full max-w-md mx-auto p-12 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        }>
            <UnlockGateContent />
        </Suspense>
    );
}