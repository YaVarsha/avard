import { FaCheckCircle, FaCreditCard, FaUniversity } from "react-icons/fa"
import DonationQr from "../DonationQr"
import { donationImpact } from "../../data/donationOptions"
import { siteIdentity } from "../../data/siteIdentity"

function DonationSummary({ amount }) {
  const { bank } = siteIdentity

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
        <p><strong>Account Holder:</strong> {bank.accountHolder}</p>
        <p><strong>Account Number:</strong> {bank.accountNumber}</p>
        <p><strong>Bank:</strong> {bank.bankName}</p>
        <p><strong>IFSC:</strong> {bank.ifsc}</p>
        <p><strong>Branch:</strong> {bank.branch}</p>
        <p><strong>Account Type:</strong> {bank.accountType}</p>
        <small>After transfer, submit donor details so the AVARD team can verify payment and follow up with a receipt.</small>
      </div>

      <DonationQr amount={amount} />

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
