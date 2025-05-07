
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div className={cn("skeuomorphic-card p-4", className)} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <h3
      className={cn("text-lg font-semibold text-gray-800", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <p
      className={cn("text-sm text-gray-500", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

export const CardFooter = ({
  children,
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn("mt-4 flex items-center justify-end gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
};
