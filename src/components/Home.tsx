import lisaupperud from "../assets/lisaupperud.jpeg"
import deco from "../assets/deco.png"
import "./Home.css"
import { scrollToId } from "../utils/scroll"

export default function Home() {
  return (
    <div className="home-container">
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
