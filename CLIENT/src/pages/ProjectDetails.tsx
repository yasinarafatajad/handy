import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Edit2,
  Flag,
  FolderKanban,
  Layers,
  Tag,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { useApi } from "@/hooks/useApi";
import { cn } from "@/lib/utils";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const formatDate = (d: string | null | undefined) => {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const priorityConfig: Record<string, { label: string; class: string; dot: string }> = {
  low: { label: "Low", class: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400", dot: "bg-emerald-500" },
  medium: { label: "Medium", class: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400", dot: "bg-amber-500" },
  high: { label: "High", class: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400", dot: "bg-orange-500" },
  critical: { label: "Critical", class: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400", dot: "bg-red-500" },
};

const statusConfig: Record<string, { label: string; class: string }> = {
  pending: { label: "Pending", class: "bg-muted text-muted-foreground" },
  "in-progress": { label: "In Progress", class: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" },
  completed: { label: "Completed", class: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400" },
};

// ─── Phase Card ───────────────────────────────────────────────────────────────

function PhaseCard({ 
  phase, 
  index, 
  onToggleSubtask, 
  onDeleteSubtask 
}: { 
  phase: any; 
  index: number; 
  onToggleSubtask: (phaseId: string, subtaskId: string, completed: boolean) => void;
  onDeleteSubtask: (phaseId: string, subtaskId: string) => void;
}) {
  const total = phase.subtasks?.length ?? 0;
  const done = phase.subtasks?.filter((s: any) => s.completed).length ?? 0;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="relative flex gap-4">
      {/* timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0 z-10">
          <span className="text-xs font-bold text-primary">{index + 1}</span>
        </div>
        <div className="w-px flex-1 bg-border mt-1 mb-0" />
      </div>

      <Card className="flex-1 mb-4 border-0 shadow-sm overflow-hidden">
        {/* Phase header */}
        <div className="flex items-start justify-between gap-4 p-4 pb-3">
          <div>
            <p className="font-semibold text-sm">{phase.name || `Phase ${index + 1}`}</p>
            {(phase.startDate || phase.endDate) && (
              <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatDate(phase.startDate)} → {formatDate(phase.endDate)}
              </p>
            )}
          </div>

          {/* Progress ring approximation */}
          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className={cn("text-xs font-semibold", pct === 100 ? "text-emerald-600 dark:text-emerald-400" : "text-primary")}>
              {pct}%
            </span>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">{done}/{total} tasks</span>
          </div>
        </div>

        {/* Progress bar */}
        {total > 0 && (
          <div className="px-4 pb-3">
            <Progress value={pct} className="h-1.5" />
          </div>
        )}

        {/* Subtasks */}
        {total > 0 && (
          <ul className="px-4 pb-4 space-y-1.5">
            {phase.subtasks.map((sub: any, si: number) => (
              <li key={sub._id ?? sub.id ?? si} className="group flex items-center gap-2.5 text-sm">
                <button
                  type="button"
                  onClick={() => onToggleSubtask(phase._id || phase.id, sub._id || sub.id, !sub.completed)}
                  className="flex items-center justify-center hover:bg-muted rounded-full p-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {sub.completed ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </button>
                <span className={cn("flex-1", sub.completed && "line-through text-muted-foreground")}>
                  {sub.title}
                </span>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button
                      type="button"
                      className="opacity-0 group-hover:opacity-100 p-1 text-muted-foreground hover:text-destructive transition-all focus:opacity-100 focus:outline-none"
                      title="Delete subtask"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete subtask?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This subtask will be permanently removed.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => onDeleteSubtask(phase._id || phase.id, sub._id || sub.id)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </li>
            ))}
          </ul>
        )}
        {total === 0 && (
          <p className="px-4 pb-4 text-xs text-muted-foreground italic">No subtasks yet.</p>
        )}
      </Card>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectDetails() {
  const { id } = useParams();
  const api = useApi();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const { data } = await api.get(`/task/${id}`);
        setProject(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProject();
  }, [id]);

  const handleDelete = async () => {
    try {
      const res = await api.delete(`/task/${id}`);
      if (res.status === 200) {
        toast({ title: "Project deleted!", description: `"${project?.title}" has been removed.` });
        navigate("/projects");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleSubtask = async (phaseId: string, subtaskId: string, completed: boolean) => {
    try {
      // Optimistic UI update
      setProject((prev: any) => {
        const newProject = structuredClone(prev); // deep clone
        const phase = newProject.phases.find((p: any) => (p._id || p.id) === phaseId);
        if (phase) {
          const subtask = phase.subtasks.find((s: any) => (s._id || s.id) === subtaskId);
          if (subtask) subtask.completed = completed;
        }
        return newProject;
      });
      // API call
      await api.put(`/task/${id}/phases/${phaseId}/subtasks/${subtaskId}`, { completed });
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Failed to update subtask.", variant: "destructive" });
    }
  };

  const handleDeleteSubtask = async (phaseId: string, subtaskId: string) => {
    try {
      // Optimistic update
      setProject((prev: any) => {
        const newProject = structuredClone(prev);
        const phase = newProject.phases.find((p: any) => (p._id || p.id) === phaseId);
        if (phase) {
          phase.subtasks = phase.subtasks.filter((s: any) => (s._id || s.id) !== subtaskId);
        }
        return newProject;
      });
      // API call
      await api.delete(`/task/${id}/phases/${phaseId}/subtasks/${subtaskId}`);
    } catch (err) {
      console.error(err);
      toast({ title: "Error", description: "Failed to delete subtask.", variant: "destructive" });
    }
  };

  // ── Derived stats ──────────────────────────────────────────────────────────
  const totalPhases = project?.phases?.length ?? 0;
  const allSubtasks = project?.phases?.flatMap((p: any) => p.subtasks ?? []) ?? [];
  const completedSubtasks = allSubtasks.filter((s: any) => s.completed).length;
  const totalSubtasks = allSubtasks.length;
  const overallPct = totalSubtasks === 0 ? 0 : Math.round((completedSubtasks / totalSubtasks) * 100);

  const priority = priorityConfig[project?.priority] ?? priorityConfig["medium"];
  const status = statusConfig[project?.status] ?? statusConfig["pending"];

  const tags: string[] = project?.tags
    ? typeof project.tags === "string"
      ? project.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
      : project.tags
    : [];

  // ── Loading skeleton ───────────────────────────────────────────────────────
  if (loading) {
    return (
      <DashboardLayout>
        <div className="max-w-3xl mx-auto space-y-4 animate-pulse">
          <div className="h-8 w-48 rounded-lg bg-muted" />
          <div className="h-32 rounded-2xl bg-muted" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => <div key={i} className="h-20 rounded-xl bg-muted" />)}
          </div>
          <div className="h-40 rounded-2xl bg-muted" />
        </div>
      </DashboardLayout>
    );
  }

  if (!project) {
    return (
      <DashboardLayout>
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4 mt-20 text-center">
          <AlertTriangle className="w-12 h-12 text-muted-foreground" />
          <p className="text-lg font-semibold">Project not found</p>
          <Button variant="outline" onClick={() => navigate("/projects")}>
            Back to Projects
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <DashboardLayout>
      <div className="mx-auto space-y-3">

        {/* ── Back button ── */}
        <Button variant="ghost" size="sm" className="gap-1.5 -ml-2 text-muted-foreground" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>

        {/* ── Hero Card ── */}
        <Card className="relative bg-primary/30 border-0 shadow-sm overflow-hidden">
          {/* Accent stripe */}
          <div className="p-6 pt-7 space-y-4">
            {/* Type + Status row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                <FolderKanban className="w-3.5 h-3.5" />
                {project.taskType?.charAt(0).toUpperCase() + project.taskType?.slice(1)}
              </span>
              <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full", status.class)}>
                {status.label}
              </span>
              <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full", priority.class)}>
                <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", priority.dot)} />
                <Flag className="w-3 h-3" />
                {priority.label}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
              {project.title}
            </h1>

            {/* Overall progress */}
            {totalSubtasks > 0 && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Overall progress</span>
                  <span className="font-semibold text-foreground">{overallPct}%</span>
                </div>
                <Progress value={overallPct} className="h-2" />
              </div>
            )}
          </div>
        </Card>

        {/* ── At-a-Glance Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {/* Due Date */}
          <Card className="border-0 shadow-sm p-4 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Due Date</p>
            <p className="text-sm font-semibold leading-tight">{formatDate(project.dueDate)}</p>
          </Card>

          {/* Priority */}
          <Card className="border-0 shadow-sm p-4 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center">
              <Flag className="w-4 h-4 text-orange-600 dark:text-orange-400" />
            </div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Priority</p>
            <p className="text-sm font-semibold capitalize leading-tight">{project.priority}</p>
          </Card>

          {/* Phases */}
          <Card className="border-0 shadow-sm p-4 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center">
              <Layers className="w-4 h-4 text-violet-600 dark:text-violet-400" />
            </div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Phases</p>
            <p className="text-sm font-semibold leading-tight">{totalPhases}</p>
          </Card>

          {/* Subtasks */}
          <Card className="border-0 shadow-sm p-4 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">Tasks Done</p>
            <p className="text-sm font-semibold leading-tight">{completedSubtasks}/{totalSubtasks}</p>
          </Card>
        </div>

        {/* ── Description ── */}
        {project.description && (
          <Card className="border-0 shadow-sm p-5 space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</h2>
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">{project.description}</p>
          </Card>
        )}

        {/* ── Tags ── */}
        {tags.length > 0 && (
          <Card className="border-0 shadow-sm p-5 space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5" /> Tags
            </h2>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="text-xs rounded-full px-3 py-0.5">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        )}

        {/* ── Phases & Subtasks ── */}
        {totalPhases > 0 && (
          <div className="space-y-1">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Phases & Subtasks
            </h2>
            {project.phases.map((phase: any, i: number) => (
              <PhaseCard 
                key={phase._id ?? phase.id ?? i} 
                phase={phase} 
                index={i} 
                onToggleSubtask={handleToggleSubtask}
                onDeleteSubtask={handleDeleteSubtask}
              />
            ))}
          </div>
        )}

        {/* ── Action Bar ── */}
        <div className="sticky bottom-0 pb-4 pt-2">
          <div className="border-0 rounded bg-primary p-3 flex items-center justify-between gap-3 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
            <p className="text-xs text-muted-foreground truncate hidden sm:block">
              Latest updated · <span className="font-medium text-foreground">{project.title}</span>
            </p>
            <div className="flex items-center gap-2 ml-auto">
              <Link to={`/edit-task/${id}`}>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Edit2 className="w-3.5 h-3.5" />
                  Edit
                </Button>
              </Link>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm" className="gap-1.5">
                    <Trash2 className="w-3.5 h-3.5" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete "{project.title}"?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This project will be permanently removed from the server.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDelete}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}
