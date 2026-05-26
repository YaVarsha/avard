import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link, useNavigate } from "react-router-dom"
import { FaBullhorn, FaChartLine, FaDonate, FaEnvelopeOpenText, FaIdBadge, FaSignOutAlt, FaUsers } from "react-icons/fa"
import { siteIdentity } from "../data/siteIdentity"

const defaultSettings = {
  charityId: siteIdentity.charityId,
  upiId: siteIdentity.upiId,
  phone: "+91 98765 43210",
  email: "support@avard.org",
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
            <article><FaUsers /><span>Donors</span><strong>94</strong></article>
            <article><FaBullhorn /><span>Campaigns</span><strong>6</strong></article>
            <article><FaEnvelopeOpenText /><span>Newsletters</span><strong>12</strong></article>
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
              <label>Charity ID<input name="charityId" value={settings.charityId} onChange={updateSetting} /></label>
              <label>UPI ID<input name="upiId" value={settings.upiId} onChange={updateSetting} /></label>
              <label>Contact phone<input name="phone" value={settings.phone} onChange={updateSetting} /></label>
              <label>Contact email<input name="email" value={settings.email} onChange={updateSetting} /></label>
              <button type="submit">Save Settings</button>
            </form>

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
