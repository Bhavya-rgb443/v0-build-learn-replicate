import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutSection />
      </main>
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center text-black text-sm">
          © 2026 RepliCode
        </div>
      </footer>
    </div>
  )
}
