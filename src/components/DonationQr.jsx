import { siteIdentity } from "../data/siteIdentity"
import canaraBankUpiScanner from "../assets/images/canara-bank-upi-scanner.jpeg"

function DonationQr({ compact = false }) {
  const { bank } = siteIdentity

  return (
    <div className={compact ? "donation-qr-card compact" : "donation-qr-card"}>
      <span>Scan & Pay</span>
      <div className="donation-qr-frame">
        <img src={canaraBankUpiScanner} alt={`Canara Bank UPI scanner for ${bank.upiId}`} loading="lazy" decoding="async" />
      </div>
      <p>
        UPI ID: <strong>{bank.upiId}</strong>
      </p>
      <p>
        Account: <strong>{bank.accountNumber}</strong>
      </p>
      <p>
        IFSC: <strong>{bank.ifsc}</strong>
      </p>
      <small>Canara Bank scan and pay for AVARD donations</small>
    </div>
  )
}

export default DonationQr
