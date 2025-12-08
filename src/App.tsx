import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import ProjectList from "./components/Project"
import Work from "./components/Work"
import Contact from "./components/Contact"
import NavigationLine from "./components/navigation-line/navigationLine"

function App() {
  return (
    <div className="app">
      <Navbar />
      <NavigationLine
        sections={[
          "section-projects",
          "section-work",
          "section-about",
          "section-contact",
        ]}
      />
      <Home />
      <ProjectList />
      <Work />
      <About />
      <Contact />
    </div>
  )
}

export default App
