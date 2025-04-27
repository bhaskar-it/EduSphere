import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Share2, Users, BookmarkPlus, Calendar, FileText, Link2 } from "lucide-react"

export default function ProjectPage({ params }: { params: { id: string } }) {
  // This would normally be fetched from an API
  const project = {
    id: params.id,
    title: "Smart Agriculture IoT System",
    description: "A low-cost IoT solution for small farmers to monitor soil health and automate irrigation.",
    longDescription:
      "This project aims to develop an affordable IoT-based system that helps small-scale farmers in rural India monitor soil health, weather conditions, and automate irrigation. The system uses low-cost sensors, solar power, and can work with limited connectivity. Our goal is to increase crop yields while reducing water usage and labor costs for farmers with limited resources.",
    author: {
      name: "Priya Patel",
      institution: "IIT Kharagpur",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Project Lead",
    },
    collaborators: [
      {
        name: "Arjun Kumar",
        institution: "IIIT Hyderabad",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Hardware Engineer",
      },
      {
        name: "Neha Singh",
        institution: "Delhi University",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "Software Developer",
      },
    ],
    tags: ["IoT", "Agriculture", "Sustainability", "Embedded Systems", "Solar Power"],
    likes: 245,
    comments: 32,
    views: 1289,
    status: "In Progress",
    progress: 65,
    startDate: "March 15, 2024",
    estimatedCompletion: "September 30, 2024",
    resources: [
      { name: "Project Proposal", type: "PDF", url: "#" },
      { name: "System Architecture", type: "Image", url: "#" },
      { name: "Sensor Specifications", type: "Spreadsheet", url: "#" },
      { name: "Code Repository", type: "GitHub", url: "#" },
    ],
    updates: [
      {
        date: "April 10, 2024",
        title: "Prototype Completed",
        content:
          "We've completed the first working prototype of our soil moisture and temperature sensors. Initial tests show promising results with good accuracy compared to commercial sensors.",
      },
      {
        date: "March 25, 2024",
        title: "Component Selection Finalized",
        content:
          "After evaluating various options, we've finalized the components for our system, focusing on low cost, durability, and energy efficiency.",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Link href="/projects" className="hover:text-foreground">
                Projects
              </Link>
              <span>/</span>
              <span>{project.title}</span>
            </div>
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="font-normal">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Heart className="mr-1 h-4 w-4" /> Like
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="mr-1 h-4 w-4" /> Save
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-1 h-4 w-4" /> Share
            </Button>
            <Button size="sm">
              <Users className="mr-1 h-4 w-4" /> Collaborate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About this Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.longDescription}</p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Started</p>
                      <p className="text-sm text-muted-foreground">{project.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Estimated Completion</p>
                      <p className="text-sm text-muted-foreground">{project.estimatedCompletion}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="updates">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="updates">Updates</TabsTrigger>
                <TabsTrigger value="discussions">Discussions</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              <TabsContent value="updates" className="space-y-4 mt-4">
                {project.updates.map((update, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <CardTitle className="text-lg">{update.title}</CardTitle>
                        <span className="text-sm text-muted-foreground">{update.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{update.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="discussions">
                <div className="py-8 text-center text-muted-foreground">
                  No discussions yet. Start a new discussion!
                </div>
              </TabsContent>
              <TabsContent value="resources" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.resources.map((resource, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{resource.name}</p>
                          <p className="text-sm text-muted-foreground">{resource.type}</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={resource.url}>
                            <Link2 className="h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm">Status</span>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm">Views</span>
                    <span className="text-sm font-medium">{project.views}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="text-sm">Likes</span>
                    <span className="text-sm font-medium">{project.likes}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm">Comments</span>
                    <span className="text-sm font-medium">{project.comments}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Team</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                    <AvatarFallback>{project.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{project.author.name}</p>
                    <p className="text-sm text-muted-foreground">{project.author.role}</p>
                    <p className="text-xs text-muted-foreground">{project.author.institution}</p>
                  </div>
                </div>
                {project.collaborators.map((collaborator, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={collaborator.avatar || "/placeholder.svg"} alt={collaborator.name} />
                      <AvatarFallback>{collaborator.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{collaborator.name}</p>
                      <p className="text-sm text-muted-foreground">{collaborator.role}</p>
                      <p className="text-xs text-muted-foreground">{collaborator.institution}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
