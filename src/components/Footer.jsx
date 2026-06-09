import { Link } from "react-router-dom"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import DonationQr from "./DonationQr"
import { siteIdentity } from "../data/siteIdentity"
import impactStrip from "../assets/images/footer-impact-strip.svg"

function Footer() {
  const year = new Date().getFullYear()
  const copyrightText = `Copyright ${year} Association of Voluntary Agencies for Rural Development (AVARD). Built with care for transparent giving and rural impact.`

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="footer-brand" to="/">
            <img src="/avard-logo.png" alt="AVARD logo" width="68" height="58" loading="lazy" decoding="async" />
            <span>
              <strong>AVARD</strong>
              <small>Rural Development Since 1958</small>
            </span>
          </Link>
          <p>
            Association of Voluntary Agencies for Rural Development supports
            community-led change through rural livelihoods, education, health,
            women leadership, and sustainable agriculture.
          </p>
          <DonationQr compact />
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/about">About AVARD</Link></li>
            <li><Link to="/programs">Our Programs</Link></li>
            <li><Link to="/projects">Impact Projects</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li><Link to="/donate">Donate Securely</Link></li>
            <li><Link to="/contact">Contact Team</Link></li>
            <li><Link to="/admin">Admin Panel</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Focus Areas</h3>
          <ul className="footer-links">
            <li>Rural livelihoods</li>
            <li>Women empowerment</li>
            <li>Farmer support</li>
            <li>Education access</li>
            <li>Environment action</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Policies</h3>
          <ul className="footer-links">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link to="/refund-cancellation-policy">Refund & Cancellation</Link></li>
            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
          </ul>
        </div>

        <div className="footer-column footer-contact-column">
          <h3>Contact</h3>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt /> {siteIdentity.address}</li>
            <li><FaPhoneAlt /> {siteIdentity.phone}</li>
            <li><FaEnvelope /> {siteIdentity.email}</li>
          </ul>
          <Link className="footer-donate" to="/donate">Make a Donation</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>{copyrightText}</p>
        </div>
      </div>
      <div className="footer-impact-strip" aria-hidden="true">
        <img src={impactStrip} alt="" loading="lazy" decoding="async" />
      </div>
    </footer>
  )
}

export default Footer
