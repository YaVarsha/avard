import { FaCheckCircle, FaCreditCard, FaShieldAlt, FaUniversity } from "react-icons/fa"
import DonationQr from "../DonationQr"
import { donationImpact } from "../../data/donationOptions"
import { siteIdentity } from "../../data/siteIdentity"

function DonationSummary({ amount }) {
  return (
    <aside className="donation-summary">
      <div className="summary-card">
        <span>Your impact</span>
        <h2>Rs. {amount.toLocaleString("en-IN")}</h2>
        <p>{donationImpact[amount] || "Flexible support for AVARD rural development programs"}</p>
        <ul>
          <li><FaCheckCircle /> Secure Razorpay-ready checkout</li>
          <li><FaCheckCircle /> Donor details captured for receipt follow-up</li>
          <li><FaCheckCircle /> Supports grassroots program delivery</li>
        </ul>
      </div>

      <div className="bank-card">
        <h3><FaUniversity /> Bank Transfer</h3>
        <p><strong>Account Name:</strong> AVARD</p>
        <p><strong>Account Number:</strong> 000000000000</p>
        <p><strong>IFSC:</strong> XXXX0000000</p>
        <p><strong>UPI:</strong> {siteIdentity.upiId}</p>
        <p><strong>Charity ID:</strong> {siteIdentity.charityId}</p>
        <small>Replace these sample details with the NGO's verified bank information before launch.</small>
      </div>

      <DonationQr amount={amount} />

      <div className="payment-note">
        <FaShieldAlt />
        <p>
          Donors can verify AVARD using Charity ID
          <strong> {siteIdentity.charityId}</strong> before contributing.
        </p>
      </div>

      <div className="payment-note">
        <FaCreditCard />
        <p>
          For live payments, add your Razorpay key as
          <strong> VITE_RAZORPAY_KEY_ID</strong> in the environment file.
        </p>
      </div>
    </aside>
  )
}

export default DonationSummary
