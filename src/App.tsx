import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/nav-bar/Navbar"
import ProjectList from "./components/projects/Project"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import deco from "./assets/deco.png"

function App() {
  /*useEffect(() => {
    const dots = {
      projects: document.getElementById("dot-projects"),
      work: document.getElementById("dot-work"),
      contsct: document.getElementById("dot-contact"),
    }

    const sections = document.querySelectorAll("[data-section]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          const dot =
            id === "projects"
              ? dots.projects
              : id === "work"
              ? dots.work
              : id === "contact"
              ? dots.contsct
              : null

          if (dot) {
            if (entry.isIntersecting) {
              dot.classList.add("active")
            } else {
              dot.classList.remove("active")
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])*/

  return (
    <div className="app">
      <Navbar />
      <Home />
      <div className="timeline-wrapper">
        <div className="timeline-line" />
        <ProjectList />
        <Work />
        <Contact />
      </div>
      <img src={deco} alt="" className="deco-img"/>
    </div>
  )
}

export default App
