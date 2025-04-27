import Link from "next/link"
import { Brain, Users, Tag, BarChart3, Compass, Globe, Network, Shield, Trophy } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  
  {
    icon: Brain,
    title: "EduBot AI Assistant",
    description: "Get instant answers to academic queries using our advanced NLP-powered assistant.",
    link: "/edubot",  // <-- Add link path
  },
  
  {
    icon: Tag,
    title: "Auto-tagging",
    description: "NLP automatically tags, summarizes, and suggests related content for your projects.",
    link: "/auto-tagging",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboards",
    description: "Track student activity, project engagement, and academic performance.",
    link: "/analytics",
  },
  {
    icon: Compass,
    title: "Personalized Paths",
    description: "Discover content and collaborators based on your unique interests and goals.",
    link: "/personalized-paths",
  },
  {
    icon: Globe,
    title: "Inclusive Access",
    description: "Support for multiple Indian languages and voice input for accessibility.",
    link: "/inclusive-access",
  },
  {
    icon: Network,
    title: "Knowledge Graph",
    description: "Intelligent connections between users, topics, and resources.",
    link: "/knowledge-graph",
  },
  {
    icon: Shield,
    title: "Plagiarism Check",
    description: "Ensure content originality and maintain academic credibility.",
    link: "/plagiarism-check",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Earn badges, points, and recognition for your contributions and collaborations.",
    link: "/gamification",
  },
]

export function FeatureSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powered by AI, Built for Collaboration</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            EduSphere combines cutting-edge technology with academic expertise to create a seamless collaboration
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link href={feature.link} key={index} className="block">
              <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader className="pb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
