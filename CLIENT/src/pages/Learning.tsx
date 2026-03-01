import DashboardLayout from "@/components/layout/DashboardLayout";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";
import { MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Link } from "react-router-dom";

export default function Learning() {
  const api = useApi()
  const [projects, setProjects] = useState([])
  // get projects
  const fetchProjects = async () => {
    const { data } = await api.get('/getAllTasks?taskType=learning');
    setProjects(data)
  }
  useEffect(() => {
    fetchProjects()
  }, [])

  // handle delete task
  const handleTaskDelete = async (e) => {
    try {
      const res = await api.delete(`/task/${e?._id}`);
      if (res.status === 200) return fetchProjects();
    } catch (err) {
      console.log(err.message);
    } finally {
      toast({ title: `${e?.taskType} deleted!`, description: `${e?.title} has been deleted.` })
    }
  }
  return (
    <DashboardLayout>
          <Table>
            {/* table header */}
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            {/* table body */}
            <TableBody>
              {[...projects]?.reverse().map((e, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>
                    <Link to={`/learnings/${e?._id}`} className="font-medium hover:text-primary hover:underline underline-offset-4 transition-colors">
                      {e?.title}
                    </Link>
                  </TableCell>
                  <TableCell>{e?.dueDate}</TableCell>
                  <TableCell>{e?.status}</TableCell>
                  <TableCell>{e?.priority}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
    
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <Link to={`/edit-task/${e?._id}`} >
                          <DropdownMenuItem>
                            Edit
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </AlertDialogTrigger>
    
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete {e?.title}?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete from our server.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleTaskDelete(e)} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    
    
        </DashboardLayout>
  )
}