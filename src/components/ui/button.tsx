import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-subheadline font-semibold tracking-[-0.36px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-bg-primary-inverse text-fg-inverse-primary hover:bg-opacity-80 hover:text-fg-inverse-secondary disabled:bg-opacity-48 disabled:text-fg-inverse-tertiary",
        
        secondary: "bg-bg-faint text-fg-secondary hover:bg-bg-pale hover:text-fg-primary disabled:bg-bg-faint disabled:text-fg-quarternary",
        
        destructive: "bg-bg-negative text-fg-secondary hover:bg-bg-negative hover:text-fg-secondary disabled:bg-bg-faint disabled:text-fg-quarternary",
        
        outline: "border border-border-primary bg-bg-faint text-fg-secondary hover:bg-bg-pale hover:text-fg-primary disabled:bg-bg-faint disabled:text-fg-quarternary",
        
        ghost: "text-fg-tertiary hover:bg-bg-pale hover:text-fg-primary disabled:bg-bg-faint disabled:text-fg-quarternary",
        
        link: "text-fg-secondary hover:text-fg-primary active:text-fg-tertiary disabled:text-fg-quarternary rounded-none",
      },
      size: {
        default: "h-9 px-5 py-2",
        sm: "h-7 px-3 py-1",
        lg: "h-11 px-6 py-[11px]",
        icon: "h-9 w-9",
        "icon-sm": "h-7 w-7",
        "icon-lg": "h-11 w-11",
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
