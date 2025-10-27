import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import ProjectList from "./components/ProjectList"

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <h1>My Projects</h1>
      <ProjectList />
    </div>
  )
}

export default App
