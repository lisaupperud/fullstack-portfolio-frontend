import lisaupperud from "../assets/lisaupperud.jpeg"
import "./Home.css"
import Navbar from "./Navbar"

export default function Home() {
  return (

    <div className="home-container">

      
      <Navbar />

    
      <div className="introduction">
        <img src={lisaupperud} alt="Lisa Upperud smiling to the camera" />
        <div className="introduction-text">
          <h1>WELCOME</h1>
          <p>
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla
          </p>
        </div>
      </div>
      
    </div>

  )


  /*
      <div className="home-container">
      <div className="introduction">
        <img src={lisaupperud} alt="Lisa Upperud smiling to the camera" />
        <div className="introduction-text">
          <h1>WELCOME</h1>
          <p>
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla
          </p>
        </div>
      </div>
    </div>
  
  
  */ 
}
