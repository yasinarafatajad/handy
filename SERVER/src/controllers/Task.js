import Task from "../models/taskSchema.js";

// Create a new task
export const createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all tasks
export const getAllTasks = async (req, res) => {
  const { taskType } = req.query;
  const typeFilter = {};
  if (taskType) typeFilter.taskType = taskType;

  try {
    const tasks = await Task.find(typeFilter);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Get a single task by ID
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a task by ID
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a task by ID
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a phase to a task
export const addPhase = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    task.phases.push(req.body); // req.body should contain {name, startDate, endDate, subtasks}
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a subtask inside a phase
export const updateSubtask = async (req, res) => {
  try {
    const { id, phaseId, subtaskId } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    const phase = task.phases.id(phaseId);
    if (!phase) return res.status(404).json({ error: "Phase not found" });

    const subtask = phase.subtasks.id(subtaskId);
    if (!subtask) return res.status(404).json({ error: "Subtask not found" });

    Object.assign(subtask, req.body); // update subtask fields
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a subtask from a phase
export const deleteSubtask = async (req, res) => {
  try {
    const { id, phaseId, subtaskId } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ error: "Task not found" });

    const phase = task.phases.id(phaseId);
    if (!phase) return res.status(404).json({ error: "Phase not found" });

    const subtask = phase.subtasks.id(subtaskId);
    if (!subtask) return res.status(404).json({ error: "Subtask not found" });

    subtask.deleteOne();
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
