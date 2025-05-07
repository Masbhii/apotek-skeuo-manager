
import React from "react";
import { cn } from "@/lib/utils";
import { NavLink } from "./NavLink";
import {
  Home,
  Package,
  CreditCard,
  Users,
  FileText,
  Settings,
  BarChart,
  LogOut,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div className={cn("bg-white flex flex-col", className)}>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-pharma-green to-pharma-blue shadow-skeuomorphic flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <path d="M22 8H2"></path>
              <rect width="20" height="14" x="2" y="8" rx="2"></rect>
              <path d="M12 12v4"></path>
              <path d="M10 14h4"></path>
            </svg>
          </div>
          <div>
            <h1 className="font-semibold text-lg leading-tight">Apotek</h1>
            <p className="text-xs text-gray-500">Management System</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-3">
        <p className="text-xs font-medium text-gray-500 px-3 py-2">MAIN MENU</p>

        <nav className="space-y-1.5">
          <NavLink to="/" icon={<Home size={18} />} label="Dashboard" />
          <NavLink
            to="/inventory"
            icon={<Package size={18} />}
            label="Inventory"
          />
          <NavLink
            to="/expenses"
            icon={<CreditCard size={18} />}
            label="Expenses"
          />
          <NavLink to="/staff" icon={<Users size={18} />} label="Staff" />
          <NavLink
            to="/accounting"
            icon={<FileText size={18} />}
            label="Accounting"
          />
          <NavLink
            to="/reports"
            icon={<BarChart size={18} />}
            label="Reports"
          />
        </nav>

        <div className="skeuomorphic-divider"></div>

        <p className="text-xs font-medium text-gray-500 px-3 py-2">OTHER</p>

        <nav className="space-y-1.5">
          <NavLink
            to="/settings"
            icon={<Settings size={18} />}
            label="Settings"
          />
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-pharma-gray-dark hover:bg-pharma-gray transition-colors">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      <div className="p-4 mt-auto">
        <div className="skeuomorphic-card p-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-pharma-blue shadow-skeuomorphic flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-gray-500">admin@apotek.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
