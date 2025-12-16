import "./Contact.css"
import { useToggle } from "../../hooks/useToggle"
import linkedin from "../../assets/linkedin.png"
import mail from "../../assets/mail.png"
import "../../App.css"

export default function Contact() {
  const { value: showContact, toggle } = useToggle()

  return (
    <div className="contact-container" id="contact">
      <div className="test">
        <h1 id="title" onClick={toggle}>
          CONTACT
        </h1>
        <div className="underline-wrapper">
          <div className="underline" />
        </div>
        <p id="copy" className="desktop-only">
          INTRIGUED? WANT TO KNOW MORE?
        </p>
        {/*<p id="short-copy" className="desktop-only">
          Let's get in contact!
        </p>*/}
        <div className="mobile-only-wrapper">
          <p className="mobile-only">Click the title for links to reach out</p>
        </div>

        {showContact && (
          <div className="contact-content">
            <div className="contact-links-container">
              <div className="desktop-only">
                <div className="arrow-container">
                  <p>SEND ME A MESSAGE</p>
                  <div className="arrow-line" />
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/lisaupperud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn Logo" id="icons" />
              </a>
            </div>

            <div className="contact-links-container">
              <div className="desktop-only">
                <div className="arrow-container">
                  <p>... OR AN EMAIL</p>
                  <div className="arrow-line" />
                </div>
              </div>

              <a href="mailto:lisa.upp@hotmail.com">
                <img src={mail} alt="E-mail Icon" id="icons" />
              </a>
            </div>
            <h1 id="thanks" className="desktop-only">
              THANKS FOR CHECKING OUT MY PORTFOLIO!
            </h1>
          </div>
        )}
      </div>
    </div>
  )
}
