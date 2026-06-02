import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { FaCheckCircle, FaHandsHelping, FaUsers } from "react-icons/fa"
import { siteIdentity } from "../data/siteIdentity"
import { submitMembershipApplication } from "../data/membershipStore"

function MembershipForm() {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const application = {
      ...Object.fromEntries(formData.entries()),
      enclosures: formData.getAll("enclosures"),
    }

    application.name = application.applicantName || application.organizationName
    application.interest = application.membershipType

    submitMembershipApplication(application)
    setMessage("Thank you. Your membership application has been received. A confirmation email has been recorded in demo mode.")
    event.currentTarget.reset()
  }

  return (
    <>
      <Helmet>
        <title>Membership Form | AVARD</title>
        <meta
          name="description"
          content="Apply for AVARD membership and connect with rural development, voluntary action, and community programs."
        />
      </Helmet>

      <section className="page-hero membership-page-hero">
        <div className="container">
          <span>Membership Form</span>
          <h1>Join AVARD's rural development network</h1>
          <p>
            Submit your details to collaborate through voluntary action,
            community programs, field support, and transparent rural initiatives.
          </p>
        </div>
      </section>

      <section className="membership-section">
        <div className="container membership-layout">
          <aside className="membership-info">
            <span>Form No. 01</span>
            <h2>Official membership application</h2>
            <p>
              To, The General Secretary, Association of Voluntary Agencies for
              Rural Development (AVARD), {siteIdentity.address}.
            </p>
            <ul>
              <li><FaCheckCircle /> Read and agree with AVARD aims and objectives</li>
              <li><FaCheckCircle /> Submit organisation or individual applicant details</li>
              <li><FaCheckCircle /> Keep registration, constitution, office-bearer list, activity report, and audited accounts ready where applicable</li>
            </ul>
          </aside>

          <form className="membership-form" onSubmit={handleSubmit}>
            <div className="membership-form-title">
              <FaUsers />
              <div>
                <span>Membership Application Form</span>
                <h2>Apply for AVARD membership</h2>
              </div>
            </div>

            <label>
              Name of Organisation / Applicant
              <input name="organizationName" placeholder="Name of the organisation or applicant" required />
            </label>

            <label>
              Membership Category
              <select name="membershipType" required defaultValue="">
                <option value="" disabled>Select membership category</option>
                <option>Ordinary Member</option>
                <option>Organisational Member</option>
                <option>Individual Member</option>
                <option>Associate Institutional Member</option>
                <option>Donor Member</option>
                <option>Life Member</option>
              </select>
            </label>

            <div className="two-column-fields">
              <label>
                Applicant / Authorised Person Name
                <input name="applicantName" placeholder="Name in block letters" required />
              </label>
              <label>
                Designation
                <input name="designation" placeholder="Secretary, President, Director..." required />
              </label>
            </div>

            <label>
              Name and Address of Applicant Organisation
              <textarea name="address" placeholder="Complete postal address in block letters" required />
            </label>

            <div className="two-column-fields">
              <label>
                Email
                <input name="email" type="email" placeholder={siteIdentity.email} required />
              </label>
              <label>
                Telephone / Mobile
                <input name="phone" type="tel" placeholder={siteIdentity.secondaryContact} required />
              </label>
            </div>

            <div className="two-column-fields">
              <label>
                Alternate Mobile
                <input name="alternatePhone" type="tel" placeholder="Optional alternate mobile number" />
              </label>
              <label>
                Website, if any
                <input name="website" type="url" placeholder="https://example.org" />
              </label>
            </div>

            <div className="two-column-fields">
              <label>
                City / District
                <input name="city" placeholder="City or district" required />
              </label>
              <label>
                State
                <input name="state" placeholder="State" required />
              </label>
            </div>

            <fieldset className="membership-checklist">
              <legend>Enclosures / Documents</legend>
              <label><input name="enclosures" type="checkbox" value="Registration Certificate" /> Copy of Registration Certificate</label>
              <label><input name="enclosures" type="checkbox" value="Constitution" /> Copy of Constitution</label>
              <label><input name="enclosures" type="checkbox" value="Office Bearers List" /> List of present office-bearers</label>
              <label><input name="enclosures" type="checkbox" value="Activity Report and Audited Accounts" /> Latest activity report and audited accounts</label>
            </fieldset>

            <details className="membership-rules" open>
              <summary>Rules and Regulations for Membership of the Association</summary>
              <div>
                <h3>Membership Categories</h3>
                <p>
                  AVARD will have the following categories of membership:
                  Organisational Member, Individual Member, Associate
                  Institutional Member, Donor Member, and Life Member.
                </p>

                <h4>Organisational Member</h4>
                <p>
                  Any voluntary organisation or institution actively engaged in
                  any form of rural development, or contributing in any manner
                  to the promotion of the aims and objects of AVARD, shall be
                  eligible for membership subject to acceptance by the Executive
                  Committee. Specialised institutions in social and economic
                  fields connected with rural development, training, research,
                  and education may also be eligible subject to acceptance.
                </p>

                <h4>Individual Member</h4>
                <p>
                  The Executive Committee may admit individuals in recognition
                  of their distinguished service in the field of rural
                  development as Individual Members of AVARD.
                </p>

                <h4>Associate Institutional Member</h4>
                <p>
                  Institutions engaged in related activities not covered above,
                  and desirous of being associated with the work of AVARD, shall
                  be eligible for membership subject to acceptance by the
                  Executive Committee.
                </p>

                <h4>Donor Member</h4>
                <p>
                  Any organisation or institution paying a sum of Rs. 1000/- or
                  above per annum will be referred to as a Donor Member. Such
                  organisation or institution will not be entitled to any special
                  rights or privileges other than those of the membership
                  category to which it belongs.
                </p>

                <h4>Life Member</h4>
                <p>
                  Any eligible institution or organisation paying a sum of
                  Rs. 1000/- or more as lump sum shall be eligible for Life
                  Membership of AVARD subject to acceptance by the Executive
                  Committee. A sum of Rs. 10/- is payable as admission fee.
                </p>
              </div>
            </details>

            <label>
              Additional Information
              <textarea name="message" placeholder="Briefly share your organisation's rural development work or membership request" required />
            </label>

            <label className="membership-declaration">
              <input name="declaration" type="checkbox" value="Agreed" required />
              We have read the Memorandum and Rules and Regulations of the Association and are in agreement with its aims and objectives.
            </label>

            <button type="submit" className="primary-btn">
              <FaHandsHelping /> Submit Membership Form
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </section>
    </>
  )
}

export default MembershipForm
