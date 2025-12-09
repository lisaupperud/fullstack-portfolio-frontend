import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/nav-bar/Navbar"
import ProjectList from "./components/projects/Project"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"
import deco from "./assets/deco.png"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50
        ? document.querySelector(".navbar")?.classList.add("scrolled")
        : document.querySelector(".navbar")?.classList.remove("scrolled")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      <div className="deco-container">
        <img src={deco} alt="" className="deco-img" />
      </div>
    </div>
  )
}

export default App
