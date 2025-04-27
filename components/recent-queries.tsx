import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentQueries = [
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
  },
]

export function RecentQueries() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Recent Queries</h2>
        <Link href="/queries" className="text-primary hover:underline">
          View all
        </Link>
      </div>
      <div className="space-y-4">
        {recentQueries.map((query) => (
          <Card key={query.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">
                  <Link href={`/queries/${query.id}`} className="hover:text-primary transition-colors">
                    {query.title}
                  </Link>
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="mr-4">✓ {query.answers}</span>
                  <span>👁️ {query.views}</span>
                </div>
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
            <CardFooter className="pt-2 border-t">
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
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
