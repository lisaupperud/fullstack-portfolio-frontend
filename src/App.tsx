import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import ProjectList from "./components/Project"

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <ProjectList />
    </div>
  )
}

export default App
