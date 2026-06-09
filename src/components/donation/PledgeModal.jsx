import { FaCheck, FaTimes } from "react-icons/fa"

function PledgeModal({ onClose }) {
  return (
    <div className="pledge-modal" role="dialog" aria-modal="true" aria-labelledby="pledge-modal-title" onClick={onClose}>
      <div className="pledge-modal-card" onClick={(event) => event.stopPropagation()}>
        <button className="pledge-modal-close" type="button" aria-label="Close pledge confirmation" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="pledge-success-icon">
          <FaCheck />
        </div>
        <span>Demo pledge recorded</span>
        <h2 id="pledge-modal-title">Thank you.</h2>
        <p>
          Your donation details have been recorded. Please complete payment
          using the bank transfer details, and the AVARD team will verify the
          payment for receipt follow-up.
        </p>
        <button className="pledge-modal-action" type="button" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default PledgeModal
