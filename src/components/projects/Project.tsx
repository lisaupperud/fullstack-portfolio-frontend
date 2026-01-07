import { useState, useEffect } from "react"
import { type Project, fetchProjects } from "../../project/projectService"
import "./Project.css"
import Git from "../../assets/github.png"
import Click from "../../assets/click.png"
import { useToggle } from "../../hooks/useToggle"

/* Component to display a list of projects
    fetches data from backend with the fetchProjects() function
    saves the reuslt in a state variable and displays it
    renders simple list of cards with project name, description, tags and link
*/

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)
  const { value: showProjects, toggle } = useToggle()

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data)
        setError(false)
      })
      .catch((error) => {
        console.error("Error fetching projects:", error)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="project-container" id="projects">
      <div className="project-header" onClick={toggle}>
        <div className="title-with-arrow">
          <h1 id="title">PROJECTS</h1>
        </div>
        <div className="underline-wrapper">
          <div className="underline" />
        </div>
        <p id="copy" className="desktop-only">
          A SELECTION OF THE PROJECTS THAT I AM MOST PROUD OF.
        </p>
        <div className="mobile-only-wrapper">
          <p className="mobile-only">
            Click the title & swipe to see the projects
          </p>
        </div>
      </div>

      {loading && !error && <div>...</div>}

      {error && (
        <div className="loading-placeholder">
          <p
            style={{
              fontSize: "1.5rem",
              color: "black",
              textAlign: "center",
            }}
          >
            PROJECTS LOADING...
          </p>
        </div>
      )}

      {!loading && !error && showProjects && (
        <div className="project-content">
          {projects.map((project) => (
            <div key={project.id} className="project-list">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <div className="tags-container">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-link-container">
                <div className="arrow-line-link" />
                <div className="project-links">
                  {project.link.map((url) => {
                    const isGitHub = url.includes("github.com")
                    return (
                      <a
                        key={url}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        title={
                          isGitHub ? "View source on GitHub" : "Visit live site"
                        }
                      >
                        <img
                          src={isGitHub ? Git : Click}
                          alt={isGitHub ? "GitHub" : "Live Demo"}
                          className="link-icon"
                        />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}

          <h1 id="see-more" className="desktop-only">
            WANT TO SEE MORE?
          </h1>
          <div className="underline-wrapper">
            <div className="underline" />
          </div>
          <div className="desktop-only">
            <p id="finish-text">
              TAKE A LOOK AT MY GITHUB PROFILE, WHERE YOU CAN FIND MORE OF MY
              PROJECTS!
            </p>
            <div className="github-link-container">
              <div className="arrow-line" />
              <a
                href="https://github.com/lisaupperud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Git} alt="Github Icon" className="github-icon" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
