import "./App.css"
import About from "./components/about/About"
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
      <ProjectList />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App
