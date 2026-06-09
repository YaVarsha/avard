import { siteIdentity } from "../data/siteIdentity"

function DonationQr({ compact = false }) {
  const { bank } = siteIdentity

  return (
    <div className={compact ? "donation-qr-card compact" : "donation-qr-card"}>
      <span>Bank Transfer</span>
      <p>
        Account: <strong>{bank.accountNumber}</strong>
      </p>
      <p>
        IFSC: <strong>{bank.ifsc}</strong>
      </p>
    </div>
  )
}

export default DonationQr
