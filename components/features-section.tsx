import { Settings as LucideSettings } from "lucide-react"

function SettingsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="settingsGradient" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: "#D946EF", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#A855F7", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#7C3AED", stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      
      {/* Main central gear circle */}
      <circle cx="32" cy="32" r="10" fill="url(#settingsGradient)" />
      
      {/* Central hole */}
      <circle cx="32" cy="32" r="5" fill="#000000" />
      
      {/* 12 gear teeth around the center - solid violet */}
      <g fill="#D946EF">
        {/* Top */}
        <rect x="30" y="12" width="4" height="5" rx="1" />
        {/* Top-right diagonal */}
        <rect x="38" y="16" width="3.5" height="5" rx="1" transform="rotate(30 39.75 18.5)" />
        {/* Right-top diagonal */}
        <rect x="44" y="24" width="5" height="3.5" rx="1" transform="rotate(60 46.5 25.75)" />
        {/* Right */}
        <rect x="47" y="30" width="5" height="4" rx="1" />
        {/* Right-bottom diagonal */}
        <rect x="44" y="38" width="5" height="3.5" rx="1" transform="rotate(-60 46.5 39.75)" />
        {/* Bottom-right diagonal */}
        <rect x="38" y="43" width="3.5" height="5" rx="1" transform="rotate(-30 39.75 45.5)" />
        {/* Bottom */}
        <rect x="30" y="47" width="4" height="5" rx="1" />
        {/* Bottom-left diagonal */}
        <rect x="22" y="43" width="3.5" height="5" rx="1" transform="rotate(30 23.75 45.5)" />
        {/* Left-bottom diagonal */}
        <rect x="15" y="38" width="5" height="3.5" rx="1" transform="rotate(60 17.5 39.75)" />
        {/* Left */}
        <rect x="12" y="30" width="5" height="4" rx="1" />
        {/* Left-top diagonal */}
        <rect x="15" y="24" width="5" height="3.5" rx="1" transform="rotate(-60 17.5 25.75)" />
        {/* Top-left diagonal */}
        <rect x="22" y="16" width="3.5" height="5" rx="1" transform="rotate(-30 23.75 18.5)" />
      </g>
      
      {/* Highlight for 3D effect */}
      <ellipse cx="28" cy="28" rx="3" ry="3.5" fill="#FFFFFF" opacity="0.3" />
    </svg>
  )
}

function SystemIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Deep 3D bezel gradient */}
        <linearGradient id="bezel3D" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#D1D5DB", stopOpacity: 1 }} />
          <stop offset="25%" style={{ stopColor: "#9CA3AF", stopOpacity: 1 }} />
          <stop offset="75%" style={{ stopColor: "#6B7280", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#374151", stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Screen with depth */}
        <linearGradient id="screen3D" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#F0F9FF", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#E0F7FF", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ADD8E6", stopOpacity: 1 }} />
        </linearGradient>
        
        {/* Keyboard with perspective */}
        <linearGradient id="keyboard3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#A3A9B3", stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: "#8B939F", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6B7280", stopOpacity: 1 }} />
        </linearGradient>
        
        {/* 3D shadow filter */}
        <filter id="shadow3D">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.4" />
        </filter>
      </defs>
      
      {/* Deep background shadow */}
      <ellipse cx="32" cy="52" rx="26" ry="4" fill="#000000" opacity="0.15" />
      
      {/* Monitor bezel with strong 3D effect */}
      <rect x="8" y="4" width="48" height="34" rx="4" fill="url(#bezel3D)" filter="url(#shadow3D)" />
      
      {/* Recessed bezel border - inset effect */}
      <rect x="8" y="4" width="48" height="34" rx="4" fill="none" stroke="#E5E7EB" strokeWidth="1" opacity="0.6" />
      <rect x="10" y="6" width="44" height="30" rx="3" fill="none" stroke="#1F2937" strokeWidth="0.5" opacity="0.4" />
      
      {/* Monitor screen with depth */}
      <rect x="12" y="8" width="40" height="26" rx="2" fill="url(#screen3D)" />
      
      {/* Screen bright reflection - glossy top */}
      <rect x="12" y="8" width="40" height="8" rx="2" fill="#FFFFFF" opacity="0.35" />
      
      {/* Screen inner depth shadow */}
      <rect x="12" y="28" width="40" height="6" fill="#1F2937" opacity="0.08" rx="2" />
      
      {/* Monitor stand - 3D tapered */}
      <path d="M 26 38 L 28 42 Q 32 45 32 45 Q 36 45 36 42 L 38 38" fill="url(#bezel3D)" />
      <path d="M 26 38 L 28 42 Q 32 45 32 45 Q 36 45 36 42 L 38 38" fill="none" stroke="#1F2937" strokeWidth="0.5" opacity="0.3" />
      
      {/* Stand shadow projection */}
      <ellipse cx="32" cy="46" rx="7" ry="2" fill="#000000" opacity="0.2" />
      
      {/* Keyboard base with perspective */}
      <rect x="8" y="50" width="48" height="12" rx="4" fill="url(#keyboard3D)" />
      
      {/* Keyboard top edge highlight - metallic */}
      <rect x="8" y="50" width="48" height="4" rx="4" fill="#D1D5DB" opacity="0.4" />
      
      {/* Keyboard recessed edge */}
      <rect x="8" y="50" width="48" height="12" rx="4" fill="none" stroke="#1F2937" strokeWidth="0.5" opacity="0.3" />
      
      {/* Individual 3D keyboard keys */}
      <g>
        <rect x="12" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="12" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="16" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="16" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="20" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="20" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="24" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="24" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="28" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="28" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="32" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="32" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="36" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="36" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="40" y="56" width="2.8" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="40" y="56" width="2.8" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
        
        <rect x="44" y="56" width="4" height="3" rx="0.3" fill="#B0D4E3" />
        <rect x="44" y="56" width="4" height="1" fill="#FFFFFF" opacity="0.3" rx="0.3" />
      </g>
      
      {/* Trackpad with depth */}
      <rect x="18" y="60" width="28" height="1.5" fill="#7B8A9E" rx="0.8" />
      <rect x="18" y="60" width="28" height="0.5" fill="#FFFFFF" opacity="0.3" rx="0.8" />
    </svg>
  )
}

function BulbIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient for realistic bulb glass */}
        <radialGradient id="bulbGlass" cx="40%" cy="40%">
          <stop offset="0%" style={{ stopColor: "#FFF8DC", stopOpacity: 1 }} />
          <stop offset="40%" style={{ stopColor: "#FFE082", stopOpacity: 1 }} />
          <stop offset="80%" style={{ stopColor: "#FFA500", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#FF8C00", stopOpacity: 0.6 }} />
        </radialGradient>
        
        {/* Glow effect */}
        <filter id="bulbGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer glow */}
      <circle cx="32" cy="22" r="17.5" fill="#FFD700" opacity="0.2" />
      
      {/* Main bulb glass */}
      <circle cx="32" cy="22" r="16" fill="url(#bulbGlass)" />
      
      {/* Bulb outline for definition */}
      <circle cx="32" cy="22" r="16" fill="none" stroke="#CC8800" strokeWidth="0.5" opacity="0.5" />
      
      {/* Glass reflection - top left */}
      <ellipse cx="27" cy="14" rx="5" ry="7" fill="#FFFFFF" opacity="0.6" />
      
      {/* Inner bright spot */}
      <circle cx="28" cy="15" r="2.5" fill="#FFFFFF" opacity="0.8" />
      
      {/* Filament - realistic coil shape */}
      <path d="M 30 25 Q 28 22 32 20 Q 36 22 34 25 Q 32 27 32 30" 
            stroke="#FF6B00" strokeWidth="1.5" fill="none" opacity="0.9" strokeLinecap="round" />
      
      {/* Filament glow */}
      <path d="M 30 25 Q 28 22 32 20 Q 36 22 34 25 Q 32 27 32 30" 
            stroke="#FFA500" strokeWidth="3" fill="none" opacity="0.3" strokeLinecap="round" filter="url(#bulbGlow)" />
      
      {/* Filament support lines */}
      <line x1="32" y1="30" x2="30" y2="35" stroke="#CC8800" strokeWidth="1" opacity="0.6" />
      <line x1="32" y1="30" x2="34" y2="35" stroke="#CC8800" strokeWidth="1" opacity="0.6" />
      
      {/* Bulb base threading */}
      <rect x="26" y="38" width="12" height="2" fill="#D4A017" />
      <rect x="25" y="40" width="14" height="1.5" fill="#B8860B" />
      <rect x="25" y="41.5" width="14" height="1.5" fill="#A0741E" />
      
      {/* Metal base */}
      <rect x="24" y="43" width="16" height="4" rx="1" fill="#D4A017" />
      
      {/* Base inner shadow */}
      <rect x="24" y="43" width="16" height="1" fill="#8B6914" opacity="0.5" />
      
      {/* Connector contact point */}
      <circle cx="32" cy="47" r="2.5" fill="#996600" />
    </svg>
  )
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Learn by Doing Card */}
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
            <div className="mb-4">
              <BulbIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Learn by Doing
            </h3>
            <p className="text-muted-foreground">
              Improve your coding skills
            </p>
          </div>

          {/* Project Examples Card */}
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
            <div className="mb-4">
              <SystemIcon className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Project Examples
            </h3>
            <p className="text-muted-foreground">
              Study real-world projects.
            </p>
          </div>

          {/* Easy to Follow Card */}
          <div className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-colors">
            <div className="mb-4">
              <LucideSettings className="w-10 h-10 text-violet-500 fill-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Easy to Follow
            </h3>
            <p className="text-muted-foreground">
              Simple steps to replicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
