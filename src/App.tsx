import { Header } from "@/components/Header"
import { ProjectCard } from "@/components/ProjectCard"
import { StatsCard } from "@/components/StatsCard"
import { Building2, Users, Calendar, DollarSign, TrendingUp, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Downtown Office Complex",
    status: "active" as const,
    progress: 75,
    budget: "$2.5M",
    deadline: "Dec 2024",
    teamSize: 12,
    priority: "high" as const
  },
  {
    title: "Residential Tower A",
    status: "active" as const,
    progress: 45,
    budget: "$4.2M",
    deadline: "Mar 2025",
    teamSize: 18,
    priority: "medium" as const
  },
  {
    title: "Shopping Mall Renovation",
    status: "planning" as const,
    progress: 15,
    budget: "$1.8M",
    deadline: "Jun 2025",
    teamSize: 8,
    priority: "low" as const
  },
  {
    title: "Bridge Construction",
    status: "delayed" as const,
    progress: 30,
    budget: "$3.1M",
    deadline: "Feb 2025",
    teamSize: 15,
    priority: "high" as const
  }
]

const stats = [
  {
    title: "Active Projects",
    value: "24",
    change: "+12% from last month",
    changeType: "positive" as const,
    icon: Building2
  },
  {
    title: "Total Budget",
    value: "$18.2M",
    change: "+8% from last month",
    changeType: "positive" as const,
    icon: DollarSign
  },
  {
    title: "Team Members",
    value: "156",
    change: "+5 new hires",
    changeType: "positive" as const,
    icon: Users
  },
  {
    title: "On Schedule",
    value: "87%",
    change: "-3% from last month",
    changeType: "negative" as const,
    icon: Calendar
  }
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="p-6">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome to InfraCloud</h1>
            <p className="text-blue-100 text-lg mb-6">
              Comprehensive construction project management platform for teams, scheduling, budgets, and quality control
            </p>
            <div className="flex space-x-4">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Create New Project
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View Reports
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Active Projects</h2>
            <Button>View All Projects</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Building2 className="h-6 w-6" />
              <span>New Project</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Users className="h-6 w-6" />
              <span>Manage Teams</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <TrendingUp className="h-6 w-6" />
              <span>View Analytics</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <AlertTriangle className="h-6 w-6" />
              <span>Risk Assessment</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App