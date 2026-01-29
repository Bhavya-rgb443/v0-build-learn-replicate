import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-black text-sm">
          © 2026 RepliCode
        </div>
      </footer>
    </div>
  )
}
