import { Card } from "@/components/ui/card";
import {
  PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line,
  XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid, Legend,
} from "recharts";

function DonutChart({ title, data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  return (
    <Card className="p-5 border-0 shadow-sm">
      <h4 className="font-semibold text-sm mb-4">{title}</h4>
      <div className="h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" strokeWidth={2} stroke="hsl(var(--card))">
              {data.map((entry, i) => (
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
          <div className="text-center">
            <p className="text-2xl font-bold">{total}</p>
            <p className="text-[10px] text-muted-foreground">Total</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-3">
        {data.map((d, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: d.fill }} />
            {d.name}
          </div>
        ))}
      </div>
    </Card>
  );
}

function ProductivityChart({ data }) {
  return (
    <Card className="p-5 border-0 shadow-sm">
      <h4 className="font-semibold text-sm mb-4">Productivity Over Time</h4>
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

function StatusBarChart({ data }) {
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

export default function Charts({ projectCompletion, learningCompletion, productivity, statusDistribution }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <DonutChart title="Project Completion" data={projectCompletion} />
        <DonutChart title="Learning Completion" data={learningCompletion} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductivityChart data={productivity} />
        <StatusBarChart data={statusDistribution} />
      </div>
    </div>
  );
}