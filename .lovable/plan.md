

# Personal Task & Learning Management Dashboard

## Overview
A premium SaaS-style dashboard for managing projects and learning plans, built as a UI prototype with mock data. Clean, minimal design inspired by Notion and Linear.

---

## 1. Design System & Theming
- Inter font, 8px spacing grid, 16–20px rounded corners
- Light mode by default with dark mode toggle
- Soft color palette with subtle gradients and shadows
- Consistent badge styles (Success, Warning, Danger)
- Smooth hover animations and progress bar transitions

## 2. Layout Shell
- **Collapsible Left Sidebar**: Logo, navigation items (Dashboard, Projects, Learning, Calendar, Analytics, Settings) with icons and active state highlighting
- **Top Navbar**: Search bar, notification bell, quick-add (+) button, profile avatar dropdown
- Fully responsive — desktop-first with tablet/mobile adaptations (sidebar collapses to mini icon mode on smaller screens)

## 3. Dashboard Page (Main Content)

### Section A: Stat Cards (2 Rows)
- **Row 1 – Projects**: Total, Pending, In Progress, Completed, Upcoming, Overdue
- **Row 2 – Learning**: Total, Pending, In Progress, Completed, Upcoming
- Each card: bold number, label, icon, soft accent background, subtle shadow

### Section B: Streak Badges
- Two streak overview cards (Projects & Learning)
- Each shows: Weekly consistency indicator, Current streak (prominently highlighted), Longest streak

### Section C: Charts
1. Donut chart – Project completion ratio
2. Donut chart – Learning completion ratio
3. Line chart – Productivity over time
4. Bar chart – Status distribution
5. Calendar heatmap – Daily activity / streak visualization
- All charts use soft, modern colors with smooth curves (Recharts)

### Section D: Alerts & Focus Area
- "At Risk Tasks" warning card with red/yellow accent
- Upcoming deadlines list
- Today's focus tasks section

## 4. Add New Task Page
- Single form that works for both **Project Tasks** and **Learning Tasks** (toggle or tab to switch type)
- Fields: Title, description, type (project/learning), priority, due date, status, tags
- **Phases section**: Dynamically add/remove project phases (e.g., Research → Design → Build → Review), each with a name and optional date range
- **Subtasks section**: Within each phase (or standalone), add/remove checklist-style subtasks with title and completion status
- Clean card-based form layout, fully responsive

## 5. Additional Pages (Stub/Placeholder)
- Projects, Learning, Calendar, Analytics, Settings pages as placeholder routes for future expansion

## 6. Responsive Behavior
- Desktop: Full sidebar + multi-column grid
- Tablet: Collapsed mini sidebar, 2-column card grid
- Mobile: Hidden sidebar with hamburger trigger, single-column stacked layout

