import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, MessageSquarePlus } from "lucide-react"
import Link from "next/link"

const queries = [
  {
    id: 1,
    title: "How to implement federated learning for privacy-preserving ML?",
    author: {
      name: "Vikram Mehta",
      institution: "IIT Bombay",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Machine Learning", "Privacy", "Algorithms"],
    answers: 8,
    views: 342,
    timestamp: "2 days ago",
  },
  {
    id: 2,
    title: "Best practices for sustainable architecture in tropical climates?",
    author: {
      name: "Ananya Reddy",
      institution: "CEPT University",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Architecture", "Sustainability", "Climate"],
    answers: 12,
    views: 287,
    timestamp: "5 days ago",
  },
  {
    id: 3,
    title: "Resources for studying quantum computing applications in cryptography?",
    author: {
      name: "Raj Malhotra",
      institution: "ISI Kolkata",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Quantum Computing", "Cryptography", "Resources"],
    answers: 5,
    views: 198,
    timestamp: "1 week ago",
  },
  {
    id: 4,
    title: "How to optimize deep learning models for deployment on edge devices?",
    author: {
      name: "Priya Patel",
      institution: "IIT Kharagpur",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Deep Learning", "Edge Computing", "Optimization"],
    answers: 7,
    views: 231,
    timestamp: "3 days ago",
  },
  {
    id: 5,
    title: "Effective methods for teaching programming to non-CS students?",
    author: {
      name: "Arjun Kumar",
      institution: "IIIT Hyderabad",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Education", "Programming", "Teaching Methods"],
    answers: 15,
    views: 412,
    timestamp: "4 days ago",
  },
  {
    id: 6,
    title: "Challenges in implementing blockchain for supply chain transparency?",
    author: {
      name: "Neha Singh",
      institution: "Delhi University",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    tags: ["Blockchain", "Supply Chain", "Transparency"],
    answers: 9,
    views: 267,
    timestamp: "6 days ago",
  },
]

export default function QueriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Academic Queries</h1>
          <p className="text-muted-foreground">Ask questions and get answers from the academic community</p>
        </div>
        <Button asChild>
          <Link href="/edubot ">
            <MessageSquarePlus className="mr-2 h-4 w-4" /> Ask a Question
          </Link>
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search queries..." className="pl-10" />
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All Questions</TabsTrigger>
          <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="my-questions">My Questions</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="space-y-4">
            {queries.map((query) => (
              <Card key={query.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      <Link href={`/queries/${query.id}`} className="hover:text-primary transition-colors">
                        {query.title}
                      </Link>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">{query.timestamp}</div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex flex-wrap gap-2 mt-1">
                    {query.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2 border-t flex justify-between items-center">
                  <Link href={`/profile/${query.author.name}`} className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={query.author.avatar || "/placeholder.svg"} alt={query.author.name} />
                      <AvatarFallback>{query.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <span className="font-medium">{query.author.name}</span>
                      <span className="text-muted-foreground ml-2">({query.author.institution})</span>
                    </div>
                  </Link>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span className="mr-4">✓ {query.answers} answers</span>
                    <span>👁️ {query.views} views</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="unanswered">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view queries</div>
        </TabsContent>
        <TabsContent value="trending">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view queries</div>
        </TabsContent>
        <TabsContent value="my-questions">
          <div className="py-8 text-center text-muted-foreground">Select a different tab to view queries</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
