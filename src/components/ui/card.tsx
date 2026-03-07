import * as React from "react"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "rounded-[2.8rem] bg-[#121017] border border-white/[0.03] shadow-2xl overflow-hidden",
                className
            )}
            {...props}
        />
    )
)
Card.displayName = "Card"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn("p-10", className)} {...props} />
    )
)
CardContent.displayName = "CardContent"

export { Card, CardContent }
