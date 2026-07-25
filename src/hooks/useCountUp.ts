import { useEffect, useRef, useState } from 'react'

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLDivElement>(null)
  // Default to the real value so the number is present on first paint, under
  // reduced motion, and if the count-up never runs (SEO / no-JS fallback).
  const [value, setValue] = useState(target)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started.current) return
          started.current = true

          // Reset to 0 just before the card scrolls into view (rootMargin below
          // the fold), so the count-up is seen without a value flash.
          setValue(0)
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0, rootMargin: '0px 0px 12% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [target, duration])

  return { ref, value }
}
