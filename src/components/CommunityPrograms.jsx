import { FaBriefcase, FaFemale, FaHandsHelping, FaTools } from "react-icons/fa"

const programs = [
  {
    icon: <FaFemale />,
    title: "Women's Empowerment",
    text: "Strengthening rural women's participation, leadership, savings groups, and confidence in community development.",
  },
  {
    icon: <FaTools />,
    title: "Rural Technologies",
    text: "Encouraging practical, locally useful technologies that improve productivity and quality of life in villages.",
  },
  {
    icon: <FaBriefcase />,
    title: "Generating Employment",
    text: "Supporting skill development, local enterprise, and livelihood pathways for rural youth and families.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Enhancing Livelihood",
    text: "Promoting community-led livelihood planning, farmer support, and sustainable development practices.",
  },
]

function CommunityPrograms() {
  return (
    <section className="community-programs-section">
      <div className="container">
        <div className="section-heading">
          <span>Community Programs</span>
          <h2>Focused action for stronger rural communities</h2>
          <p>
            AVARD's community programs connect voluntary agencies, local
            leadership, and practical support for rural transformation.
          </p>
        </div>

        <div className="community-program-grid">
          {programs.map((program, index) => (
            <article className="community-program-card" key={program.title} data-aos="fade-up" data-aos-delay={index * 80}>
              <div className="community-program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityPrograms
