import mongoose from "mongoose";
import Task from "../models/taskSchema.js";

export const getStats = async (req, res) => {
  const currentDate = Date.now();
  try {
    // Validate Task model exists
    if (!Task || !(Task.prototype instanceof mongoose.Model)) {
      return res.status(500).json({ message: "Task model is not defined" });
    }

    const total = await Task.countDocuments();
    const inProgress = await Task.countDocuments({ "status": "in-progress" });
    const pending = await Task.countDocuments({ "status": "pending" });
    const completed = await Task.countDocuments({ "status": "completed" });
    const overDue = await Task.countDocuments({ "dueDate": { $lt: currentDate }, "status": { $ne: "completed" } });
    const upComing = await Task.countDocuments({ "phases.0.startDate": { $gt: currentDate }, "status": { $ne: "completed" } });

    res.status(200).json({ "total": total, "inProgress": inProgress, "pending": pending, "completed": completed, "overDue": overDue, "upComing": upComing });
  } catch (error) {
    console.log(error);
  }
};