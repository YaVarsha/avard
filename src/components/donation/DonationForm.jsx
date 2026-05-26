import { FaHeart } from "react-icons/fa"
import { donationAmounts } from "../../data/donationOptions"

function DonationForm({
  amount,
  customAmount,
  donor,
  selectedAmount,
  status,
  onCustomAmountChange,
  onDonorChange,
  onSelectAmount,
  onSubmit,
}) {
  return (
    <form className="donation-form" onSubmit={onSubmit}>
      <div className="form-section">
        <h2>Choose an amount</h2>
        <div className="amount-grid">
          {donationAmounts.map((item) => (
            <button
              className={selectedAmount === item && !customAmount ? "selected" : ""}
              type="button"
              key={item}
              onClick={() => onSelectAmount(item)}
            >
              Rs. {item.toLocaleString("en-IN")}
            </button>
          ))}
        </div>
        <label>
          Custom amount
          <input
            type="number"
            min="100"
            value={customAmount}
            onChange={(event) => onCustomAmountChange(event.target.value)}
            placeholder="Enter amount in INR"
          />
        </label>
      </div>

      <div className="form-section">
        <h2>Donor details</h2>
        <div className="two-column-fields">
          <label>
            Full name
            <input name="name" value={donor.name} onChange={onDonorChange} placeholder="Your name" />
          </label>
          <label>
            Phone number
            <input name="phone" value={donor.phone} onChange={onDonorChange} placeholder="+91..." />
          </label>
        </div>
        <label>
          Email address
          <input name="email" type="email" value={donor.email} onChange={onDonorChange} placeholder="you@example.com" />
        </label>
        <label>
          PAN for receipt, optional
          <input name="pan" value={donor.pan} onChange={onDonorChange} placeholder="ABCDE1234F" />
        </label>
        <label>
          Message, optional
          <textarea name="message" value={donor.message} onChange={onDonorChange} placeholder="Share a note for the AVARD team" />
        </label>
      </div>

      <button className="submit-donation" type="submit">
        <FaHeart />
        Donate Rs. {amount.toLocaleString("en-IN")}
      </button>
      {status && <p className="donation-status">{status}</p>}
    </form>
  )
}

export default DonationForm
