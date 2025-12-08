import "./Contact.css"
import { useToggle } from "../../hooks/useToggle"
import arrow from "../../assets/arrow-right.png"
import linkedin from "../../assets/linkedin.png"
import mail from "../../assets/mail.png"

export default function Contact() {
  const { value: showContact, toggle } = useToggle()

  return (
    <div className="contact-container" id="section-contact">
      <div>
        <h1 id="title" onClick={toggle}>
          CONTACT
        </h1>
        <p id="copy">INTRIGUED? WANT TO KNOW MORE?</p>
        <p id="short-copy">Let's get in contact!</p>

        {showContact && (
          <div className="contact-content">
            <div className="contact-links">
              <img
                src={arrow}
                alt="Purple arrow pointing to the right"
                id="arrows"
              />
              <a href="">
                <img src={linkedin} alt="LinkedIn Logo" id="icons" />
              </a>
            </div>
            <div className="contact-links">
              <img
                src={arrow}
                alt="Purple arrow pointing to the right"
                id="arrows"
              />
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
