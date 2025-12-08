import "./Work.css"
import { useToggle } from "../../hooks/useToggle"

export default function Work() {
  const { value: showWork, toggle } = useToggle()

  return (
    <div className="work-container" id="section-work">
      <div>
        <h1 id="title" onClick={toggle}>
          WORK EXPERIENCE
        </h1>
        <p id="copy">
          FROM THE SERVICE INDUSTRY TO SERVING CODE - TAKE A LOOK INTO MY WORK
          EXPERIENCE.
        </p>
        <p id="short-copy">
          CV not doing it for you? Take a look at a longer summary of my
          previous employments, from the restaurant and nightclub industry in
          Stockholm to my first job as a developer.
        </p>
      </div>

      {showWork && (
        <div className="work-content">
          <p>CONTENT EXAMPLE</p>
        </div>
      )}
    </div>
  )
}
