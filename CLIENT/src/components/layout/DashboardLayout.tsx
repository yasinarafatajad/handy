import { useState, useEffect } from "react";
import AppSidebar from "./AppSidebar";
import TopNavbar from "./TopNavbar";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardLayout({ children }) {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (isMobile) setCollapsed(true);
  }, [isMobile]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

      {/* Overlay for mobile */}
      {isMobile && !collapsed && (
        <div className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm" onClick={() => setCollapsed(true)} />
      )}

      <div className={cn("flex-1 flex flex-col transition-all duration-300", collapsed ? "ml-0 lg:ml-[68px]" : "ml-0 lg:ml-60")}>
        <TopNavbar
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(!darkMode)}
          onToggleSidebar={() => setCollapsed(!collapsed)}
        />
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}