import lisaupperud from "../assets/lisaupperud.jpeg"
import deco from "../assets/deco.png"
import "./Home.css"
import { scrollToId } from "../utils/scroll"
import NavigationLine from "./navigation-line/navigationLine"

export default function Home() {
  return (
    <div className="home-container">
      <NavigationLine
        sections={[
          "section-intro",
          "section-about",
          "section-projects",
          "section-work",
        ]}
      />
      <div className="introduction">
        <img src={lisaupperud} alt="Lisa Upperud smiling to the camera" />
        <div className="introduction-text">
          <h1>HI!</h1>
          <h2>I'M LISA</h2>
          <h3>IT'S NICE TO MEET YOU!</h3>
          <p onClick={() => scrollToId("projects")}>
            CLICK HERE TO GET TO KNOW ME!
          </p>
        </div>
      </div>
      <img src={deco} alt="" />
    </div>
  )
}
