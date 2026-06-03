import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { siteIdentity } from "../data/siteIdentity"

function Contact() {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage("Thank you. The AVARD team will respond soon.")
    event.currentTarget.reset()
  }

  return (
    <>
      <Helmet>
        <title>Contact AVARD | Donate, Volunteer, Partner</title>
        <meta name="description" content="Contact AVARD for donations, volunteering, partnerships, and rural development programs." />
      </Helmet>

      <section className="page-hero contact-page-hero">
        <div className="container">
          <span>Contact Us</span>
          <h1>Let us work together for rural development</h1>
          <p>
            Reach out for donations, volunteering, partnerships, field visits,
            or program collaboration.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>AVARD Office</h2>
            <p><FaMapMarkerAlt /> {siteIdentity.address}</p>
            <p><FaPhoneAlt /> {siteIdentity.phone}</p>
            <p><FaEnvelope /> {siteIdentity.email}</p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              Subject
              <input name="subject" placeholder="Donation, volunteer, partnership..." required />
            </label>
            <label>
              Message
              <textarea name="message" placeholder="How can we help?" required />
            </label>
            <button type="submit" className="primary-btn">Send Message</button>
            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
