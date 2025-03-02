
import React, { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  ripple?: boolean;
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ripple = true, children, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple) return;
      
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      
      const circle = document.createElement("span");
      const diameter = Math.max(rect.width, rect.height);
      
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - rect.left - diameter / 2}px`;
      circle.style.top = `${event.clientY - rect.top - diameter / 2}px`;
      circle.classList.add("ripple");
      
      const rippleElement = button.getElementsByClassName("ripple")[0];
      if (rippleElement) {
        rippleElement.remove();
      }
      
      button.appendChild(circle);
      
      // Remove the ripple element after animation completes
      setTimeout(() => {
        if (circle) circle.remove();
      }, 700);
    };

    const variantClasses = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-2 focus-visible:ring-ring",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
      ghost: "hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring",
      link: "text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring",
      text: "text-foreground hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring",
    };

    const sizeClasses = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 py-2 text-sm",
      lg: "h-12 px-6 py-3 text-base",
      xl: "h-14 px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref || buttonRef}
        className={cn(
          "relative flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 overflow-hidden press-effect",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        onClick={createRipple}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
