import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TrendingProjects } from "@/components/trending-projects"
import { RecentQueries } from "@/components/recent-queries"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <TrendingProjects />
        <RecentQueries />
      </div>
      <Footer />
    </div>
  )
}
