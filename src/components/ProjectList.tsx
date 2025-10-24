import { useState, useEffect } from "react"
import { type Project, fetchProjects } from "../project/projectService"

/* Component to display a list of projects
    fetches data from backend with the fetchProjects() function
    saves the reuslt in a state variable and displays it
    renders simple list of cards with project name, description, tags and link
*/ 


export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState<boolean>(true)

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
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <p>{project.tags.join(", ")}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  )
}
