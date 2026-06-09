import { Helmet } from "react-helmet-async"
import { Link, useParams } from "react-router-dom"
import { siteIdentity } from "../data/siteIdentity"

const policyPages = {
  "privacy-policy": {
    label: "Privacy Policy",
    title: "Privacy Policy",
    description: "How AVARD collects, uses, and protects donor and visitor information.",
    updated: "June 2026",
    sections: [
      {
        heading: "Information We Collect",
        body: [
          "When you contact AVARD, apply for membership, subscribe to updates, or make a donation, we may collect your name, email address, phone number, postal address, donation amount, payment reference, and any message you choose to share.",
          "Payment details are processed through authorised payment partners such as Razorpay. AVARD does not store card numbers, UPI PINs, CVV, net banking passwords, or other sensitive payment credentials.",
        ],
      },
      {
        heading: "How We Use Information",
        body: [
          "We use donor and visitor information to process donations, issue acknowledgements or receipts, respond to enquiries, share program updates, maintain donation records, and comply with applicable legal, accounting, and regulatory requirements.",
          "We do not sell donor information. Information may be shared only with trusted service providers, payment processors, auditors, regulators, or government authorities when required for legitimate organisational purposes.",
        ],
      },
      {
        heading: "Data Protection",
        body: [
          "AVARD takes reasonable administrative and technical measures to protect personal information from unauthorised access, misuse, alteration, or disclosure.",
          "Visitors may request correction or removal of their contact details from non-statutory communication records by contacting AVARD at the details below.",
        ],
      },
    ],
  },
  "terms-and-conditions": {
    label: "Terms & Conditions",
    title: "Terms and Conditions",
    description: "Terms for using the AVARD website and making donations.",
    updated: "June 2026",
    sections: [
      {
        heading: "Website Use",
        body: [
          "This website is operated by Association of Voluntary Agencies for Rural Development (AVARD), a rural development organisation working for community-led development, livelihood support, education, women empowerment, and related charitable initiatives.",
          "By using this website, contacting us, or making a donation, you agree to use the website only for lawful purposes and to provide accurate information wherever requested.",
        ],
      },
      {
        heading: "Donations",
        body: [
          "Donations made through this website are voluntary contributions towards AVARD programs, institutional activities, and rural development initiatives.",
          "A donation does not create any commercial purchase, delivery entitlement, ownership claim, or guaranteed service in favour of the donor. AVARD may allocate donations across its active programs according to organisational priorities and field needs.",
        ],
      },
      {
        heading: "Receipts and Communication",
        body: [
          "Donors should provide correct name, email, phone number, and payment details so AVARD can verify the contribution and issue acknowledgements or receipts where applicable.",
          "AVARD may contact donors for payment confirmation, receipt details, compliance records, program updates, or clarification of donation information.",
        ],
      },
    ],
  },
  "refund-cancellation-policy": {
    label: "Refund & Cancellation Policy",
    title: "Refund and Cancellation Policy",
    description: "Refund terms for mistaken or duplicate donations.",
    updated: "June 2026",
    sections: [
      {
        heading: "Donation Cancellation",
        body: [
          "Donations are voluntary contributions and are generally not cancellable once successfully paid and recorded.",
          "If a donor starts a payment but does not complete it, no donation will be recorded and no cancellation request is required.",
        ],
      },
      {
        heading: "Refund Requests",
        body: [
          "Refunds are considered only for genuine cases such as duplicate payment, incorrect amount entered by mistake, or payment made in error.",
          `To request a refund, donors must contact AVARD within 7 days of the transaction at ${siteIdentity.email} with donor name, phone number, transaction date, amount, and payment reference.`,
        ],
      },
      {
        heading: "Refund Timeline",
        body: [
          "Approved refunds will be initiated to the original payment method wherever possible.",
          "Once approved, refunds are normally processed within 5-7 working days, subject to payment gateway, bank, and settlement timelines.",
        ],
      },
    ],
  },
  "shipping-policy": {
    label: "Shipping Policy",
    title: "Shipping Policy",
    description: "Shipping applicability for AVARD donations.",
    updated: "June 2026",
    sections: [
      {
        heading: "No Physical Shipping",
        body: [
          "AVARD does not sell physical products through this website. Donations are charitable contributions towards rural development and community programs.",
          "Because no physical goods are purchased, no shipping, courier delivery, freight, or product dispatch is applicable to donations made through this website.",
        ],
      },
      {
        heading: "Donation Acknowledgement",
        body: [
          "Donation acknowledgements or receipts, where applicable, may be shared digitally through email, phone, or other contact details provided by the donor.",
          "For questions about donation acknowledgement or receipt status, donors may contact AVARD using the contact details below.",
        ],
      },
    ],
  },
}

function PolicyPage() {
  const { slug } = useParams()
  const page = policyPages[slug] || policyPages["privacy-policy"]

  return (
    <>
      <Helmet>
        <title>{page.title} | AVARD</title>
        <meta name="description" content={page.description} />
      </Helmet>

      <section className="page-hero legal-page-hero">
        <div className="container">
          <span>AVARD Donation Policy</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
        </div>
      </section>

      <section className="legal-section">
        <div className="container legal-layout">
          <aside className="legal-sidebar" aria-label="Policy pages">
            <h2>Policy Pages</h2>
            {Object.entries(policyPages).map(([policySlug, policy]) => (
              <Link className={policySlug === slug ? "active" : ""} key={policySlug} to={`/${policySlug}`}>
                {policy.label}
              </Link>
            ))}
            <Link to="/contact">Contact Us</Link>
            <Link to="/donate">Donation Details</Link>
          </aside>

          <article className="legal-card">
            <p className="legal-updated">Last updated: {page.updated}</p>
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="legal-contact-box">
              <h2>Contact AVARD</h2>
              <p>
                <strong>{siteIdentity.donationPayee}</strong>
              </p>
              <p>{siteIdentity.address}</p>
              <p>
                Phone: <a href={`tel:${siteIdentity.phone.replace(/[^\d+]/g, "")}`}>{siteIdentity.phone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${siteIdentity.email}`}>{siteIdentity.email}</a>
              </p>
            </section>
          </article>
        </div>
      </section>
    </>
  )
}

export default PolicyPage
