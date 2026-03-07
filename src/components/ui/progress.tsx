import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number
    max?: number
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className, value = 0, max = 100, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "relative h-2.5 w-full overflow-hidden rounded-full bg-[#1c1a24] border border-white/[0.03]",
                    className
                )}
                {...props}
            >
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(value / max) * 100}%` }}
                    className="h-full bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                />
            </div>
        )
    }
)
Progress.displayName = "Progress"

export { Progress }
