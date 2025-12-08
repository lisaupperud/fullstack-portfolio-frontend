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
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="scroll-indicator">
      <div className="line"></div>
      <div className="dots">
        {sections.map((id) => (
          <div
            key={id}
            className={`dot ${active === id ? "active" : ""}`}
            onClick={() => scrollToId(id)}
          ></div>
        ))}
      </div>
    </div>
  )
}
