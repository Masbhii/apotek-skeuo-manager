
import React from "react";
import { cn } from "@/lib/utils";

interface TableProps {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children, className }: TableProps) => {
  return (
    <div className={cn("w-full overflow-auto", className)}>
      <table className="w-full caption-bottom text-sm">{children}</table>
    </div>
  );
};

export const TableHeader = ({ children, className }: TableProps) => {
  return <thead className={cn("[&_tr]:border-b", className)}>{children}</thead>;
};

export const TableBody = ({ children, className }: TableProps) => {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)}>{children}</tbody>;
};

export const TableFooter = ({ children, className }: TableProps) => {
  return (
    <tfoot
      className={cn("border-t bg-pharma-gray-light/50 font-medium", className)}
    >
      {children}
    </tfoot>
  );
};

export const TableRow = ({ children, className }: TableProps) => {
  return (
    <tr
      className={cn(
        "border-b border-pharma-gray-dark/10 transition-colors hover:bg-pharma-gray-light/50",
        className
      )}
    >
      {children}
    </tr>
  );
};

export const TableHead = ({
  children,
  className,
  ...props
}: React.ThHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th
      className={cn(
        "h-10 px-4 text-left align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...props}
    >
      {children}
    </th>
  );
};

export const TableCell = ({
  children,
  className,
  ...props
}: React.TdHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td
      className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
      {...props}
    >
      {children}
    </td>
  );
};
