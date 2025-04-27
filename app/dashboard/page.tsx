"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/context/auth-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Users, MessageSquare, Lightbulb, Calendar, FileText, Clock } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, status } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) return null

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <p className="text-muted-foreground">
          {user.role === "student" ? "Your student dashboard at EduSphere" : "Your faculty dashboard at EduSphere"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
            </div>
            <Button variant="link" className="p-0 h-auto mt-2" asChild>
              <Link href="/profile">Complete your profile</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Projects</span>
                </div>
                <Badge variant="secondary">5</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Queries</span>
                </div>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Connections</span>
                </div>
                <Badge variant="secondary">28</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="/projects/new">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  New Project
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="/edubot">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Ask Query
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="/smart-matching">
                  <Users className="mr-2 h-4 w-4" />
                  Find Peers
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="justify-start" asChild>
                <Link href="/edubot">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Ask EduBot
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {user.role === "student" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>Courses you're currently enrolled in</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced Machine Learning</p>
                      <p className="text-sm text-muted-foreground">Prof. Sharma • CSE Department</p>
                    </div>
                  </div>
                  <Badge>In Progress</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Data Structures & Algorithms</p>
                      <p className="text-sm text-muted-foreground">Dr. Gupta • CSE Department</p>
                    </div>
                  </div>
                  <Badge>In Progress</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Computer Networks</p>
                      <p className="text-sm text-muted-foreground">Prof. Kumar • ECE Department</p>
                    </div>
                  </div>
                  <Badge>In Progress</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Your upcoming project and assignment deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">ML Project Proposal</p>
                      <p className="text-sm text-muted-foreground">Advanced Machine Learning</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>2 days left</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Algorithm Assignment #3</p>
                      <p className="text-sm text-muted-foreground">Data Structures & Algorithms</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>5 days left</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Network Simulation Lab</p>
                      <p className="text-sm text-muted-foreground">Computer Networks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>1 week left</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>Courses you're currently teaching</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Advanced Machine Learning</p>
                      <p className="text-sm text-muted-foreground">CSE Department • 45 students</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Research Methods in AI</p>
                      <p className="text-sm text-muted-foreground">CSE Department • 22 students</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Deep Learning Seminar</p>
                      <p className="text-sm text-muted-foreground">CSE Department • 18 students</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Student Queries</CardTitle>
              <CardDescription>Recent questions from your students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://in.images.search.yahoo.com/images/view;_ylt=AwrKDbb8CQ5oxIU.bSO9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzZiNzgyMmYwYTM2ZTUzZmIxN2NlY2Y1MzEwYjAyYWViBGdwb3MDNjQEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dsome%2Brandom%2Bboy%2Bphotos%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D64&w=750&h=934&imgurl=i.pinimg.com%2Foriginals%2F66%2Fe4%2F1f%2F66e41f4092d56d6aa19ad41a7ba9de2e.jpg&rurl=https%3A%2F%2Fwww.pinterest.de%2Fpin%2F443112050835125424%2F&size=81KB&p=some+random+boy+photos&oid=6b7822f0a36e53fb17cecf5310b02aeb&fr2=piv-web&fr=mcafee&tt=Pin+on+Handsome+guys+Instagram&b=61&ni=21&no=64&ts=&tab=organic&sigr=x3EkNt6JwCA1&sigb=n.pq4kEFrqj4&sigi=YqIyHHGHW_qF&sigt=bXZbI8Z.1hIx&.crumb=tI0BBUOTUuG&fr=mcafee&fr2=piv-web&type=E210IN885G0" alt="Student" />
                    <AvatarFallback>RS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Rahul Sharma</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>2 hours ago</span>
                      </div>
                    </div>
                    <p className="text-sm">How do we handle imbalanced datasets in the ML project?</p>
                    <div className="mt-1 flex gap-2">
                      <Button variant="secondary" size="sm">
                        Reply
                      </Button>
                      <Button variant="outline" size="sm">
                        View Thread
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Student" />
                    <AvatarFallback>AP</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Ananya Patel</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>5 hours ago</span>
                      </div>
                    </div>
                    <p className="text-sm">Can you recommend additional resources for transformer architectures?</p>
                    <div className="mt-1 flex gap-2">
                      <Button variant="secondary" size="sm">
                        Reply
                      </Button>
                      <Button variant="outline" size="sm">
                        View Thread
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Research Supervision</CardTitle>
              <CardDescription>Students under your research supervision</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                    <AvatarFallback>VK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Vikram Kumar</p>
                    <p className="text-sm text-muted-foreground">PhD Candidate • Year 2</p>
                    <p className="text-sm mt-1">Research: "Deep Learning for Medical Imaging"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">Next Meeting: Tomorrow</Badge>
                      <Button variant="link" className="h-auto p-0">
                        View Progress
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                    <AvatarFallback>NS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Neha Singh</p>
                    <p className="text-sm text-muted-foreground">PhD Candidate • Year 3</p>
                    <p className="text-sm mt-1">Research: "Federated Learning for Healthcare"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">Next Meeting: Friday</Badge>
                      <Button variant="link" className="h-auto p-0">
                        View Progress
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Arjun Reddy</p>
                    <p className="text-sm text-muted-foreground">M.Tech • Final Year</p>
                    <p className="text-sm mt-1">Research: "NLP for Indian Languages"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">Next Meeting: Next Week</Badge>
                      <Button variant="link" className="h-auto p-0">
                        View Progress
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 border rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Student" />
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">Priya Mehta</p>
                    <p className="text-sm text-muted-foreground">M.Tech • First Year</p>
                    <p className="text-sm mt-1">Research: "Computer Vision for Agriculture"</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">Next Meeting: Monday</Badge>
                      <Button variant="link" className="h-auto p-0">
                        View Progress
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
