export const projectStreak = {
  title: "Projects",
  weeklyConsistency: [true, true, false, true, true, true, false],
  currentStreak: 10,
  longestStreak: 36,
};

export const learningStreak = {
  title: "Learning",
  weeklyConsistency: [true, false, true, true, true, false, true],
  currentStreak: 8,
  longestStreak: 15,
};


export const productivityData = [
  { week: "W1", projects: 3, learning: 2 },
  { week: "W2", projects: 5, learning: 4 },
  { week: "W3", projects: 4, learning: 3 },
  { week: "W4", projects: 7, learning: 5 },
  { week: "W5", projects: 6, learning: 6 },
  { week: "W6", projects: 8, learning: 4 },
  { week: "W7", projects: 5, learning: 7 },
  { week: "W8", projects: 9, learning: 6 },
];

export const atRiskTasks = [
  { id: 1, title: "API Integration Module", dueDate: "2026-02-23", type: "project", priority: "high" },
  { id: 2, title: "React Hooks Deep Dive", dueDate: "2026-02-24", type: "learning", priority: "medium" },
];

export const upcomingDeadlines = [
  { id: 1, title: "Dashboard Redesign", dueDate: "2026-02-25", type: "project" },
  { id: 2, title: "TypeScript Mastery", dueDate: "2026-02-26", type: "learning" },
  { id: 3, title: "Database Schema v2", dueDate: "2026-02-27", type: "project" },
  { id: 4, title: "System Design Course", dueDate: "2026-02-28", type: "learning" },
];

export const todayFocusTasks = [
  { id: 1, title: "Review PR #142", completed: false, type: "project" },
  { id: 2, title: "Complete Chapter 5 – Algorithms", completed: true, type: "learning" },
  { id: 3, title: "Fix login redirect bug", completed: false, type: "project" },
  { id: 4, title: "Practice SQL Joins", completed: false, type: "learning" },
];