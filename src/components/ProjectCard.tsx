import { Calendar, Users, DollarSign, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  status: "active" | "planning" | "completed" | "delayed"
  progress: number
  budget: string
  deadline: string
  teamSize: number
  priority: "high" | "medium" | "low"
}

export function ProjectCard({ 
  title, 
  status, 
  progress, 
  budget, 
  deadline, 
  teamSize, 
  priority 
}: ProjectCardProps) {
  const statusColors = {
    active: "bg-green-100 text-green-800",
    planning: "bg-blue-100 text-blue-800",
    completed: "bg-gray-100 text-gray-800",
    delayed: "bg-red-100 text-red-800"
  }

  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800"
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <div className="flex space-x-2">
            <Badge className={statusColors[status]}>
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            <Badge className={priorityColors[priority]}>
              {priority === "high" && <AlertTriangle className="w-3 h-3 mr-1" />}
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{budget}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{deadline}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-gray-600">{teamSize} members</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}