import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom"
import { FaLock, FaUserShield } from "react-icons/fa"
import { siteIdentity } from "../data/siteIdentity"

function AdminLogin() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: "", password: "" })
  const [error, setError] = useState("")

  const updateForm = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const submitLogin = (event) => {
    event.preventDefault()
    setError("")

    if (!form.email.trim() || !form.password.trim()) {
      setError("Please enter admin email and password.")
      return
    }

    localStorage.setItem("avard-admin-session", JSON.stringify({ email: form.email, loggedInAt: new Date().toISOString() }))
    navigate("/admin/dashboard")
  }

  return (
    <>
      <Helmet>
        <title>Admin Panel | AVARD</title>
      </Helmet>

      <section className="admin-login-section">
        <div className="admin-login-card">
          <div className="admin-login-icon"><FaUserShield /></div>
          <span>AVARD Admin Panel</span>
          <h1>Manage donations, newsletters, and trust details</h1>
          <form onSubmit={submitLogin}>
            <label>
              Admin email
              <input name="email" type="email" value={form.email} onChange={updateForm} placeholder={siteIdentity.email} />
            </label>
            <label>
              Password
              <input name="password" type="password" value={form.password} onChange={updateForm} placeholder="Enter password" />
            </label>
            <button type="submit"><FaLock /> Open Dashboard</button>
            {error && <p>{error}</p>}
          </form>
          <small>Demo panel only. Connect backend authentication before public launch.</small>
        </div>
      </section>
    </>
  )
}

export default AdminLogin
