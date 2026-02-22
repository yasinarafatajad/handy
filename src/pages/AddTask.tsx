import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Trash2, ArrowLeft, GripVertical } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const emptyPhase = () => ({
  id: crypto.randomUUID(),
  name: "",
  startDate: "",
  endDate: "",
  subtasks: [{ id: crypto.randomUUID(), title: "", completed: false }],
});

export default function AddTask() {
  const navigate = useNavigate();
  const [taskType, setTaskType] = useState("project");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("pending");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState("");
  const [phases, setPhases] = useState([emptyPhase()]);

  const addPhase = () => setPhases([...phases, emptyPhase()]);

  const removePhase = (phaseId) => {
    if (phases.length <= 1) return;
    setPhases(phases.filter((p) => p.id !== phaseId));
  };

  const updatePhase = (phaseId, field, value) => {
    setPhases(phases.map((p) => (p.id === phaseId ? { ...p, [field]: value } : p)));
  };

  const addSubtask = (phaseId) => {
    setPhases(
      phases.map((p) =>
        p.id === phaseId
          ? { ...p, subtasks: [...p.subtasks, { id: crypto.randomUUID(), title: "", completed: false }] }
          : p
      )
    );
  };

  const removeSubtask = (phaseId, subtaskId) => {
    setPhases(
      phases.map((p) =>
        p.id === phaseId ? { ...p, subtasks: p.subtasks.filter((s) => s.id !== subtaskId) } : p
      )
    );
  };

  const updateSubtask = (phaseId, subtaskId, field, value) => {
    setPhases(
      phases.map((p) =>
        p.id === phaseId
          ? {
              ...p,
              subtasks: p.subtasks.map((s) => (s.id === subtaskId ? { ...s, [field]: value } : s)),
            }
          : p
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Task created!", description: `"${title}" has been added as a ${taskType} task.` });
    navigate("/");
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Add New Task</h1>
            <p className="text-sm text-muted-foreground">Create a project task or learning task</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Task Type Tabs */}
          <Tabs value={taskType} onValueChange={setTaskType}>
            <TabsList className="w-full">
              <TabsTrigger value="project" className="flex-1">Project Task</TabsTrigger>
              <TabsTrigger value="learning" className="flex-1">Learning Task</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Basic Info */}
          <Card className="p-5 border-0 shadow-sm space-y-4">
            <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Basic Info</h3>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter task title..." value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" placeholder="Describe the task..." value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Priority</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="due">Due Date</Label>
                <Input id="due" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input id="tags" placeholder="e.g. frontend, urgent" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
          </Card>

          {/* Phases & Subtasks */}
          <Card className="p-5 border-0 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                Phases & Subtasks
              </h3>
              <Button type="button" variant="outline" size="sm" onClick={addPhase} className="gap-1.5">
                <Plus className="w-3.5 h-3.5" /> Add Phase
              </Button>
            </div>

            <div className="space-y-4">
              {phases.map((phase, phaseIndex) => (
                <div key={phase.id} className="rounded-xl border border-border p-4 space-y-3 bg-muted/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GripVertical className="w-4 h-4 text-muted-foreground" />
                      <Badge variant="secondary" className="text-xs">Phase {phaseIndex + 1}</Badge>
                    </div>
                    {phases.length > 1 && (
                      <Button type="button" variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive" onClick={() => removePhase(phase.id)}>
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    )}
                  </div>

                  <Input
                    placeholder="Phase name (e.g. Research, Design, Build...)"
                    value={phase.name}
                    onChange={(e) => updatePhase(phase.id, "name", e.target.value)}
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Start Date</Label>
                      <Input type="date" value={phase.startDate} onChange={(e) => updatePhase(phase.id, "startDate", e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">End Date</Label>
                      <Input type="date" value={phase.endDate} onChange={(e) => updatePhase(phase.id, "endDate", e.target.value)} />
                    </div>
                  </div>

                  {/* Subtasks */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-muted-foreground">Subtasks</p>
                      <Button type="button" variant="ghost" size="sm" onClick={() => addSubtask(phase.id)} className="h-7 text-xs gap-1">
                        <Plus className="w-3 h-3" /> Add
                      </Button>
                    </div>
                    {phase.subtasks.map((sub) => (
                      <div key={sub.id} className="flex items-center gap-2">
                        <Checkbox
                          checked={sub.completed}
                          onCheckedChange={(v) => updateSubtask(phase.id, sub.id, "completed", !!v)}
                        />
                        <Input
                          placeholder="Subtask title..."
                          value={sub.title}
                          onChange={(e) => updateSubtask(phase.id, sub.id, "title", e.target.value)}
                          className="flex-1 h-8 text-sm"
                        />
                        <Button type="button" variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-destructive shrink-0" onClick={() => removeSubtask(phase.id, sub.id)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Submit */}
          <div className="flex items-center gap-3 justify-end">
            <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
            <Button type="submit">Create {taskType === "project" ? "Project" : "Learning"} Task</Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}