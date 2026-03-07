import { UnlockCard } from "@/components/UnlockCard";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#19151A]">
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
            </div>

            <div className="relative z-10 w-full">
                <div className="max-w-md mx-auto mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-2">
                        Unlock<span className="text-primary italic">Gate</span>
                    </h1>
                    <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
                </div>

                <UnlockCard />

                <footer className="mt-12 text-center text-muted-foreground/40 text-sm">
                    <p>© {new Date().getFullYear()} UnlockGate System. All rights reserved.</p>
                </footer>
            </div>
        </main>
    );
}