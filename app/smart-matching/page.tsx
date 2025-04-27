"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

// --------- Data Section ---------
const suggestedProfiles = [
  
  {
    name: "Ananya Kumar",
    interest: "Machine Learning",
    subdomain: "AI in Healthcare",
    relatedDomain: "Healthcare",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg", // New profile with image URL
  },
  {
    name: "Rajesh Singh",
    interest: "Machine Learning",
    subdomain: "Predictive Analytics",
    relatedDomain: "Business Intelligence",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg", // New profile with image URL
  },
  {
    name: "Tara Verma",
    interest: "Machine Learning",
    subdomain: "AI in Finance",
    relatedDomain: "FinTech",
    avatar: "https://randomuser.me/api/portraits/women/8.jpg", // New profile with image URL
  },
  {
    name: "Vikram Reddy",
    interest: "Machine Learning",
    subdomain: "Autonomous Vehicles",
    relatedDomain: "Transportation",
    avatar: "https://randomuser.me/api/portraits/men/9.jpg", // New profile with image URL
  },
  {
    name: "Leena Joshi",
    interest: "Machine Learning",
    subdomain: "Healthcare Analytics",
    relatedDomain: "Data Science",
    avatar: "https://randomuser.me/api/portraits/women/9.jpg", // New profile with image URL
  },
  {
    name: "Imran Ali",
    interest: "Machine Learning",
    subdomain: "AI for Cybersecurity",
    relatedDomain: "Cybersecurity",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg", // New profile with image URL
  },{
    name: "Aarav Sharma",
    interest: "Machine Learning",
    subdomain: "Natural Language Processing",
    relatedDomain: "Data Science",
    avatar: "/avatars/aarav.jpg", // Replace with actual image URL
  },
  {
    name: "Diya Patel",
    interest: "Machine Learning",
    subdomain: "Computer Vision",
    relatedDomain: "Artificial Intelligence",
    avatar: "/avatars/diya.jpg", // Replace with actual image URL
  },
  {
    name: "Kabir Mehta",
    interest: "Machine Learning",
    subdomain: "Deep Learning",
    relatedDomain: "Neural Networks",
    avatar: "/avatars/kabir.jpg", // Replace with actual image URL
  },
  {
    name: "Sara Iyer",
    interest: "Machine Learning",
    subdomain: "Reinforcement Learning",
    relatedDomain: "Robotics",
    avatar: "/avatars/sara.jpg", // Replace with actual image URL
  }
]

// --------- Component Section ---------
export default function SmartMatchingPage() {
  return (
    <div className="min-h-screen bg-muted/50 py-16 px-6 flex flex-col items-center">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Smart Matching</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          We've found students and mentors who share your project interests in Machine Learning. Connect and collaborate to build something amazing!
        </p>
      </div>

      {/* Suggested Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {suggestedProfiles.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  )
}

// --------- Sub-component Section ---------
type Profile = {
  name: string
  interest: string
  subdomain: string
  relatedDomain: string
  avatar: string
}

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center">
        <Avatar className="w-20 h-20 mb-4">
          <AvatarImage src={profile.avatar} alt={profile.name} />
          <AvatarFallback>{profile.name[0]}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-center">{profile.name}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground mb-2">{profile.interest}</p>
        <p className="text-sm text-muted-foreground mb-2">{profile.subdomain}</p>
        <p className="text-sm text-muted-foreground mb-4">{profile.relatedDomain}</p>
        <Button variant="default">View Profile</Button>
      </CardContent>
    </Card>
  )
}
