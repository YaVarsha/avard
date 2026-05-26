import { Helmet } from "react-helmet-async"
import DonationForm from "../components/donation/DonationForm"
import DonationSummary from "../components/donation/DonationSummary"
import PledgeModal from "../components/donation/PledgeModal"
import { useDonationForm } from "../hooks/useDonationForm"

function Donate() {
  const donation = useDonationForm()

  return (
    <>
      <Helmet>
        <title>Donate to AVARD | Support Rural Development</title>
        <meta
          name="description"
          content="Donate to AVARD and support rural livelihoods, women empowerment, education, agriculture, and community-led development in India."
        />
      </Helmet>

      <section className="page-hero donation-hero">
        <div className="container">
          <span>Donate to AVARD</span>
          <h1>Help rural communities build stronger, self-reliant futures</h1>
          <p>
            Your contribution supports training, local action, education
            access, farmer support, and women-led community initiatives.
          </p>
        </div>
      </section>

      <section className="donate-page-section">
        <div className="container donate-layout">
          <DonationForm
            amount={donation.amount}
            customAmount={donation.customAmount}
            donor={donation.donor}
            selectedAmount={donation.selectedAmount}
            status={donation.status}
            onCustomAmountChange={donation.setCustomAmount}
            onDonorChange={donation.updateDonor}
            onSelectAmount={donation.selectAmount}
            onSubmit={donation.submitDonation}
          />
          <DonationSummary amount={donation.amount} />
        </div>
      </section>

      {donation.pledgePopup && <PledgeModal onClose={donation.closePledgePopup} />}
    </>
  )
}

export default Donate
