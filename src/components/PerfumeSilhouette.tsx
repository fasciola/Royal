interface PerfumeSilhouetteProps {
  initials?: string;
}

export default function PerfumeSilhouette({ initials = "RD" }: PerfumeSilhouetteProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-burgundy-dark/40 overflow-hidden">
      {/* Royal ambient lighting */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--color-gold)_0%,_transparent_65%] opacity-15 pointer-events-none" />
      
      {/* SVG Luxury Blueprint */}
      <svg 
        viewBox="0 0 100 120" 
        className="w-48 h-48 md:w-56 md:h-56 object-contain select-none transition-transform duration-700 hover:scale-105" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="crestGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e5cb9b" />
            <stop offset="50%" stopColor="#c9a96e" />
            <stop offset="100%" stopColor="#aa894e" />
          </linearGradient>
          <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient background grid or sparkles in SVG */}
        <circle cx="20" cy="30" r="0.5" fill="#e5cb9b" opacity="0.4" />
        <circle cx="80" cy="40" r="0.7" fill="#e5cb9b" opacity="0.6" />
        <circle cx="15" cy="80" r="0.4" fill="#e5cb9b" opacity="0.3" />
        <circle cx="75" cy="95" r="0.6" fill="#e5cb9b" opacity="0.5" />

        {/* Liquid spray straw */}
        <line x1="50" y1="32" x2="50" y2="88" stroke="url(#crestGold)" strokeWidth="0.75" strokeDasharray="1 1" opacity="0.6" />

        {/* Facet Cap (Diamond Shaped) */}
        <polygon 
          points="41,13 59,13 66,22 34,22" 
          fill="rgba(19, 5, 9, 0.7)" 
          stroke="url(#crestGold)" 
          strokeWidth="1" 
        />
        {/* Diamond inner facet lines */}
        <line x1="50" y1="13" x2="50" y2="22" stroke="url(#crestGold)" strokeWidth="0.5" opacity="0.4" />
        <line x1="45" y1="13" x2="41" y2="22" stroke="url(#crestGold)" strokeWidth="0.5" opacity="0.4" />
        <line x1="55" y1="13" x2="59" y2="22" stroke="url(#crestGold)" strokeWidth="0.5" opacity="0.4" />

        {/* Gold Neck Collar */}
        <rect x="43" y="22" width="14" height="6" rx="1" fill="url(#crestGold)" />
        <line x1="43" y1="25" x2="57" y2="25" stroke="#130509" strokeWidth="0.5" opacity="0.6" />

        {/* Outer Glass Bottle */}
        <rect 
          x="24" 
          y="28" 
          width="52" 
          height="68" 
          rx="10" 
          fill="rgba(33, 13, 20, 0.25)" 
          stroke="url(#crestGold)" 
          strokeWidth="1.5" 
          filter="url(#softGlow)"
        />

        {/* Inner Glass Layer */}
        <rect 
          x="28" 
          y="32" 
          width="44" 
          height="60" 
          rx="6" 
          fill="none" 
          stroke="url(#crestGold)" 
          strokeWidth="0.5" 
          opacity="0.3" 
        />

        {/* Perfume Fluid Level */}
        <path 
          d="M 29 55 Q 50 58 71 55 L 71 87 Q 50 91 29 87 Z" 
          fill="rgba(201, 169, 110, 0.08)" 
        />
        {/* Subtle fluid wave line */}
        <path 
          d="M 29 55 Q 50 58 71 55" 
          fill="none" 
          stroke="url(#crestGold)" 
          strokeWidth="0.5" 
          opacity="0.4" 
        />

        {/* Exquisite Central Label Plate */}
        <rect 
          x="35" 
          y="50" 
          width="30" 
          height="22" 
          rx="2" 
          fill="rgba(7, 2, 4, 0.95)" 
          stroke="url(#crestGold)" 
          strokeWidth="0.75" 
        />
        
        {/* Label Border inner */}
        <rect 
          x="37" 
          y="52" 
          width="26" 
          height="18" 
          rx="1" 
          fill="none" 
          stroke="url(#crestGold)" 
          strokeWidth="0.25" 
          opacity="0.7" 
        />

        {/* Monogram initials */}
        <text 
          x="50" 
          y="63" 
          textAnchor="middle" 
          fontSize="10" 
          fontFamily="Cormorant Garamond, serif" 
          fontWeight="400" 
          fontStyle="italic"
          fill="url(#crestGold)"
          letterSpacing="0.5"
        >
          {initials}
        </text>
        <line x1="42" y1="66" x2="58" y2="66" stroke="url(#crestGold)" strokeWidth="0.25" opacity="0.5" />
      </svg>
    </div>
  );
}
