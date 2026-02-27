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
} from "@/components/ui/table"



const Projects = () => {
  const api = useApi()
  const [projects, setProjects] = useState([])
  // get projects
  const fetchProjects = async () => {
    const { data } = await api.get('/getAllTasks?taskType=project');
    setProjects(data)
  }
  useEffect(() => {
    fetchProjects()
  }, [])
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
        {projects?.reverse().map((e, i) => (
          <TableBody key={i}>
            <TableRow>
              <TableCell className="font-medium">{i + 1}</TableCell>
              <TableCell>{e?.title}</TableCell>
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
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </DashboardLayout>
  )
}
export default Projects