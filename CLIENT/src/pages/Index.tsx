import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCards from "@/components/dashboard/StatCards";
import StreakBadges from "@/components/dashboard/StreakBadges";
import Charts from "@/components/dashboard/Charts";
import CalendarHeatmap from "@/components/dashboard/CalendarHeatmap";
import AlertsFocus from "@/components/dashboard/AlertsFocus";
import {
  projectStats, learningStats, projectStreak, learningStreak,
  projectCompletionData, learningCompletionData, productivityData,
  statusDistributionData, monthlyHeatmapData, atRiskTasks, upcomingDeadlines, todayFocusTasks,
} from "@/data/mockData";

// console.log(monthlyHeatmapData);

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Welcome back, Ajad.</p>
        </div>

        {/* Section A: Stat Cards */}
        <StatCards title="Project Overview" stats={projectStats} />
        <StatCards title="Learning Overview" stats={learningStats} />

        {/* Section B: Streaks */}
        <StreakBadges streaks={[projectStreak, learningStreak]} />

        {/* Section C: Charts */}
        <Charts
          projectCompletion={projectCompletionData}
          learningCompletion={learningCompletionData}
          productivity={productivityData}
          statusDistribution={statusDistributionData}
        />
        <CalendarHeatmap data={monthlyHeatmapData} />

        {/* Section D: Alerts & Focus */}
        <AlertsFocus atRisk={atRiskTasks} deadlines={upcomingDeadlines} focusTasks={todayFocusTasks} />
      </div>
    </DashboardLayout>
  );
}