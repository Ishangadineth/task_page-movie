"use client";

import { motion } from "framer-motion";
import { Lock, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface UnlockCardProps {
    id: string;
    completedCount: number;
    isUnlocked: boolean;
    loading: boolean;
    onUnlock: () => void;
    children: React.ReactNode;
}

export function UnlockCard({ id, completedCount, isUnlocked, loading, onUnlock, children }: UnlockCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-[340px]"
        >
            <Card className="relative">
                <div className="h-2 w-full bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.4)]" />
                <CardContent className="flex flex-col items-center p-8 pt-10 px-6">
                    <div className="w-16 h-16 bg-purple-900/15 rounded-full flex items-center justify-center mb-8 border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.1)]">
                        <Lock className="w-8 h-8 text-purple-500" />
                    </div>

                    <h2 className="text-2xl font-black mb-2.5 tracking-tight text-center">Unlock Your File</h2>
                    <p className="text-gray-400 text-[13px] font-medium mb-10 text-center opacity-80">Complete the tasks below to gain access</p>

                    <div className="w-full mb-8 px-1">
                        <div className="flex justify-between items-center mb-4 text-[10px] font-black tracking-[0.15em]">
                            <span className="text-gray-500 uppercase flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5" /> PROGRESS
                            </span>
                            <span className="text-purple-500 uppercase tracking-wide">
                                {completedCount}/2 done
                            </span>
                        </div>
                        <Progress value={(completedCount / 2) * 100} />
                    </div>

                    <div className="w-full space-y-4 mb-10">
                        {children}
                    </div>

                    <Button
                        onClick={onUnlock}
                        disabled={!isUnlocked || loading}
                        variant={isUnlocked ? "unlock" : "secondary"}
                        className="w-full"
                    >
                        {loading ? (
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                            isUnlocked ? "UNLOCK NOW" : "UNLOCK BUTTON DISABLED"
                        )}
                    </Button>

                    <div className="mt-10 text-center uppercase">
                        <p className="text-[9px] font-black tracking-[0.25em] text-gray-600 mb-2.5">Session Identifier</p>
                        <p className="text-[11px] font-black font-mono text-purple-500 bg-purple-900/10 px-4 py-1.5 rounded-lg border border-purple-500/10 inline-block shadow-inner">
                            {id}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
