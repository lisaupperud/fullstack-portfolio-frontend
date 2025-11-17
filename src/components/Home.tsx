import lisaupperud from "../assets/lisaupperud.jpeg"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <div className="introduction">
        <img src={lisaupperud} alt="Lisa Upperud smiling to the camera" />
        <div className="introduction-text">
          <h1>HI! I'M LISA</h1>
          <p>
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla 
          </p>
        </div>
      </div>
    </div>
  )
}
