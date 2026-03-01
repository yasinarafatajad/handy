import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AddTask from "./pages/AddTask";
import Projects from "./pages/Projects";
import Learning from "./pages/Learning";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{v7_startTransition:true, v7_relativeSplatPath:true}}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/edit-task/:id" element={<AddTask />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learnings/:id" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;