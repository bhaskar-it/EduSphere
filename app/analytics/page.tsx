"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ArrowRight, Share2 } from "lucide-react"

// --------- Data Section ---------
const users = [
  { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/1.jpg", projects: 250 },
  { name: "Jane Smith", avatar: "https://randomuser.me/api/portraits/women/1.jpg", projects: 820 },
  { name: "Alice Brown", avatar: "https://randomuser.me/api/portraits/women/2.jpg", projects: 430 },
  { name: "Bob Lee", avatar: "https://randomuser.me/api/portraits/men/2.jpg", projects: 95 },
  { name: "Emily White", avatar: "https://randomuser.me/api/portraits/women/3.jpg", projects: 670 },
  { name: "Michael Green", avatar: "https://randomuser.me/api/portraits/men/3.jpg", projects: 310 },
  { name: "Sophia Black", avatar: "https://randomuser.me/api/portraits/women/4.jpg", projects: 520 },
  { name: "Daniel Harris", avatar: "https://randomuser.me/api/portraits/men/4.jpg", projects: 980 },
  { name: "Olivia Blue", avatar: "https://randomuser.me/api/portraits/women/5.jpg", projects: 400 },
  { name: "Liam King", avatar: "https://randomuser.me/api/portraits/men/5.jpg", projects: 60 },
]

// --------- Component Section ---------
export default function LeaderboardPage() {
  const sortedUsers = [...users].sort((a, b) => b.projects - a.projects)

  return (
    <main className="min-h-screen flex items-center justify-center bg-muted/50 px-6 py-10">
      <section className="flex flex-col items-center justify-center w-full max-w-7xl gap-10">
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
          <p className="text-lg text-muted-foreground">
            See the ranking based on the number of completed projects.
          </p>
        </div>

        {/* Table */}
        <div id="vijay" className="w-full bg-white rounded-lg shadow-lg overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-muted">
              <tr className="text-left text-muted-foreground text-sm">
                <th className="px-6 py-4">Rank</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Projects</th>
                <th className="px-6 py-4"></th> {/* Action column */}
              </tr>
            </thead>
            <tbody>
              {sortedUsers.map((user, index) => (
                <tr key={index} className="border-t hover:bg-muted/25">
                  <td className="px-6 py-4 font-semibold">{index + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="font-semibold">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold">{user.projects}</td>
                  <td className="px-6 py-4 text-right">
                    <Button size="icon" variant="outline">
                      {index === 5 ? <ArrowRight className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
