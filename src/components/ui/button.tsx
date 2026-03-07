import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "red" | "blue" | "unlock"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", ...props }, ref) => {
        const variants = {
            default: "bg-purple-600 hover:bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] text-white border-purple-400/30",
            secondary: "bg-[#18161f] text-gray-500 border-white/[0.02]",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            red: "bg-[#c53030] border-[#d84040]/50 hover:bg-[#b02a2a] shadow-lg text-white",
            blue: "bg-[#3182ce] border-[#4299e1]/50 hover:bg-[#2b73b6] shadow-lg text-white",
            unlock: "bg-purple-600 border-purple-400/30 hover:bg-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)] text-white active:scale-[0.96]"
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center gap-3 rounded-[1.2rem] text-base font-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border h-14",
                    variants[variant as keyof typeof variants] || variants.default,
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
