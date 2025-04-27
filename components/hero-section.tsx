import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-b from-primary/10 to-background pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Connect, Collaborate, Innovate</h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          India's premier platform for students and educators to share ideas, solve problems, and build the future
          together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="text-lg">
            <Link href="/register">Join EduSphere</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-lg">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 h-20 bottom-0 top-auto"></div>
          <img
            src="/home.jpg"
            alt="EduSphere Platform"
            className="rounded-lg shadow-xl mx-auto"
          />
        </div>
      </div>
    </div>
  )
}