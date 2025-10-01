import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-light tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50 uppercase";
    
    const variants = {
      primary: "bg-accent text-black hover:bg-accent/90 border border-accent",
      secondary: "bg-gray-900/50 text-foreground hover:bg-gray-800/50 border border-gray-700",
      outline: "border border-accent/50 bg-transparent text-foreground hover:bg-accent/10 hover:border-accent",
      ghost: "bg-transparent text-foreground hover:text-accent border border-transparent hover:border-accent/30",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };
    
    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };