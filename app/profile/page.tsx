import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, MapPin, Briefcase, GraduationCap, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  // This would normally be fetched from an API
  const profile = {
    name: "Rahul Sharma",
    avatar: "https://in.images.search.yahoo.com/images/view;_ylt=AwrKDbb8CQ5oxIU.bSO9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzZiNzgyMmYwYTM2ZTUzZmIxN2NlY2Y1MzEwYjAyYWViBGdwb3MDNjQEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsome%2Brandom%2Bboy%2Bphotos%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D64&w=750&h=934&imgurl=i.pinimg.com%2Foriginals%2F66%2Fe4%2F1f%2F66e41f4092d56d6aa19ad41a7ba9de2e.jpg&rurl=https%3A%2F%2Fwww.pinterest.de%2Fpin%2F443112050835125424%2F&size=81KB&p=some+random+boy+photos&oid=6b7822f0a36e53fb17cecf5310b02aeb&fr2=piv-web&fr=mcafee&tt=Pin+on+Handsome+guys+Instagram&b=61&ni=21&no=64&ts=&tab=organic&sigr=x3EkNt6JwCA1&sigb=n.pq4kEFrqj4&sigi=YqIyHHGHW_qF&sigt=bXZbI8Z.1hIx&.crumb=tI0BBUOTUuG&fr=mcafee&fr2=piv-web&type=E210IN885G0",
    institution: "IIT Delhi",
    department: "Computer Science & Engineering",
    role: "PhD Candidate",
    location: "New Delhi, India",
    joinDate: "January 2022",
    bio: "Researching at the intersection of machine learning and healthcare. Passionate about developing AI solutions for medical diagnostics and personalized medicine. Looking to collaborate on projects related to medical imaging and biomedical signal processing.",
    interests: [
      "Machine Learning",
      "Healthcare AI",
      "Computer Vision",
      "Medical Imaging",
      "Biomedical Signal Processing",
    ],
    education: [
      {
        degree: "M.Tech in Computer Science",
        institution: "IIT Bombay",
        year: "2018-2020",
      },
      {
        degree: "B.Tech in Electronics Engineering",
        institution: "NIT Warangal",
        year: "2014-2018",
      },
    ],
    projects: [
      {
        id: 1,
        title: "AI-Powered Medical Imaging Diagnostics",
        description: "Deep learning models for early detection of diseases from medical images.",
        status: "In Progress",
        tags: ["Healthcare", "AI", "Computer Vision"],
      },
      {
        id: 2,
        title: "Biomedical Signal Processing Framework",
        description: "Open-source library for processing and analyzing ECG, EEG, and other biomedical signals.",
        status: "Completed",
        tags: ["Signal Processing", "Healthcare", "Open Source"],
      },
    ],
    queries: [
      {
        id: 1,
        title: "Best practices for deploying ML models in resource-constrained healthcare settings?",
        answers: 7,
        views: 215,
      },
      {
        id: 2,
        title: "Techniques for handling imbalanced datasets in medical diagnosis?",
        answers: 12,
        views: 342,
      },
    ],
    contributions: [
      {
        id: 1,
        title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
        type: "Project Contribution",
        project: "Healthcare Data Privacy Initiative",
      },
      {
        id: 2,
        title: "Optimizing CNN architectures for medical image segmentation",
        type: "Answer",
        query: "Efficient CNN architectures for medical imaging",
      },
    ],
    stats: {
      projects: 5,
      queries: 12,
      contributions: 28,
      followers: 87,
      following: 64,
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={profile.avatar || "/placeholder.svg"} alt={profile.name} />
                  <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">{profile.name}</h2>
                <p className="text-muted-foreground mb-4">{profile.role}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {profile.interests.slice(0, 3).map((interest) => (
                    <Badge key={interest} variant="secondary" className="font-normal">
                      {interest}
                    </Badge>
                  ))}
                  {profile.interests.length > 3 && (
                    <Badge variant="outline" className="font-normal">
                      +{profile.interests.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2 mb-6">
                  <Button>Follow</Button>
                  <Button variant="outline">
                    <Mail className="h-4 w-4 mr-2" /> Message
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.institution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined {profile.joinDate}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                <div>
                  <p className="font-bold">{profile.stats.projects}</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div>
                  <p className="font-bold">{profile.stats.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="font-bold">{profile.stats.following}</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.year}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>About</CardTitle>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{profile.bio}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {profile.interests.map((interest) => (
                  <Badge key={interest} variant="secondary" className="font-normal">
                    {interest}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="projects">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="queries">Queries</TabsTrigger>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-6">
              <div className="space-y-4">
                {profile.projects.map((project) => (
                  <Card key={project.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">
                          <Link href={`/projects/${project.id}`} className="hover:text-primary transition-colors">
                            {project.title}
                          </Link>
                        </CardTitle>
                        <Badge variant={project.status === "Completed" ? "outline" : "secondary"}>
                          {project.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="queries" className="mt-6">
              <div className="space-y-4">
                {profile.queries.map((query) => (
                  <Card key={query.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        <Link href={`/queries/${query.id}`} className="hover:text-primary transition-colors">
                          {query.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-4">✓ {query.answers} answers</span>
                        <span>👁️ {query.views} views</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="contributions" className="mt-6">
              <div className="space-y-4">
                {profile.contributions.map((contribution) => (
                  <Card key={contribution.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{contribution.title}</CardTitle>
                        <Badge variant="outline">{contribution.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Contributed to: {contribution.project || contribution.query}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
