import "./About.css"
import { useToggle } from "../../hooks/useToggle"

export default function About() {
  const { value: showAbout, toggle } = useToggle()

  return (
    <div className="about-container" id="section-about">
      <div>
        <h1 id="title" onClick={toggle}>
          ABOUT ME
        </h1>
        <p id="copy">SHORT, BOLD COPY ABOUT SECTION</p>
        <p id="short-copy">Some explanation...</p>
      </div>

      {showAbout && (
        <div className="about-content">
          <p>CONTENT EXAMPLE</p>
        </div>
      )}
    </div>
  )
}
