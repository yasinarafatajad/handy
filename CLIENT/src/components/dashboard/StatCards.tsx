import {
  FolderKanban, Clock, Loader, CheckCircle2, CalendarClock,
  AlertTriangle, GraduationCap,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const iconMap = {
  FolderKanban, Clock, Loader, CheckCircle2, CalendarClock, AlertTriangle, GraduationCap,
};

function StatCard({ stat }) {
  const Icon = iconMap[stat.icon] || FolderKanban;
  return (
    <Card className="p-4 flex items-center gap-4 hover:shadow-md transition-shadow duration-200 border-0 shadow-sm">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${stat.color}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold leading-none">{stat.value}</p>
        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
      </div>
    </Card>
  );
}

export default function StatCards({ title, stats }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </div>
    </div>
  );
}