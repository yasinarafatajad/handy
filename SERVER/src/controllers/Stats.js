import mongoose from "mongoose";
import Task from "../models/taskSchema.js";

export const getStats = async (req, res) => {
  const { taskType } = req.query;
  const typeFilter = {}
  if (taskType) typeFilter.taskType = taskType;
  const currentDate = Date();
  try {
    // Validate Task model exists
    if (!Task || !(Task.prototype instanceof mongoose.Model)) {
      return res.status(500).json({ message: "Task model is not defined" });
    }

    const total = await Task.countDocuments(typeFilter);
    const inProgress = await Task.countDocuments({ ...typeFilter, "status": "in-progress" });
    const pending = await Task.countDocuments({ ...typeFilter, "status": "pending" });
    const completed = await Task.countDocuments({ ...typeFilter, "status": "completed" });
    const overDue = await Task.countDocuments({ ...typeFilter, "dueDate": { $lt: currentDate }, "status": { $not: /^completed$/i } });
    const upComing = await Task.countDocuments({ ...typeFilter, "phases.0.startDate": { $gt: currentDate }, "status": { $not: /^completed$/i } });

    res.status(200).json([
      { name: "pending", value: pending, icon: "Clock", color: "bg-warning/10 text-warning", fill: "hsl(38, 92%, 50%)" },
      { name: "inProgress", value: inProgress, icon: "Loader", color: "bg-info/10 text-info", fill: "hsl(199, 89%, 48%)" },
      { name: "completed", value: completed, icon: "CheckCircle2", color: "bg-success/10 text-success", fill: "hsl(142, 64%, 40%)" },
      { name: "overDue", value: overDue, icon: "AlertTriangle", color: "bg-destructive/10 text-destructive", fill: "hsl(0, 72%, 51%)" },
      { name: "upComing", value: upComing, icon: "CalendarClock", color: "bg-violet-100 text-violet-600", fill: "hsl(280, 65%, 60%)" },
      { name: "total", value: total, icon: "FolderKanban", color: "bg-primary/10 text-primary" },
    ]);
  } catch (error) {
    console.log(error);
  }
};