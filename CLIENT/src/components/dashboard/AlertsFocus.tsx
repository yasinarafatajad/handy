import { AlertTriangle, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMemo } from "react";

const AlertsFocus = ({ allTasks }) => {

  const deadlines = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return allTasks
      .filter(task => {
        const startDate = new Date(task?.phases[0]?.startDate);
        startDate.setHours(0, 0, 0, 0);
        return startDate.getTime() > today.getTime() && task?.status !== "completed";
      })
      .map(task => ({
        id: task?._id,
        title: task?.title,
        taskType: task?.taskType,
        startDate: new Date(task?.phases[0]?.startDate).toLocaleDateString("en-GB"),
        dueDate: new Date(task?.dueDate).toLocaleDateString("en-GB"), // format as DD/MM/YYYY
      }))
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()); // soonest first
  }, [allTasks]);

  const atRiskTasks = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // normalize to start of today

    return allTasks
      .filter(task => {
        const dueDate = new Date(task?.dueDate);
        dueDate.setHours(0, 0, 0, 0); // normalize task due date
        return dueDate <= today && task?.status !== "completed";
      })
      .map(task => ({
        id: task?._id,
        title: task?.title,
        status: task?.status,
        priority: task?.priority,
        dueDate: new Date(task?.dueDate).toLocaleDateString("en-GB"),
      }))
      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()); // soonest overdue first
  }, [allTasks]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Upcoming Deadlines */}
      <Card className="p-5 border-0 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4 text-info" />
          <h4 className="font-semibold text-sm">Upcoming Deadlines</h4>
        </div>
        <table className="space-y-2 ">

          <tr className="flex items-center justify-between text-center border-b">
            <td className="text-md text-foreground px-4">Task Type</td>
            <td className="text-sm px-4">Title</td>
            <td className="text-xs text-muted-foreground px-4">Start Date</td>
            <td className="text-xs text-muted-foreground px-4">Due Date</td>
          </tr>
          {[...deadlines].reverse().map((d) => (
            <tr key={d.id} className="flex items-center justify-between gap-2 text-center">
              <td className="text-md text-foreground uppercase bg-foreground/20 rounded px-2">{d.taskType}</td>
              <td className="text-sm">{d.title}</td>
              <td className="text-xs text-muted-foreground">{d.startDate}</td>
              <td className="text-xs text-muted-foreground">{d.dueDate}</td>
            </tr>
          ))}
        </table>
      </Card>

      {/* At Risk */}
      <Card className="p-5 border-0 shadow-sm border-l-4 border-l-destructive">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-4 h-4 text-destructive" />
          <h4 className="font-semibold text-sm">At Risk Tasks</h4>
        </div>
        <div className="space-y-3">
          {[...atRiskTasks].map((task) => (
            <div key={task?.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{task?.title}</p>
                <p className="text-sm font-medium">{task?.status}</p>
                <p className="text-xs text-muted-foreground">Due: {task?.dueDate}</p>
              </div>
              <Badge variant={task?.priority === "high" ? "destructive" : "secondary"} className="text-[10px]">
                {task?.priority}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default AlertsFocus;