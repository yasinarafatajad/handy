import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCards from "@/components/dashboard/StatCards";
import StreakBadges from "@/components/dashboard/StreakBadges";
import Charts from "@/components/dashboard/Charts";
import CalendarHeatmap from "@/components/dashboard/CalendarHeatmap";
import AlertsFocus from "@/components/dashboard/AlertsFocus";
import {
  projectStreak, learningStreak, productivityData, atRiskTasks, upcomingDeadlines, todayFocusTasks,
} from "@/data/mockData";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

const Index = () => {
  const api = useApi();
  const [projectStats, setProjectStats] = useState([]);
  const [learningStats, setLearningStats] = useState([])
  const statusDistribution = [
    { status: "Pending", projects: projectStats?.find(i => i.name === "pending")?.value, learning: learningStats?.find(i => i.name === "pending")?.value },
    { status: "In Progress", projects: projectStats?.find(i => i.name === "inProgress")?.value, learning: learningStats?.find(i => i.name === "inProgress")?.value },
    { status: "Completed", projects: projectStats?.find(i => i.name === "completed")?.value, learning: learningStats?.find(i => i.name === "completed")?.value },
    { status: "Overdue", projects: projectStats?.find(i => i.name === "overDue")?.value, learning: learningStats?.find(i => i.name === "overDue")?.value },
    { status: "Upcoming", projects: projectStats?.find(i => i.name === "upComing")?.value, learning: learningStats?.find(i => i.name === "upComing")?.value },
  ]

  // projectStats 
  const fetchProjectStats = async () => {
    const { data } = await api.get('/getStats?taskType=project');
    setProjectStats(data);
  }
  useEffect(() => {
    fetchProjectStats()
  }, [])
  // learningStats 
  const fetchLearningStats = async () => {
    const { data } = await api.get('/getStats?taskType=learning');
    setLearningStats(data);
  }
  useEffect(() => {
    fetchLearningStats()
  }, [])

  return (
    <DashboardLayout>
      <div className="space-y-6">
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
          projectCompletion={projectStats}
          learningCompletion={learningStats}
          statusDistribution={statusDistribution}
          productivity={productivityData}
        />

        {/* Section D: Alerts & Focus */}
        <AlertsFocus atRisk={atRiskTasks} deadlines={upcomingDeadlines} focusTasks={todayFocusTasks} />
      </div>
    </DashboardLayout>
  );
}

export default Index;