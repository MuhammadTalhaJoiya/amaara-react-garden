import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-organic-green text-white hover:bg-organic-green-dark shadow-soft hover:shadow-organic rounded-full transform hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
        outline:
          "border-2 border-organic-green bg-transparent text-organic-green hover:bg-organic-green hover:text-white rounded-full",
        secondary:
          "bg-earth-cream text-earth-brown hover:bg-earth-beige rounded-full",
        ghost: "hover:bg-organic-green-muted hover:text-organic-green rounded-full",
        link: "text-organic-green underline-offset-4 hover:underline",
        hero: "bg-organic-green text-white hover:bg-organic-green-dark shadow-organic transform hover:-translate-y-2 rounded-full font-semibold text-lg",
        earth: "bg-earth-beige text-earth-brown hover:bg-earth-cream rounded-full border border-earth-brown/20",
      },
      size: {
        default: "h-12 px-8 py-3 text-base",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-5 text-xl",
        icon: "h-12 w-12",
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