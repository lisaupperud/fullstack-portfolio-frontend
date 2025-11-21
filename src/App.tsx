import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ProjectList from "./components/Project"
import Work from "./components/Work"
import Contact from "./components/Contact"

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
