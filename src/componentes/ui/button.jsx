import * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = {
  default:
    'inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary/90 transition-colors',
  outline:
    'inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors',
  ghost:
    'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
  // Add more variants as needed
}

const Button = React.forwardRef(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants[variant], className)}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button }
