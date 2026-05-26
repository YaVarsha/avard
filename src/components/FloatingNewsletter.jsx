import { Link } from "react-router-dom"
import { FaEnvelopeOpenText } from "react-icons/fa"

function FloatingNewsletter() {
  return (
    <Link className="floating-newsletter" to="/newsletter" aria-label="Open newsletter page">
      <FaEnvelopeOpenText />
    </Link>
  )
}

export default FloatingNewsletter
