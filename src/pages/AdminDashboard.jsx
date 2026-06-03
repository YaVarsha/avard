import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useNavigate } from "react-router-dom"
import { FaBullhorn, FaChartLine, FaCheckCircle, FaDonate, FaEnvelopeOpenText, FaFileInvoice, FaIdBadge, FaSignOutAlt, FaTimesCircle, FaUsers } from "react-icons/fa"
import { siteIdentity } from "../data/siteIdentity"
import {
  approveMembershipApplication,
  buildMembershipReceiptText,
  getEmailLog,
  getMembers,
  getMembershipApplications,
  markMembershipPaymentReceived,
  rejectMembershipApplication,
} from "../data/membershipStore"

const defaultSettings = {
  upiId: siteIdentity.upiId,
  phone: siteIdentity.phone,
  email: siteIdentity.email,
}

const pledges = [
  { name: "Ravi Kumar", amount: "Rs. 2,500", program: "Women empowerment", status: "Follow up" },
  { name: "Neha Singh", amount: "Rs. 1,000", program: "Education access", status: "Receipt pending" },
  { name: "Amit Verma", amount: "Rs. 5,000", program: "Farmer support", status: "Confirmed" },
]

function AdminDashboard() {
  const navigate = useNavigate()
  const [settings, setSettings] = useState(() => {
    const savedSettings = localStorage.getItem("avard-admin-settings")
    return savedSettings ? JSON.parse(savedSettings) : defaultSettings
  })
  const [newsletter, setNewsletter] = useState(() => localStorage.getItem("avard-admin-newsletter") || "Rural development field update: add today's newsletter summary here.")
  const [applications, setApplications] = useState(() => getMembershipApplications())
  const [members, setMembers] = useState(() => getMembers())
  const [emailLog, setEmailLog] = useState(() => getEmailLog())

  useEffect(() => {
    const session = localStorage.getItem("avard-admin-session")
    if (!session) {
      navigate("/admin")
      return
    }

  }, [navigate])

  const updateSetting = (event) => {
    const { name, value } = event.target
    setSettings((current) => ({ ...current, [name]: value }))
  }

  const saveSettings = (event) => {
    event.preventDefault()
    localStorage.setItem("avard-admin-settings", JSON.stringify(settings))
    localStorage.setItem("avard-admin-newsletter", newsletter)
  }

  const logout = () => {
    localStorage.removeItem("avard-admin-session")
    navigate("/admin")
  }

  const refreshMembershipData = () => {
    setApplications(getMembershipApplications())
    setMembers(getMembers())
    setEmailLog(getEmailLog())
  }

  const approveApplication = (applicationId) => {
    approveMembershipApplication(applicationId)
    refreshMembershipData()
  }

  const rejectApplication = (applicationId) => {
    rejectMembershipApplication(applicationId)
    refreshMembershipData()
  }

  const confirmPayment = (applicationId) => {
    markMembershipPaymentReceived(applicationId)
    refreshMembershipData()
  }

  const downloadReceipt = (application) => {
    const receipt = buildMembershipReceiptText(application)
    const blob = new Blob([receipt], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")

    link.href = url
    link.download = `${application.receiptId || application.id}-receipt.txt`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | AVARD</title>
      </Helmet>

      <section className="admin-dashboard">
        <aside className="admin-sidebar">
          <Link className="admin-brand" to="/">AVARD</Link>
          <nav>
            <a href="#overview"><FaChartLine /> Overview</a>
            <a href="#pledges"><FaDonate /> Donations</a>
            <a href="#membership-admin"><FaUsers /> Membership</a>
            <a href="#members-list"><FaIdBadge /> Members</a>
            <a href="#email-log"><FaEnvelopeOpenText /> Email Log</a>
            <a href="#newsletter-admin"><FaEnvelopeOpenText /> Newsletter</a>
            <a href="#trust-settings"><FaIdBadge /> Trust Settings</a>
          </nav>
          <button type="button" onClick={logout}><FaSignOutAlt /> Logout</button>
        </aside>

        <div className="admin-content">
          <div className="admin-topbar">
            <div>
              <span>Admin Dashboard</span>
              <h1>Donation and content control centre</h1>
            </div>
            <Link to="/donate">View Donation Page</Link>
          </div>

          <div className="admin-stat-grid" id="overview">
            <article><FaDonate /><span>Total Pledges</span><strong>128</strong></article>
            <article><FaUsers /><span>Membership Requests</span><strong>{applications.length}</strong></article>
            <article><FaBullhorn /><span>Campaigns</span><strong>6</strong></article>
            <article><FaEnvelopeOpenText /><span>Email Notices</span><strong>{emailLog.length}</strong></article>
          </div>

          <div className="admin-panel-grid">
            <section className="admin-panel" id="pledges">
              <h2>Recent donation pledges</h2>
              <div className="admin-table">
                {pledges.map((pledge) => (
                  <div key={`${pledge.name}-${pledge.amount}`}>
                    <span>{pledge.name}</span>
                    <span>{pledge.amount}</span>
                    <span>{pledge.program}</span>
                    <strong>{pledge.status}</strong>
                  </div>
                ))}
              </div>
            </section>

            <form className="admin-panel" id="trust-settings" onSubmit={saveSettings}>
              <h2>Donation and trust settings</h2>
              <label>UPI ID<input name="upiId" value={settings.upiId} onChange={updateSetting} /></label>
              <label>Contact phone<input name="phone" value={settings.phone} onChange={updateSetting} /></label>
              <label>Contact email<input name="email" value={settings.email} onChange={updateSetting} /></label>
              <button type="submit">Save Settings</button>
            </form>

            <section className="admin-panel membership-admin-panel" id="membership-admin">
              <h2>Membership applications</h2>
              <div className="membership-admin-list">
                {applications.length === 0 && <p className="admin-empty">No membership applications yet.</p>}

                {applications.map((application) => (
                  <article className="membership-admin-card" key={application.id}>
                    <div className="membership-admin-card-header">
                      <div>
                        <span>{application.membershipType}</span>
                        <h3>{application.organizationName || application.name}</h3>
                        <p>{application.email} | {application.phone}</p>
                      </div>
                      <strong className={`membership-status status-${application.status.toLowerCase().replaceAll(" ", "-")}`}>
                        {application.status}
                      </strong>
                    </div>

                    <dl>
                      <div><dt>Applicant</dt><dd>{application.applicantName || application.name}</dd></div>
                      <div><dt>Designation</dt><dd>{application.designation || "Not provided"}</dd></div>
                      <div><dt>Address</dt><dd>{application.address}</dd></div>
                      <div><dt>Location</dt><dd>{application.city}, {application.state}</dd></div>
                      <div><dt>Website</dt><dd>{application.website || "Not provided"}</dd></div>
                      <div><dt>Enclosures</dt><dd>{application.enclosures?.length ? application.enclosures.join(", ") : "Not confirmed"}</dd></div>
                      <div><dt>Payment</dt><dd>{application.paymentStatus}</dd></div>
                    </dl>

                    <p>{application.message}</p>

                    <div className="membership-admin-actions">
                      <button type="button" onClick={() => approveApplication(application.id)} disabled={application.status !== "Pending Review"}>
                        <FaCheckCircle /> Approve
                      </button>
                      <button type="button" onClick={() => rejectApplication(application.id)} disabled={application.status !== "Pending Review"}>
                        <FaTimesCircle /> Reject
                      </button>
                      <button type="button" onClick={() => confirmPayment(application.id)} disabled={application.status !== "Approved"}>
                        <FaDonate /> Mark Paid
                      </button>
                      <button type="button" onClick={() => downloadReceipt(application)} disabled={application.paymentStatus !== "Paid"}>
                        <FaFileInvoice /> Receipt
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="admin-panel" id="members-list">
              <h2>Active members</h2>
              <div className="admin-table">
                {members.length === 0 && <p className="admin-empty">No active members yet.</p>}
                {members.map((member) => (
                  <div key={member.id}>
                    <span>{member.name}</span>
                    <span>{member.membershipType}</span>
                    <span>{member.city}, {member.state}</span>
                    <strong>{member.receiptId}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="admin-panel email-log-panel" id="email-log">
              <h2>Email notification log</h2>
              <div className="email-log-list">
                {emailLog.length === 0 && <p className="admin-empty">No email notifications recorded yet.</p>}
                {emailLog.slice(0, 8).map((email) => (
                  <article key={email.id}>
                    <span>{email.type}</span>
                    <h3>{email.subject}</h3>
                    <p><strong>To:</strong> {email.to}</p>
                    <p>{email.body}</p>
                  </article>
                ))}
              </div>
              <small>Demo mode records email messages locally. Connect an email service to send real messages.</small>
            </section>

            <section className="admin-panel newsletter-admin-panel" id="newsletter-admin">
              <h2>Daily newsletter content</h2>
              <textarea value={newsletter} onChange={(event) => setNewsletter(event.target.value)} />
              <button type="button" onClick={saveSettings}>Save Newsletter Draft</button>
              <small>This stores a draft locally. Connect a database to publish live daily updates.</small>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminDashboard
