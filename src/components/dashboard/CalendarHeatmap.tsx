import { Card } from "@/components/ui/card";

const getIntensity = (count) => {
  if (count === 0) return "bg-muted";
  if (count === 1) return "bg-success/20";
  if (count === 2) return "bg-success/40";
  if (count === 3) return "bg-success/60";
  return "bg-success/90";
};

export default function CalendarHeatmap({ data }) {
  return (
    <Card className="p-5 border-0 shadow-sm">
      <h4 className="font-semibold text-sm mb-4">Activity Heatmap (Last 90 Days)</h4>
      <div className="flex flex-wrap gap-1">
        {data.map((day) => (
          <div
            key={day.date}
            className={`w-3 h-3 rounded-sm ${getIntensity(day.count)} transition-colors`}
            title={`${day.date}: ${day.count} tasks`}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
        <span>Less</span>
        <div className="w-3 h-3 rounded-sm bg-muted" />
        <div className="w-3 h-3 rounded-sm bg-success/20" />
        <div className="w-3 h-3 rounded-sm bg-success/40" />
        <div className="w-3 h-3 rounded-sm bg-success/60" />
        <div className="w-3 h-3 rounded-sm bg-success/90" />
        <span>More</span>
      </div>
    </Card>
  );
}