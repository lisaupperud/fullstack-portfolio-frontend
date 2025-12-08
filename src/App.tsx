import "./App.css"
import Home from "./components/home/Home"
import Navbar from "./components/nav-bar/Navbar"
import ProjectList from "./components/projects/Project"
import Work from "./components/work/Work"
import Contact from "./components/contact/Contact"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <div className="timeline-wrapper">
        {/* The purple line */}
        <div className="timeline-line" />
        <ProjectList />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default App
