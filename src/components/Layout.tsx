
import React from "react";
import { Sidebar } from "./Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen bg-pharma-cream">
      {!isMobile ? (
        <Sidebar className="w-64 min-w-64 border-r border-pharma-gray-dark/20" />
      ) : (
        <Sheet>
          <SheetTrigger asChild>
            <button className="fixed top-4 left-4 z-50 skeuomorphic-button p-2">
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 max-w-[80vw]">
            <Sidebar className="w-full h-full border-none" />
          </SheetContent>
        </Sheet>
      )}

      <main
        className={cn(
          "flex-1 max-w-full",
          isMobile ? "pl-4 pr-4 pt-16" : "pl-6 pr-6 pt-6"
        )}
      >
        {children}
      </main>
    </div>
  );
};
