import { getUpiPaymentLink, siteIdentity } from "../data/siteIdentity"

function DonationQr({ amount = 1000, compact = false }) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(getUpiPaymentLink(amount))}`

  return (
    <div className={compact ? "donation-qr-card compact" : "donation-qr-card"}>
      <span>Scan to Donate</span>
      <div className="donation-qr-frame">
        <img src={qrUrl} alt={`UPI QR code for ${siteIdentity.donationPayee}`} loading="lazy" decoding="async" />
      </div>
      <p>
        UPI ID: <strong>{siteIdentity.upiId}</strong>
      </p>
    </div>
  )
}

export default DonationQr
