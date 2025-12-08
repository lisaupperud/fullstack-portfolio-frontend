import "./Contact.css"
import { useToggle } from "../hooks/useToggle"

export default function Contact() {
  const { value: showContact, toggle } = useToggle()

  return (
    <div className="contact-container" id="section-contact">
      <div>
        <h1 id="title" onClick={toggle}>
          CONTACT
        </h1>
        <p id="copy">SHORT, BOLD COPY ABOUT SECTION</p>
        <p id="short-copy">Some explanation...</p>
      </div>

      {showContact && (
        <div className="contact-content">
          <p>CONTENT EXAMPLE</p>
        </div>
      )}
    </div>
  )
}
