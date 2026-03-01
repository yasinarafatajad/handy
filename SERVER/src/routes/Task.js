import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  addPhase,
  updateSubtask,
  deleteSubtask,
} from "../controllers/Task.js";

const router = express.Router();

// ----- Task Routes ----- //
router.post("/addTask", createTask); // Create a new task
router.get("/getAllTasks", getAllTasks); // Get all tasks
router.get("/task/:id", getTaskById); // Get task by ID
router.put("/task/:id", updateTask); // Update task by ID
router.delete("/task/:id", deleteTask); // Delete task by ID

// ----- Phase Routes ----- //
router.post("/task/:id/phases", addPhase); // Add a new phase to task
// ----- Subtask Routes ----- //
router.put("/task/:id/phases/:phaseId/subtasks/:subtaskId", updateSubtask); // Update a subtask

// router.put("/:id/phases/:phaseId", updatePhase);        // Update a phase
// router.delete("/:id/phases/:phaseId", deletePhase);     // Delete a phase

// router.post("/task/:id/phases/:phaseId/subtasks", addSubtask);                 // Add a subtask
router.delete("/task/:id/phases/:phaseId/subtasks/:subtaskId", deleteSubtask); // Delete a subtask

export default router;
