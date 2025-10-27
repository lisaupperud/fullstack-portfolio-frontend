import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProjectList from "./components/ProjectList"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <h1>My Projects</h1>
      <ProjectList />
    </div>
  )
}

export default App
