import lisaupperud from "../assets/lisaupperud.jpeg"
import codeIcon from "../assets/codeIcon.png"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>

      <div className="introduction">
        <img
          src={lisaupperud}
          alt="Picture of Lisa smiling"
          className="profile-pic"
        />
        <div className="intro-text">
          <p>Introduction</p>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      </div>

      <div className="next-page">
        <p>Check out my projects!</p>
      </div>
    </div>
  )
}
