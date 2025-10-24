import { useEffect, useRef } from "react"
import "./App.css"
import { fetchProjects } from "../src/project/projectService"

function App() {
  const fetchedRef = useRef(false)

  useEffect(() => {
    if (fetchedRef.current) return
    fetchedRef.current = true

    fetchProjects()
      .then((projects) => console.log("Projects:", projects))
      .catch((error) => console.error("Error fetching projects:", error))
  }, [])

  return <h1>Portfolio UI</h1>
}

export default App
