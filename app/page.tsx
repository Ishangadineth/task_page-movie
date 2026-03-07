import { UnlockCard } from "@/components/UnlockCard";
import { MessageSquare, Send } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#19151A] selection:bg-primary/30">
            {/* Background Background Effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 w-full max-w-lg mx-auto">
                {/* Header Section */}
                <div className="mb-10 text-center animate-in fade-in slide-in-from-top-4 duration-1000">
                    <h1 className="text-[2.8rem] md:text-[3.5rem] font-black tracking-tighter text-white mb-2 flex items-center justify-center">
                        Unlock<span className="text-primary italic">Gate</span>
                    </h1>
                    <div className="h-1.5 w-16 bg-primary mx-auto rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                </div>

                {/* Main Card */}
                <UnlockCard />

                {/* Social Buttons Section */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                    <a
                        href="https://whatsapp.com/channel/0029VbCYIZ4LtOjAq6jfyi0C"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 text-[#25D366] px-5 py-2.5 rounded-full font-black text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-lg"
                    >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        Join WhatsApp
                    </a>
                    <a
                        href="https://t.me/IDS_Movie_Planet"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 border border-[#0088cc]/20 text-[#0088cc] px-5 py-2.5 rounded-full font-black text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-lg"
                    >
                        <Send className="w-4 h-4 fill-current" />
                        Join Telegram
                    </a>
                </div>

                {/* Footer Credits */}
                <footer className="mt-12 text-center flex flex-col items-center gap-2 animate-in fade-in duration-1000 delay-500">
                    <div className="bg-white/5 h-[1px] w-full mb-4 opacity-10" />

                    <p className="text-[11px] font-black tracking-[0.2em] text-white uppercase opacity-50 flex items-center gap-2">
                        <span className="w-6 h-[1px] bg-primary/40" />
                        Developed by <span className="text-primary">Ishanga Dineth</span>
                        <span className="w-6 h-[1px] bg-primary/40" />
                    </p>

                    <p className="text-[10px] text-muted-foreground/30 font-bold uppercase tracking-widest mt-1">
                        © {new Date().getFullYear()} UnlockGate System. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    );
}
