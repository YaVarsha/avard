import { useState } from "react"
import { FaPaperPlane } from "react-icons/fa"

function Newsletter() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) {
      setMessage("Please enter your email address.")
      return
    }

    setMessage("Thank you. We will share AVARD updates with you soon.")
    setEmail("")
  }

  return (
    <section className="newsletter-section">
      <div className="container newsletter-panel">
        <div>
          <span>Stay connected</span>
          <h2>Receive impact updates and volunteer opportunities</h2>
        </div>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            aria-label="Email address"
          />
          <button type="submit">
            <FaPaperPlane />
            Subscribe
          </button>
          {message && <p className="form-message">{message}</p>}
        </form>
      </div>
    </section>
  )
}

export default Newsletter
