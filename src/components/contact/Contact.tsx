import "./Contact.css"
import { useToggle } from "../../hooks/useToggle"
import arrow from "../../assets/arrow-right.png"
import linkedin from "../../assets/linkedin.png"
import mail from "../../assets/mail.png"
import "../../App.css"

export default function Contact() {
  const { value: showContact, toggle } = useToggle()

  return (
    <div className="contact-container" id="section-contact">
      <div className="timeline-dot">
        <h1 id="title" onClick={toggle}>
          CONTACT
        </h1>
        <div className="underline-wrapper">
          <div className="underline" />
        </div>
        <p id="copy">INTRIGUED? WANT TO KNOW MORE?</p>
        <p id="short-copy">Let's get in contact!</p>

        {showContact && (
          <div className="contact-content">
            <div className="contact-links-container">
              <div className="arrow-line" />
              <a
                href="https://www.linkedin.com/in/lisaupperud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn Logo" id="icons" />
              </a>
            </div>
            <div className="contact-links-container">
              <div className="arrow-line" />
              <a href="mailto:lisa.upp@hotmail.com">
                <img src={mail} alt="E-mail Icon" id="icons" />
              </a>
            </div>
            <h1 id="thanks">THANKS FOR CHECKING OUT MY PORTFOLIO!</h1>
          </div>
        )}
      </div>
    </div>
  )
}
