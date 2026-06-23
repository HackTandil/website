"use client"

type NavMarker = {
  id: string
  label: string
  href: string
  code: string
  // viewport-relative placement
  top: number
  left: number
  delay: number
  duration: number
}

const MARKERS: NavMarker[] = [
  { id: "events", label: "EVENTS", href: "#events", code: "TRK-11", top: 24, left: 15, delay: 0, duration: 7 },
  { id: "gallery", label: "GALLERY", href: "#gallery", code: "TRK-12", top: 63, left: 21, delay: 1.4, duration: 8.5 },
  {
    id: "community",
    label: "COMMUNITY",
    href: "#community",
    code: "TRK-13",
    top: 32,
    left: 78,
    delay: 0.7,
    duration: 9,
  },
]

function Marker({ marker }: { marker: NavMarker }) {
  return (
    <a
      href={marker.href}
      className="floating-marker group pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        top: `${marker.top}%`,
        left: `${marker.left}%`,
        animationDelay: `${marker.delay}s`,
        animationDuration: `${marker.duration}s`,
      }}
    >
      {/* tracked placeholder slot (emoji/icon goes here later) */}
      <div className="relative h-14 w-14 sm:h-16 sm:w-16">
        {/* corner brackets — same language as the subject-tracking boxes */}
        {(["tl", "tr", "bl", "br"] as const).map((c) => (
          <span
            key={c}
            className="absolute h-3.5 w-3.5 border-[var(--hud)] transition-all duration-300 group-hover:h-4 group-hover:w-4"
            style={{
              borderTopWidth: c.startsWith("t") ? 2 : 0,
              borderBottomWidth: c.startsWith("b") ? 2 : 0,
              borderLeftWidth: c.endsWith("l") ? 2 : 0,
              borderRightWidth: c.endsWith("r") ? 2 : 0,
              top: c.startsWith("t") ? 0 : "auto",
              bottom: c.startsWith("b") ? 0 : "auto",
              left: c.endsWith("l") ? 0 : "auto",
              right: c.endsWith("r") ? 0 : "auto",
            }}
          />
        ))}
        <span className="absolute inset-0 border border-[var(--hud)]/25 bg-[var(--hud)]/[0.05] backdrop-blur-[1px]" />
        {/* placeholder glyph — to be replaced later */}
        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-widest text-[var(--hud)]/50">
          [ ]
        </span>
      </div>

      {/* label tag */}
      <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-center font-mono leading-tight">
        <span className="block bg-[var(--hud)] px-1.5 py-px text-[10px] font-semibold tracking-wider text-black sm:text-[11px]">
          {marker.label}
        </span>
        <span className="mt-0.5 block text-[8px] tracking-[0.25em] text-[var(--hud)]/60 sm:text-[9px]">
          {marker.code} · LOCKED
        </span>
      </div>
    </a>
  )
}

export function FloatingNav({ opacity }: { opacity: number }) {
  return (
    <div
      className="absolute inset-0 z-30 transition-opacity duration-300"
      style={{ opacity, pointerEvents: opacity > 0.5 ? "auto" : "none" }}
      aria-label="Section navigation"
    >
      {MARKERS.map((m) => (
        <Marker key={m.id} marker={m} />
      ))}
    </div>
  )
}
