import "./App.css"
import Home from "./components/Home"
import ProjectList from "./components/ProjectList"

function App() {
  return (
    <div className="app">
      <Home />
      <h1>My Projects</h1>
      <ProjectList />
    </div>
  )
}

export default App
