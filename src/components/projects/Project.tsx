import { useState, useEffect } from "react"
import { type Project, fetchProjects } from "../../project/projectService"
import "./Project.css"
import Git from "../../assets/github.png"
import { useToggle } from "../../hooks/useToggle"

/* Component to display a list of projects
    fetches data from backend with the fetchProjects() function
    saves the reuslt in a state variable and displays it
    renders simple list of cards with project name, description, tags and link
*/

// TODO - fix images based on string containing git/vercel

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const { value: showProjects, toggle } = useToggle()

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading projects...</div>
  }

  return (
    <div className="project-container" id="projects">
      <div>
        <h1 id="title" onClick={toggle}>
          PROJECTS
        </h1>
        <div className="underline-wrapper">
          <div className="underline" />
        </div>

        <p id="copy">A SELECTION OF THE PROJECTS THAT I AM MOST PROUD OF.</p>
        <p id="short-copy">
          A showcase of the projects that show a wide range of competence and
          knowledge. Scroll thorugh, read and visit the Repositories to get a
          deeper look into the codebase. Click the tags to sort projects based
          on technology used.
        </p>
      </div>

      {showProjects && (
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
              <div className="project-links">
                {project.link.map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    <img src={Git} alt="" />
                  </a>
                ))}
              </div>
            </div>
          ))}
          <h1 id="title">WANT TO SEE MORE?</h1>
          <div className="underline-wrapper">
            <div className="underline" />
          </div>
          <div>
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
