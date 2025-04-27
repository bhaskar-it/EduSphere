import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Smart Agriculture IoT System",
    description: "A low-cost IoT solution for small farmers to monitor soil health and automate irrigation.",
    author: {
      name: "Priya Patel",
      institution: "IIT Kharagpur",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["IoT", "Agriculture", "Sustainability"],
    likes: 245,
    comments: 32,
    status: "In Progress",
  },
  {
    id: 2,
    title: "Indian Language NLP Framework",
    description: "Open-source NLP tools for processing and analyzing text in 10+ Indian languages.",
    author: {
      name: "Arjun Kumar",
      institution: "IIIT Hyderabad",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["NLP", "Machine Learning", "Languages"],
    likes: 189,
    comments: 27,
    status: "Completed",
  },
  {
    id: 3,
    title: "Accessible Learning Platform",
    description:
      "Educational platform designed for students with disabilities, featuring voice navigation and screen reader optimization.",
    author: {
      name: "Neha Singh",
      institution: "Delhi University",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Accessibility", "Education", "Web Development"],
    likes: 156,
    comments: 19,
    status: "Seeking Collaborators",
  },
  {
    id: 4,
    title: "Renewable Energy Microgrid",
    description:
      "Design and implementation of a solar-powered microgrid for rural communities with limited electricity access.",
    author: {
      name: "Vikram Mehta",
      institution: "IIT Bombay",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Renewable Energy", "Electrical Engineering", "Rural Development"],
    likes: 132,
    comments: 24,
    status: "In Progress",
  },
  {
    id: 5,
    title: "Traditional Craft Preservation App",
    description:
      "Mobile application documenting and preserving traditional Indian crafts through AR experiences and artisan stories.",
    author: {
      name: "Ananya Reddy",
      institution: "CEPT University",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Cultural Heritage", "AR/VR", "Mobile Development"],
    likes: 98,
    comments: 15,
    status: "Seeking Collaborators",
  },
  {
    id: 6,
    title: "Quantum Computing Education Toolkit",
    description:
      "Educational resources and interactive simulations to teach quantum computing concepts to undergraduate students.",
    author: {
      name: "Raj Malhotra",
      institution: "ISI Kolkata",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Quantum Computing", "Education", "Simulation"],
    likes: 87,
    comments: 11,
    status: "Completed",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted-foreground">Discover and collaborate on innovative academic projects</p>
        </div>
        <Button asChild>
          <Link href="/projects/new">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search projects..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="collaborating">Collaborating</TabsTrigger>
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                        {project.title}
                      </Link>
                    </CardTitle>
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "outline"
                          : project.status === "In Progress"
                            ? "secondary"
                            : "default"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t flex justify-between items-center">
                  <Link href={`/profile/${project.author.name}`} className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                      <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{project.author.name}</span>
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-4">❤️ {project.likes}</span>
                    <span>💬 {project.comments}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="trending">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view projects</div>
        </TabsContent>
        <TabsContent value="recent">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view projects</div>
        </TabsContent>
        <TabsContent value="collaborating">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view projects</div>
        </TabsContent>
        <TabsContent value="my-projects">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view projects</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
