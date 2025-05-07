
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

export const NavLink = ({ to, icon, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
        isActive
          ? "bg-gradient-to-r from-pharma-blue to-pharma-blue-light text-pharma-blue-dark shadow-skeuomorphic"
          : "text-pharma-gray-dark hover:bg-pharma-gray"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};
