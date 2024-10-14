import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-yellow-950 dark:focus-visible:ring-yellow-300",
  {
    variants: {
      variant: {
        default: "bg-yellow-900 text-yellow-50 hover:bg-yellow-900/90 dark:bg-yellow-50 dark:text-yellow-900 dark:hover:bg-yellow-50/90",
        destructive:
          "bg-red-500 text-yellow-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-yellow-50 dark:hover:bg-red-900/90",
        outline:
          "border border-yellow-200 bg-white hover:bg-yellow-100 hover:text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:hover:bg-yellow-800 dark:hover:text-yellow-50",
        secondary:
          "bg-yellow-100 text-yellow-900 hover:bg-yellow-100/80 dark:bg-yellow-800 dark:text-yellow-50 dark:hover:bg-yellow-800/80",
        ghost: "hover:bg-yellow-100 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-50",
        link: "text-yellow-900 underline-offset-4 hover:underline dark:text-yellow-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
