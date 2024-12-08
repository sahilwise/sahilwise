"use client"

import { useEffect, useRef } from "react"

export function LogoScroll() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Update width on mount and window resize (if needed later)
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Example for later usage: containerRef.current.scrollWidth
      }
    }
    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  const logos = Array(8)
    .fill(0)
    .map((_, idx) => (
      <div key={idx} className="relative h-16 w-16 flex-shrink-0 mx-8">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="h-full w-full text-[#474747]"
        >
          <rect x="4" y="4" width="16" height="16" />
          <rect x="6" y="6" width="12" height="12" />
          <rect x="8" y="8" width="8" height="8" />
        </svg>
      </div>
    ))

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-[#232323] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-[#232323] to-transparent" />

      {/* Scrolling content */}
      <div className="flex animate-scroll">
        {/* First set of logos */}
        <div ref={containerRef} className="flex shrink-0">
          {logos}
        </div>
        {/* Duplicate set of logos */}
        <div className="flex shrink-0">{logos}</div>
      </div>
    </div>
  )
}
