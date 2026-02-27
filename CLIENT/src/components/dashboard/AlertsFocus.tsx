import { AlertTriangle, Calendar, CheckCircle2, Circle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AlertsFocus = ({ atRisk, deadlines, focusTasks }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Upcoming Deadlines */}
      <Card className="p-5 border-0 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-info" />
          <h4 className="font-semibold text-sm">Upcoming Deadlines</h4>
        </div>
        <div className="space-y-3">
          {deadlines.map((d) => (
            <div key={d.id} className="flex items-center justify-between">
              <p className="text-sm">{d.title}</p>
              <span className="text-xs text-muted-foreground">{d.dueDate}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* At Risk */}
      <Card className="p-5 border-0 shadow-sm border-l-4 border-l-destructive">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <h4 className="font-semibold text-sm">At Risk Tasks</h4>
        </div>
        <div className="space-y-3">
          {atRisk.map((task) => (
            <div key={task.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{task.title}</p>
                <p className="text-xs text-muted-foreground">Due: {task.dueDate}</p>
              </div>
              <Badge variant={task.priority === "high" ? "destructive" : "secondary"} className="text-[10px]">
                {task.priority}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AlertsFocus;