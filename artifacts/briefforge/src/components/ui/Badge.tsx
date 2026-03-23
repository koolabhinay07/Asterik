import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80",
        destructive:
          "bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20",
        outline: "text-foreground border border-border",
        success: "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 dark:text-emerald-400",
        warning: "bg-amber-500/10 text-amber-600 border border-amber-500/20 dark:text-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
