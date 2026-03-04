import { Card } from "@/components/ui/card";
import {
  PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Legend,
} from "recharts";
const DonutChart = ({ title, data }) => {
  const chartData = data.filter(item => item.name !== "total")
  return (
    <Card className="p-5 border-0 shadow-sm">
      <h4 className="font-semibold text-sm mb-4">{title}</h4>
      <div className="h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={chartData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" strokeWidth={2} stroke="hsl(var(--card))">
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                fontSize: "12px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center mt-2.5">
            <p className="text-3xl font-bold">{data.find(i => i.name === "total")?.value}</p>
            <p className="text-sm text-muted-foreground">Total</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.fill || "hsl(203.1, 50.5%, 37.3%)" }} />
            {d.name}
          </div>
        ))}
      </div>
    </Card>
  );
}

const ProductivityChart = ({ data }) => {
  return (
    <Card className="p-5 border-0 shadow-sm">
      <h4 className="font-semibold text-sm mb-4">Productivity Over Time (mock Data)</h4>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="week" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", fontSize: "12px" }} />
            <Line type="monotone" dataKey="projects" stroke="hsl(var(--chart-1))" strokeWidth={2.5} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="learning" stroke="hsl(var(--chart-2))" strokeWidth={2.5} dot={{ r: 3 }} />
            <Legend wrapperStyle={{ fontSize: "11px" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

const StatusBarChart = ({ data }) => {
  return (
    <Card className="p-5 border-0 shadow-sm">
      <h4 className="font-semibold text-sm mb-4">Status Distribution</h4>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="status" tick={{ fontSize: 10 }} stroke="hsl(var(--muted-foreground))" />
            <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", fontSize: "12px" }} />
            <Bar dataKey="projects" fill="hsl(var(--chart-1))" radius={[6, 6, 0, 0]} />
            <Bar dataKey="learning" fill="hsl(var(--chart-2))" radius={[6, 6, 0, 0]} />
            <Legend wrapperStyle={{ fontSize: "11px" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

const Charts = ({ projectCompletion, learningCompletion, productivity, statusDistribution }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DonutChart title="Project Completion" data={projectCompletion} />
        <DonutChart title="Learning Completion" data={learningCompletion} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* <ProductivityChart data={productivity} /> */}
        <StatusBarChart data={statusDistribution} />
      </div>
    </div>
  );
}

export default Charts