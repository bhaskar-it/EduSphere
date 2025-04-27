import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const trendingProjects = [
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
  },
]

export function TrendingProjects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Trending Projects</h2>
        <Link href="/projects" className="text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {trendingProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                    {project.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-4">❤️ {project.likes}</span>
                  <span>💬 {project.comments}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-muted-foreground text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2 border-t">
              <Link href={`/profile/${project.author.name}`} className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                  <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <span className="font-medium">{project.author.name}</span>
                  <span className="text-muted-foreground ml-2">({project.author.institution})</span>
                </div>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
