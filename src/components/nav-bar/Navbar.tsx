import { scrollToId } from "../../utils/scroll"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="buttons">
        <button onClick={() => scrollToId("home")}>Home</button>
        <button onClick={() => scrollToId("projects")}>Projects</button>
        <button onClick={() => scrollToId("work")}>Work</button>
        <button onClick={() => scrollToId("contact")}>Contact</button>
      </div>
    </div>
  )
}
