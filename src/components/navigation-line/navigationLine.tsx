import { useEffect, useState } from "react"
import { scrollToId } from "../../utils/scroll"
import "./navigationLine.css"

export default function NavigationLine({ sections }: { sections: string[] }) {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        const inView =
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.4
        if (inView) {
          setActive(id)
          return
        }
      }
      setActive("")
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="nav-line-container" aria-hidden="true">
      <div className="nav-line" />
      <div className="nav-dots">
        {sections.map((id) => (
          <button
            key={id}
            className={`nav-dot ${active === id ? "active" : ""}`}
            onClick={() => scrollToId(id)}
            aria-label={`Go to ${id}`}
          />
        ))}
      </div>
    </div>
  )
}
