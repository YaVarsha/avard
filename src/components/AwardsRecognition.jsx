import { FaAward, FaCertificate, FaHandsHelping, FaShieldAlt } from "react-icons/fa"

const awards = [
  {
    icon: <FaAward />,
    title: "Rural Development Legacy",
    text: "Recognised for sustained voluntary action and rural development work since 1958.",
  },
  {
    icon: <FaCertificate />,
    title: "Grassroots Institution Building",
    text: "Strengthening voluntary agencies, community groups, and rural leadership networks.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Trust",
    text: "Built through transparent program delivery and long-term local engagement.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Donor Confidence",
    text: "Public trust details, transparent communication, and clear donation pathways for supporters.",
  },
]

function AwardsRecognition() {
  return (
    <section className="awards-section">
      <div className="container">
        <div className="section-heading">
          <span>Awards & Recognition</span>
          <h2>Trusted for decades of rural development action</h2>
          <p>
            AVARD's strength comes from consistent field work, voluntary
            collaboration, and community-centred development.
          </p>
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <article className="award-card" key={award.title} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AwardsRecognition
