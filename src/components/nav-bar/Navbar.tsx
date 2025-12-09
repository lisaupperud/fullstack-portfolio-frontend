import { useState } from "react"
import { scrollToId } from "../../utils/scroll"
import "./Navbar.css"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="navbar">
      {/* Hamburger Button */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle meny"
        aria-expanded={isOpen}
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Desktop Links */}
      <div className="buttons">
        <button onClick={() => scrollToId("home")}>Home</button>
        <button onClick={() => scrollToId("projects")}>Projects</button>
        <button onClick={() => scrollToId("work")}>Work</button>
        <button onClick={() => scrollToId("contact")}>Contact</button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close Menu"
        >
          x
        </button>
        <nav className="mobile-links">
          <button
            onClick={() => {
              scrollToId("home")
              closeMenu()
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToId("projects")
              closeMenu()
            }}
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToId("work")
              closeMenu()
            }}
          >
            Work
          </button>
          <button
            onClick={() => {
              scrollToId("contact")
              closeMenu()
            }}
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  )
}
