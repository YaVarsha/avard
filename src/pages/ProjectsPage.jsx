import { Helmet } from "react-helmet-async"
import DonationSection from "../components/DonationSection"
import projectOne from "../assets/images/avard-website/photos/cards/1.jpg"
import projectTwo from "../assets/images/avard-website/photos/cards/2.webp"
import projectThree from "../assets/images/avard-website/photos/cards/3.jpg"

const projects = [
  {
    image: projectOne,
    title: "Village livelihood training",
    text: "Skill-building sessions that help families strengthen local income options and financial confidence.",
  },
  {
    image: projectTwo,
    title: "Education support drive",
    text: "Learning kits, mentoring, and school-readiness support for children in underserved rural areas.",
  },
  {
    image: projectThree,
    title: "Community environment action",
    text: "Village-level awareness and action for water, biodiversity, plantation, and cleaner local surroundings.",
  },
]

function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Projects | AVARD Impact Work</title>
        <meta name="description" content="See AVARD project areas and donation-backed rural development work across livelihoods, education, and environment." />
      </Helmet>

      <section className="page-hero projects-page-hero">
        <div className="container">
          <span>Impact Projects</span>
          <h1>Practical work that donors can understand and communities can feel</h1>
          <p>
            These project areas show how donations are directed toward real
            rural needs with measurable, human outcomes.
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              <div>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <DonationSection />
    </>
  )
}

export default ProjectsPage
