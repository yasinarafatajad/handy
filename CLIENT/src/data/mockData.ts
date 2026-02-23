export const projectStats = [
  { label: "Total Projects", value: 24, icon: "FolderKanban", color: "bg-primary/10 text-primary" },
  { label: "Pending", value: 6, icon: "Clock", color: "bg-warning/10 text-warning" },
  { label: "In Progress", value: 8, icon: "Loader", color: "bg-info/10 text-info" },
  { label: "Completed", value: 7, icon: "CheckCircle2", color: "bg-success/10 text-success" },
  { label: "Upcoming", value: 2, icon: "CalendarClock", color: "bg-chart-4/10 text-chart-4" },
  { label: "Overdue", value: 1, icon: "AlertTriangle", color: "bg-destructive/10 text-destructive" },
];

export const learningStats = [
  { label: "Total Plans", value: 18, icon: "GraduationCap", color: "bg-primary/10 text-primary" },
  { label: "Pending", value: 4, icon: "Clock", color: "bg-warning/10 text-warning" },
  { label: "In Progress", value: 6, icon: "Loader", color: "bg-info/10 text-info" },
  { label: "Completed", value: 5, icon: "CheckCircle2", color: "bg-success/10 text-success" },
  { label: "Upcoming", value: 3, icon: "CalendarClock", color: "bg-chart-4/10 text-chart-4" },
];

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

export const projectCompletionData = [
  { name: "Completed", value: 7, fill: "hsl(142, 64%, 40%)" },
  { name: "In Progress", value: 8, fill: "hsl(199, 89%, 48%)" },
  { name: "Pending", value: 6, fill: "hsl(38, 92%, 50%)" },
  { name: "Overdue", value: 1, fill: "hsl(0, 72%, 51%)" },
];

export const learningCompletionData = [
  { name: "Completed", value: 5, fill: "hsl(142, 64%, 40%)" },
  { name: "In Progress", value: 6, fill: "hsl(199, 89%, 48%)" },
  { name: "Pending", value: 4, fill: "hsl(38, 92%, 50%)" },
  { name: "Upcoming", value: 3, fill: "hsl(280, 65%, 60%)" },
];

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

export const statusDistributionData = [
  { status: "Pending", projects: 6, learning: 4 },
  { status: "In Progress", projects: 8, learning: 6 },
  { status: "Completed", projects: 7, learning: 5 },
  { status: "Overdue", projects: 1, learning: 0 },
  { status: "Upcoming", projects: 2, learning: 3 },
];

type heatmapDataType ={date:string, count:number}
const heatmapData:heatmapDataType[] = [
  { date: "2025-11-26", count: 2 },
  { date: "2025-11-27", count: 1 },
  { date: "2025-11-28", count: 0 },
  { date: "2025-11-29", count: 1 },
  { date: "2025-11-30", count: 3 },
  { date: "2025-12-01", count: 2 },
  { date: "2025-12-02", count: 3 },
  { date: "2025-12-03", count: 0 },
  { date: "2025-12-04", count: 1 },
  { date: "2025-12-05", count: 3 },
  { date: "2025-12-06", count: 0 },
  { date: "2025-12-07", count: 4 },
  { date: "2025-12-08", count: 2 },
  { date: "2025-12-09", count: 2 },
  { date: "2025-12-10", count: 4 },
  { date: "2025-12-11", count: 1 },
  { date: "2025-12-12", count: 1 },
  { date: "2025-12-13", count: 4 },
  { date: "2025-12-14", count: 2 },
  { date: "2025-12-15", count: 4 },
  { date: "2025-12-16", count: 1 },
  { date: "2025-12-17", count: 4 },
  { date: "2025-12-18", count: 0 },
  { date: "2025-12-19", count: 4 },
  { date: "2025-12-20", count: 2 },
  { date: "2025-12-21", count: 1 },
  { date: "2025-12-22", count: 3 },
  { date: "2025-12-23", count: 1 },
  { date: "2025-12-24", count: 4 },
  { date: "2025-12-25", count: 4 },
  { date: "2025-12-26", count: 3 },
  { date: "2025-12-27", count: 2 },
  { date: "2025-12-28", count: 0 },
  { date: "2025-12-29", count: 4 },
  { date: "2025-12-30", count: 4 },
  { date: "2025-12-31", count: 2 },
  { date: "2026-01-01", count: 4 },
  { date: "2026-01-02", count: 1 },
  { date: "2026-01-03", count: 0 },
  { date: "2026-01-04", count: 1 },
  { date: "2026-01-05", count: 1 },
  { date: "2026-01-06", count: 3 },
  { date: "2026-01-07", count: 1 },
  { date: "2026-01-08", count: 1 },
  { date: "2026-01-09", count: 4 },
  { date: "2026-01-10", count: 3 },
  { date: "2026-01-11", count: 2 },
  { date: "2026-01-12", count: 1 },
  { date: "2026-01-13", count: 4 },
  { date: "2026-01-14", count: 4 },
  { date: "2026-01-15", count: 0 },
  { date: "2026-01-16", count: 1 },
  { date: "2026-01-17", count: 0 },
  { date: "2026-01-18", count: 3 },
  { date: "2026-01-19", count: 0 },
  { date: "2026-01-20", count: 2 },
  { date: "2026-01-21", count: 2 },
  { date: "2026-01-22", count: 1 },
  { date: "2026-01-23", count: 0 },
  { date: "2026-01-24", count: 3 },
  { date: "2026-01-25", count: 3 },
  { date: "2026-01-26", count: 0 },
  { date: "2026-01-27", count: 3 },
  { date: "2026-01-28", count: 2 },
  { date: "2026-01-29", count: 2 },
  { date: "2026-01-30", count: 4 },
  { date: "2026-01-31", count: 1 },
  { date: "2026-02-01", count: 2 },
  { date: "2026-02-02", count: 3 },
  { date: "2026-02-03", count: 2 },
  { date: "2026-02-04", count: 2 },
  { date: "2026-02-05", count: 3 },
  { date: "2026-02-06", count: 3 },
  { date: "2026-02-07", count: 3 },
  { date: "2026-02-08", count: 4 },
  { date: "2026-02-09", count: 0 },
  { date: "2026-02-10", count: 0 },
  { date: "2026-02-11", count: 1 },
  { date: "2026-02-12", count: 1 },
  { date: "2026-02-13", count: 1 },
  { date: "2026-02-14", count: 1 },
  { date: "2026-02-15", count: 4 },
  { date: "2026-02-16", count: 0 },
  { date: "2026-02-17", count: 2 },
  { date: "2026-02-18", count: 0 },
  { date: "2026-02-19", count: 0 },
  { date: "2026-02-20", count: 3 },
  { date: "2026-02-21", count: 0 },
  { date: "2026-02-22", count: 3 },
  { date: "2026-02-23", count: 4 }
]
export const monthlyHeatmapData = heatmapData.slice(-30)

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