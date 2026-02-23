import DashboardLayout from "@/components/layout/DashboardLayout";
import { BarChart3 } from "lucide-react";

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <BarChart3 className="w-12 h-12 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold">Analytics</h1>
        <p className="text-muted-foreground mt-2">Analytics dashboard coming soon.</p>
      </div>
    </DashboardLayout>
  );
}