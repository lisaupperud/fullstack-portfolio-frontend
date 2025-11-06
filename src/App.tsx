import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ProjectList from "./components/Project"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <ProjectList />
      <About />
    </div>
  )
}

export default App
