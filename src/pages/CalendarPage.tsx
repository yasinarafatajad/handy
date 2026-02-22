import DashboardLayout from "@/components/layout/DashboardLayout";
import { Calendar } from "lucide-react";

export default function CalendarPage() {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Calendar className="w-12 h-12 text-muted-foreground mb-4" />
        <h1 className="text-2xl font-bold">Calendar</h1>
        <p className="text-muted-foreground mt-2">Calendar view coming soon.</p>
      </div>
    </DashboardLayout>
  );
}