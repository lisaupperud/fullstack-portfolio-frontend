import "./Work.css"
import { useToggle } from "../hooks/useToggle"

export default function Work() {
  const { value: showWork, toggle } = useToggle()

  return (
    <div className="work-container">
      <div>
        <h1 id="title" onClick={toggle}>
          WORK EXPERIENCE
        </h1>
        <p id="copy">SHORT, BOLD COPY ABOUT SECTION</p>
        <p id="short-copy">Some explanation...</p>
      </div>

      {showWork && (
        <div className="work-content">
          <p>CONTENT EXAMPLE</p>
        </div>
      )}
    </div>
  )
}
