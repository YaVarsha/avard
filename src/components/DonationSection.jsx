import { Link } from "react-router-dom"
import { FaHandHoldingHeart, FaReceipt, FaSeedling } from "react-icons/fa"

function DonationSection() {
  return (
    <section className="donation-cta-section">
      <div className="container donation-cta-grid">
        <div className="donation-cta-copy" data-aos="fade-right">
          <span>Give with purpose</span>
          <h2>Your donation can move a village program forward</h2>
          <p>
            Support training, learning materials, farmer meetings, women-led
            enterprise groups, and field coordination for underserved rural
            communities.
          </p>
          <div className="donation-cta-actions">
            <Link className="primary-btn" to="/donate">Donate Now</Link>
            <Link className="secondary-btn" to="/projects">See Impact</Link>
          </div>
        </div>

        <div className="impact-mini-grid" data-aos="fade-left">
          <div>
            <FaSeedling />
            <strong>Rs. 500</strong>
            <span>supports learning kits for rural children</span>
          </div>
          <div>
            <FaHandHoldingHeart />
            <strong>Rs. 1,500</strong>
            <span>helps conduct a community awareness session</span>
          </div>
          <div>
            <FaReceipt />
            <strong>Transparent use</strong>
            <span>donor details and receipts captured on request</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationSection
