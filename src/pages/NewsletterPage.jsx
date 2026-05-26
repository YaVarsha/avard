import { useState } from "react"
import { Helmet } from "react-helmet-async"
import { FaEnvelopeOpenText, FaLeaf, FaNewspaper, FaPaperPlane, FaUsers } from "react-icons/fa"
import { getLatestNewsletterIssue, newsletterIssues } from "../data/newsletterIssues"

const updates = [
  {
    icon: <FaNewspaper />,
    title: "AVARD Quest For Freedom",
    text: "Updates on voluntary action, rural development, community leadership, and AVARD initiatives.",
  },
  {
    icon: <FaUsers />,
    title: "Community Programs",
    text: "Stories from women empowerment, farmer support, rural technologies, and livelihood programs.",
  },
  {
    icon: <FaLeaf />,
    title: "Field Impact Notes",
    text: "Short reports from campaigns, meetings, training sessions, and partner-led rural development work.",
  },
]

function NewsletterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "" })
  const [message, setMessage] = useState("")
  const latestIssue = getLatestNewsletterIssue()

  const updateForm = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim()) {
      setMessage("Please enter your name and email address.")
      return
    }

    setMessage("Thank you for subscribing to AVARD updates.")
    setForm({ name: "", email: "", phone: "" })
  }

  return (
    <>
      <Helmet>
        <title>Newsletter | AVARD Quest For Freedom</title>
        <meta
          name="description"
          content="Subscribe to AVARD newsletter updates on rural development, community programs, voluntary action, and impact stories."
        />
      </Helmet>

      <section className="page-hero newsletter-page-hero">
        <div className="container">
          <span>AVARD Newsletter</span>
          <h1>Subscribe to AVARD Quest For Freedom</h1>
          <p>
            Stay connected with rural development updates, community programs,
            field stories, and opportunities to support AVARD's work.
          </p>
        </div>
      </section>

      <section className="newsletter-page-section">
        <div className="container newsletter-page-layout">
          <div className="newsletter-copy">
            <span className="section-eyebrow">Stay connected</span>
            <h2>Receive practical updates from AVARD's rural development work</h2>
            <p>
              Inspired by AVARD's existing newsletter subscription area, this
              page gives supporters one clear place to follow programs, events,
              donation campaigns, and field impact.
            </p>

            <div className="newsletter-update-grid">
              {updates.map((item) => (
                <article className="newsletter-update-card" key={item.title}>
                  <div>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <section className="daily-newsletter-panel">
              <div className="daily-newsletter-header">
                <span className="section-eyebrow">Latest daily issue</span>
                <time dateTime={latestIssue.date}>
                  {new Date(`${latestIssue.date}T00:00:00`).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
              <h2>{latestIssue.title}</h2>
              <p>{latestIssue.summary}</p>
              <ul>
                {latestIssue.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section className="newsletter-archive">
              <span className="section-eyebrow">Newsletter archive</span>
              <div className="newsletter-archive-list">
                {newsletterIssues.slice(1).map((issue) => (
                  <article key={issue.date}>
                    <time dateTime={issue.date}>
                      {new Date(`${issue.date}T00:00:00`).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                    <h3>{issue.title}</h3>
                    <p>{issue.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <form className="newsletter-page-form" onSubmit={handleSubmit}>
            <div className="newsletter-form-icon">
              <FaEnvelopeOpenText />
            </div>
            <h2>Subscribe to our newsletter</h2>
            <label>
              Full name
              <input name="name" value={form.name} onChange={updateForm} placeholder="Your name" />
            </label>
            <label>
              Email address
              <input name="email" type="email" value={form.email} onChange={updateForm} placeholder="you@example.com" />
            </label>
            <label>
              Mobile number, optional
              <input name="phone" value={form.phone} onChange={updateForm} placeholder="+91..." />
            </label>
            <button type="submit" className="submit-donation">
              <FaPaperPlane />
              Submit
            </button>
            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </section>
    </>
  )
}

export default NewsletterPage
