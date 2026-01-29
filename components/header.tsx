export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="text-xl font-bold text-foreground">RepliCode</span>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="/"
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-foreground/70 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
