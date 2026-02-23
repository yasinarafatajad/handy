import express from "express";
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
  addPhase,
  updateSubtask,
} from "../controllers/Task.js";

const router = express.Router();

// ----- Task Routes ----- //
router.post("/addTask", createTask);            // Create a new task
router.get("/", getAllTasks);            // Get all tasks
router.get("/:id", getTaskById);         // Get task by ID
router.put("/:id", updateTask);          // Update task by ID
router.delete("/:id", deleteTask);       // Delete task by ID

// ----- Phase Routes ----- //
router.post("/:id/phases", addPhase);                    // Add a new phase to task

// router.put("/:id/phases/:phaseId", updatePhase);        // Update a phase
// router.delete("/:id/phases/:phaseId", deletePhase);     // Delete a phase

// ----- Subtask Routes ----- //
router.put("/:id/phases/:phaseId/subtasks/:subtaskId", updateSubtask);   // Update a subtask

// router.post("/:id/phases/:phaseId/subtasks", addSubtask);                 // Add a subtask
// router.delete("/:id/phases/:phaseId/subtasks/:subtaskId", deleteSubtask);// Delete a subtask

export default router;