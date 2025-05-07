
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        variant === "default" && "skeuomorphic-button",
        variant === "primary" && "skeuomorphic-button-primary",
        variant === "secondary" && "skeuomorphic-button-secondary",
        size === "sm" && "text-sm py-1 px-3",
        size === "md" && "text-sm py-2 px-4",
        size === "lg" && "text-base py-2.5 px-5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
