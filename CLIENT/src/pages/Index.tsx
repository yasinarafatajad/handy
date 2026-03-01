import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCards from "@/components/dashboard/StatCards";
import StreakBadges from "@/components/dashboard/StreakBadges";
import Charts from "@/components/dashboard/Charts";
import AlertsFocus from "@/components/dashboard/AlertsFocus";
import { projectStreak, learningStreak, productivityData } from "@/data/mockData";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

const Index = () => {
  const api = useApi();
  const [allProjects, setAllProjects] = useState([]);

  const defaultStats = [
    { name: "pending", value: 0, icon: "Clock", color: "bg-gray-100 text-gray-600" },
    { name: "inProgress", value: 0, icon: "Loader", color: "bg-blue-100 text-blue-600" },
    { name: "completed", value: 0, icon: "CheckCircle2", color: "bg-green-100 text-green-600" },
    { name: "overDue", value: 0, icon: "AlertTriangle", color: "bg-red-100 text-red-600" },
    { name: "upComing", value: 0, icon: "CalendarClock", color: "bg-violet-100 text-violet-600" },
    { name: "total", value: 0, icon: "FolderKanban", color: "bg-purple-100 text-purple-600" },
  ];

  const [projectStats, setProjectStats] = useState(defaultStats);
  const [learningStats, setLearningStats] = useState(defaultStats)
  const statusDistribution = [
    { status: "Pending", projects: projectStats?.find(i => i.name === "pending")?.value, learning: learningStats?.find(i => i.name === "pending")?.value },
    { status: "In Progress", projects: projectStats?.find(i => i.name === "inProgress")?.value, learning: learningStats?.find(i => i.name === "inProgress")?.value },
    { status: "Completed", projects: projectStats?.find(i => i.name === "completed")?.value, learning: learningStats?.find(i => i.name === "completed")?.value },
    { status: "Overdue", projects: projectStats?.find(i => i.name === "overDue")?.value, learning: learningStats?.find(i => i.name === "overDue")?.value },
    { status: "Upcoming", projects: projectStats?.find(i => i.name === "upComing")?.value, learning: learningStats?.find(i => i.name === "upComing")?.value },
  ]

  // projectStats 
  useEffect(() => {
    const fetchProjectStats = async () => {
      const { data } = await api.get('/getStats?taskType=project');
      setProjectStats(data);
    }
    fetchProjectStats()
  }, [])
  // learningStats 
  useEffect(() => {
    const fetchLearningStats = async () => {
      const { data } = await api.get('/getStats?taskType=learning');
      setLearningStats(data);
    }
    fetchLearningStats()
  }, [])
  // all projects 
  useEffect(() => {
    const fetchAllProjects = async () => {
      const { data } = await api.get('/getAllTasks');
      setAllProjects(data);
    }
    fetchAllProjects()
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
        <AlertsFocus allTasks={allProjects} />
      </div>
    </DashboardLayout>
  );
}

export default Index;