import DashboardLayout from "@/components/layout/DashboardLayout";
import { FolderKanban } from "lucide-react";

export default function Projects() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <FolderKanban className="w-12 h-12 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="text-muted-foreground mt-2">Project management coming soon.</p>
      </div>
    </DashboardLayout>
  );
}