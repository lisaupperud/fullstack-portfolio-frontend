import "./Work.css"
import "../../App.css"
import { useToggle } from "../../hooks/useToggle"

export default function Work() {
  const { value: showWork, toggle } = useToggle()

  return (
    <div className="work-container" id="section-work">
      <div className="timeline-dot">
        <h1 id="title" onClick={toggle}>
          WORK EXPERIENCE
        </h1>
        <p id="copy">
          FROM THE SERVICE INDUSTRY TO SERVING CODE - TAKE A LOOK!
        </p>
        <p id="short-copy">
          Take a look at a summary of my previous employments, from the
          restaurant and nightclub industry in Stockholm to my first job as a
          developer.
        </p>
      </div>

      {showWork && (
        <div className="work-content">
          <div className="work-list">
            <h2>JUNIOR SYSTEM DEVELOPER</h2>
            <h4>SVEA BANK</h4>
            <h4>JUNE 2025 - AUG 2025</h4>
            <ul>
              <li>
                <strong>API Development:</strong>Built a robust validation REST
                API capable of both single & batch requests.
              </li>
              <li>
                <strong>Frontend Development:</strong>Developed a React-based UI
                to serve as a framework for further development, consuming the
                API.
              </li>
              <li>
                <strong>CI/CD & DevOps:</strong>
                Managed pipelines, code reviews, and version control in Azure
                DevOps.
              </li>
              <li>
                <strong>Batch Processing:</strong>
                Supported efficient validation for multiple simultaneous
                requests.
              </li>
            </ul>
            <h2>BARTENDER & WAITRESS</h2>
            <h4>RESTAURANT INDUSTRY</h4>
            <h4>SEP 2018 - PRESENT</h4>
            <ul>
              <li>
                <strong>Customer Relations:</strong>Provided excellent service
                and handled customer inquiries and complaints effectively.
              </li>
              <li>
                <strong>Team Coordination:</strong>Organized workflow, delegated
                tasks, and supported team efficiency during high-pressure
                situations.
              </li>
              <li>
                <strong>Problem Solving & Adaptability:</strong>Quickly resolved
                operational issues and adapted to changing priorities.
              </li>
              <li>
                <strong>Training & Mentoring: </strong>Assisted in onboarding
                new staff and sharing best practices.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
