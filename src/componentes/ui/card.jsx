import * as React from "react"
import { cn } from "../../lib/utils" 

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl border bg-white text-[#6B4F3C] shadow", className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-4", className)}
    {...props}
  />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }
