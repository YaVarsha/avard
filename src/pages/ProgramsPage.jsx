import { Helmet } from "react-helmet-async"
import { FaBookOpen, FaFemale, FaFootballBall, FaHandsHelping, FaHeartbeat, FaLeaf, FaPeopleCarry, FaTractor } from "react-icons/fa"
import DonationSection from "../components/DonationSection"

const programs = [
  { icon: <FaTractor />, title: "Sustainable Agriculture", text: "Farmer meetings, awareness sessions, natural resource management, and practical livelihood support." },
  { icon: <FaFemale />, title: "Women Empowerment", text: "Support for self-help groups, leadership development, savings habits, and local enterprise skills." },
  { icon: <FaBookOpen />, title: "Education Access", text: "Learning support, mentoring, materials, and encouragement for children from underserved communities." },
  { icon: <FaHeartbeat />, title: "Health Awareness", text: "Community sessions focused on preventive care, hygiene, nutrition, and access to basic services." },
  { icon: <FaLeaf />, title: "Environment Action", text: "Local campaigns for water, soil, biodiversity, climate awareness, and responsible resource use." },
  { icon: <FaPeopleCarry />, title: "NGO Networking", text: "Collaboration, knowledge sharing, and capacity building for voluntary agencies across India." },
  { icon: <FaHandsHelping />, title: "Animal Farming Society", text: "Livestock care, dairy support, animal-based livelihood training, and income-building guidance for rural families." },
  { icon: <FaFootballBall />, title: "Sports for Rural Youth", text: "Village sports activities that build teamwork, confidence, discipline, fitness, and leadership among children and youth." },
]

function ProgramsPage() {
  return (
    <>
      <Helmet>
        <title>Programs | AVARD</title>
        <meta name="description" content="Explore AVARD programs in rural livelihoods, women empowerment, education, health, environment, and NGO networking." />
      </Helmet>

      <section className="page-hero programs-page-hero">
        <div className="container">
          <span>Our Programs</span>
          <h1>Focused work for stronger rural communities</h1>
          <p>
            AVARD programs are designed to be practical, locally rooted, and
            useful for communities, volunteers, and partner organisations.
          </p>
        </div>
      </section>

      <section className="programs-section">
        <div className="container">
          <div className="section-heading">
            <span>Community Programs</span>
            <h2>Practical support across rural life</h2>
            <p>
              Each program focuses on everyday needs, local participation, and
              long-term confidence for families and communities.
            </p>
          </div>

          <div className="program-grid">
            {programs.map((program, index) => (
              <article className="program-card" key={program.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="program-icon">{program.icon}</div>
                <h2>{program.title}</h2>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DonationSection />
    </>
  )
}

export default ProgramsPage
