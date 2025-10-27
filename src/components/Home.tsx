import lisaupperud from "../assets/lisaupperud.jpeg"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Portfolio</h1>
      <img src={lisaupperud} alt="Picture of Lisa smiling" />
      <p>This is the home page of my portfolio website.</p>
    </div>
  )
}
