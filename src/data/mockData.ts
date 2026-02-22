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
  currentStreak: 12,
  longestStreak: 21,
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

export const heatmapData = (() => {
  const data = [];
  const today = new Date();
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 5),
    });
  }
  return data.reverse();
})();

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