import jayprakash from "../assets/images/avard-website/photos/shri-jaypraksh-narayan-optimized.jpg"
import kamladevi from "../assets/images/avard-website/photos/smt-kamladevi-chattopadhyay1-1-optimized.jpg"
import acSen from "../assets/images/avard-website/photos/shri-a-c-sen-optimized.jpg"
import dharampal from "../assets/images/avard-website/photos/shr-dharampal-optimized.jpg"
import anna from "../assets/images/avard-website/photos/shri-anna-sahasrbudhe.jpg"
import lcJain from "../assets/images/avard-website/photos/shri-l-c-jain.jpg"
import drBMishra from "../assets/images/avard-website/photos/dr-b-mishra.jpg"
import durgaPrasadSingh from "../assets/images/avard-website/photos/durga-prasad-singh.jpg"
import ajaySMehta from "../assets/images/avard-website/photos/ajay-s-mehta.jpg"
import ramKumar from "../assets/images/avard-website/photos/ram-kumar.jpg"
import surendraKumar from "../assets/images/avard-website/photos/surendra-kumar.jpg"
import drPyareLal from "../assets/images/avard-website/photos/dr-pyare-lal.jpg"

const presidents = [
  { image: kamladevi, name: "Kamaladevi Chattopadhyay", tenure: "December 1958 - April 1960" },
  { image: jayprakash, name: "Jayaprakash Narayan", tenure: "April 1960 - 1979" },
  { name: "K. S. Radhakrishna", tenure: "1979 - 1987" },
  { image: acSen, name: "A. C. Sen", tenure: "1987 - 1994" },
  { name: "P. M. Tripathi", tenure: "1995 - 2020" },
  { image: drBMishra, name: "Dr. B. Mishra", tenure: "2021 - Present" },
]

const generalSecretaries = [
  { image: dharampal, name: "Dharampal", tenure: "1958 - 1964" },
  { image: lcJain, name: "L. C. Jain", tenure: "1964 - 1966 & 1982 - 1983" },
  { image: anna, name: "Annasaheb Sahasrabudhe", tenure: "1966 - 1970" },
  { image: acSen, name: "A. C. Sen", tenure: "1970 - 1980" },
  { name: "P. M. Tripathi", tenure: "1987 - 1994" },
  { name: "Sanjoy Ghose", tenure: "1994 - 1997" },
  { image: ajaySMehta, name: "Ajay S. Mehta", tenure: "1999 - 2001" },
  { image: drBMishra, name: "Dr. B. Mishra", tenure: "2002 - 2006" },
  { name: "R. P. Agrawal", tenure: "2007 - 2011" },
  { image: ramKumar, name: "Ram Kumar", tenure: "2012 - 2013" },
  { image: drBMishra, name: "Dr. B. Mishra", tenure: "2014 - 2016" },
  { image: surendraKumar, name: "Surendra Kumar", tenure: "2017 - 2020" },
  { image: drPyareLal, name: "Dr. Pyare Lal", tenure: "2021 - 2024" },
  { image: durgaPrasadSingh, name: "Durga Prasad Singh", tenure: "2024 - Present" },
]

function getInitials(name) {
  return name
    .replaceAll(".", "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 3)
    .toUpperCase()
}

function LeadershipTrack({ title, eyebrow, leaders }) {
  return (
    <article className="rd-timeline-panel" data-aos="fade-up">
      <div className="rd-timeline-panel-head">
        <span>{eyebrow}</span>
        <h3>{title}</h3>
      </div>

      <ol className="rd-timeline-list">
        {leaders.map((leader) => (
          <li className="rd-timeline-item" key={`${title}-${leader.name}-${leader.tenure}`}>
            <div className="rd-timeline-media">
              {leader.image ? (
                <img src={leader.image} alt={leader.name} loading="lazy" decoding="async" />
              ) : (
                <div className="rd-leader-avatar compact" aria-label={leader.name}>
                  {getInitials(leader.name)}
                </div>
              )}
            </div>

            <div className="rd-timeline-content">
              <span>{leader.tenure}</span>
              <h4>{leader.name}</h4>
            </div>
          </li>
        ))}
      </ol>
    </article>
  )
}

function RuralDevelopmentWeek() {
  return (
    <section className="rd-week-section">
      <div className="container">
        <div className="section-heading rd-week-heading">
          <span>AVARD Leadership Timeline</span>
          <h2>Presidents and General Secretaries of AVARD</h2>
          <p>
            A leadership record drawn from AVARD's official membership and
            organisation documents, covering the people who guided the
            association from 1958 to the present.
          </p>
        </div>

        <div className="rd-timeline-layout" aria-label="AVARD yearwise leadership timeline">
          <LeadershipTrack title="Presidents" eyebrow="1958 - Present" leaders={presidents} />
          <LeadershipTrack title="General Secretaries" eyebrow="1958 - Present" leaders={generalSecretaries} />
        </div>
      </div>
    </section>
  )
}

export default RuralDevelopmentWeek
