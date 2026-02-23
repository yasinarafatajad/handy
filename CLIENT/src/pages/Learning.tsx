import DashboardLayout from "@/components/layout/DashboardLayout";
import { GraduationCap } from "lucide-react";

export default function Learning() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <GraduationCap className="w-12 h-12 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold">Learning</h1>
        <p className="text-muted-foreground mt-2">Learning plans coming soon.</p>
      </div>
    </DashboardLayout>
  );
}