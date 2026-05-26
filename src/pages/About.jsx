import { Helmet } from "react-helmet-async"
import { FaBalanceScale, FaChartLine, FaHandshake, FaLeaf } from "react-icons/fa"
import AboutSection from "../components/AboutSection"
import DonationSection from "../components/DonationSection"

const values = [
  {
    icon: <FaHandshake />,
    title: "Community-led",
    text: "Programs begin with village realities, local leadership, and the voices of people who understand their own needs best.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Secular and non-political",
    text: "AVARD works as a voluntary platform focused on cooperation, dignity, and public good beyond partisan interests.",
  },
  {
    icon: <FaChartLine />,
    title: "Transparent action",
    text: "Donor support is connected to practical activities, clear communication, and accountable grassroots delivery.",
  },
  {
    icon: <FaLeaf />,
    title: "Sustainable impact",
    text: "The work is designed around long-term self-reliance, livelihood strength, and responsible development.",
  },
]

function About() {
  return (
    <>
      <Helmet>
        <title>About AVARD | Rural Development NGO</title>
        <meta name="description" content="Learn about AVARD, a national voluntary association working with rural communities and grassroots organisations across India." />
      </Helmet>

      <section className="page-hero about-page-hero">
        <div className="container">
          <span>About AVARD</span>
          <h1>A national platform for voluntary action and rural development</h1>
          <p>
            Since 1958, AVARD has worked to connect voluntary agencies, strengthen
            local leadership, and support practical development in rural India.
          </p>
        </div>
      </section>

      <AboutSection />

      <section className="values-section">
        <div className="container">
          <div className="section-heading values-heading">
            <span>How AVARD Works</span>
            <h2>Principles that keep rural development accountable</h2>
          </div>
          <div className="values-grid">
            {values.map((item, index) => (
              <div className="value-card" key={item.title} data-aos="fade-up" data-aos-delay={index * 80}>
                <div className="value-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonationSection />
    </>
  )
}

export default About
