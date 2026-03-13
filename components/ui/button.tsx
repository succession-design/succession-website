import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles =
      "font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
      outline: "border-2 border-gray-300 text-gray-900 hover:border-gray-400",
    };

    const sizeStyles = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
