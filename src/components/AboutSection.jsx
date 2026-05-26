import { Link } from "react-router-dom"
import GoalCard from "./GoalCard"
import "../styles/AboutSection.css"
import aboutImg from "../assets/images/avard-website/photos/banner.jpg"

function AboutSection() {
  const goals = [
    {
      title: "Main Objective",
      text: "To promote cooperation and understanding among voluntary agencies working for the rural communities in India.",
    },
    {
      title: "Our Vision",
      text: "Deeply influenced by its genesis and promoters, AVARD's vision is a free, autonomous, self-reliant, non-exploitative, egalitarian Indian society.",
    },
    {
      title: "Our Mission",
      text: "To network and strengthen voluntary agencies and synergise voluntary action to facilitate society's continuing quest for freedom.",
    },
  ]

  return (
    <section className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="section-eyebrow">About AVARD</span>
          <h2>Who We Are</h2>
          <p className="about-intro">
            AVARD is a well known open, secular, non-political, non-profit
            national association of voluntary agencies engaged in rural
            development throughout India.
          </p>
        </div>

        <div className="about-feature">
          <div className="about-image-wrap">
            <img src={aboutImg} alt="AVARD rural development community work" loading="lazy" decoding="async" />
          </div>

          <div>
            <div className="about-description">
              <p>
                The Association of Voluntary Agencies for Rural Development
                (AVARD) is a national platform for voluntary agencies,
                grassroots partners, and community-based organisations working
                for rural transformation.
              </p>

              <p>
                AVARD supports collaboration among civil society organisations,
                government bodies, and field workers to strengthen self-reliant,
                inclusive, and people-led rural communities.
              </p>
            </div>

            <div className="about-proof-grid">
              <div>
                <strong>1958</strong>
                <span>Year of establishment</span>
              </div>
              <div>
                <strong>23</strong>
                <span>States in India</span>
              </div>
              <div>
                <strong>341</strong>
                <span>AVARD members</span>
              </div>
            </div>
          </div>
        </div>

        <div className="goals-grid">
          {goals.map((goal) => (
            <GoalCard key={goal.title} title={goal.title} text={goal.text} />
          ))}
        </div>

        <div className="about-cta fade-up">
          <div className="cta-ribbon">ABOUT OUR COMMUNITY DEVELOPMENT</div>
          <Link className="cta-box" to="/donate">
            BE A PART OF INDIA'S GROWTH STORY
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
