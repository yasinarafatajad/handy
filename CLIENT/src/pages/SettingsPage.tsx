import DashboardLayout from "@/components/layout/DashboardLayout";
import { Settings as SettingsIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <SettingsIcon className="w-12 h-12 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Settings page coming soon.</p>
      </div>
    </DashboardLayout>
  );
}