import mongoose from "mongoose";

const SubtaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { _id: true }
);

const PhaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: Date,
    endDate: Date,
    subtasks: [SubtaskSchema],
  },
  { _id: true }
);

const TaskSchema = new mongoose.Schema(
  {
    taskType: {
      type: String,
      enum: ["project", "learning"],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: String,

    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "medium",
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },

    dueDate: Date,

    tags: [String],

    phases: [PhaseSchema],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true, versionKey:false }
);

export default mongoose.model("Task", TaskSchema);