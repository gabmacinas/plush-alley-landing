"use client"
import { useEffect, useRef } from "react"

export default function TaglineReveal({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLElement>("[data-word]")
    if (!words) return
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.remove("opacity-30")
          io.unobserve(e.target)
        }),
      // words activate as they cross a line 35% up from the bottom of the viewport
      { rootMargin: "0px 0px -35% 0px" },
    )
    words.forEach((w) => io.observe(w))
    return () => io.disconnect()
  }, [])

  return (
    <p ref={ref} className="heading-2 mx-auto max-w-[680px] text-balance text-center">
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line.split(" ").map((word, j) => (
            <span
              key={j}
              data-word
              className="opacity-30 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:opacity-100 motion-reduce:transition-none"
            >
              {word}{" "}
            </span>
          ))}
        </span>
      ))}
    </p>
  )
}
