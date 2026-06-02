import drBMishra from "../assets/images/avard-website/photos/dr-b-mishra.jpg"
import durgaPrasadSingh from "../assets/images/avard-website/photos/durga-prasad-singh.jpg"

const people = [
  {
    name: "Dr. B. Mishra",
    position: "President",
    year: "2021 - Present",
    initials: "BM",
    image: drBMishra,
    note: "Leading AVARD's rural development work with a focus on accountable voluntary action and grassroots coordination.",
  },
  {
    name: "Durga Prasad Singh",
    position: "General Secretary",
    year: "2024 - Present",
    initials: "DPS",
    image: durgaPrasadSingh,
    note: "Coordinating membership, programs, and field communication for AVARD's current organisational priorities.",
  },
]

function PeopleHighlights() {
  return (
    <section className="people-highlight-section">
      <div className="container">
        <div className="section-heading">
          <span>Current Office-Bearers</span>
          <h2>Leadership guiding AVARD today</h2>
          <p>
            Current leadership details updated from AVARD's organisation
            document and membership application records.
          </p>
        </div>

        <div className="people-highlight-grid">
          {people.map((person) => (
            <article className="people-highlight-card" key={person.name} data-aos="fade-up">
              <div className="people-highlight-media">
                {person.image ? (
                  <img src={person.image} alt={person.name} loading="lazy" decoding="async" />
                ) : (
                  <div className="people-highlight-avatar" aria-label={person.name}>{person.initials}</div>
                )}
              </div>
              <div className="people-highlight-content">
                <span className="people-highlight-year">{person.year}</span>
                <small>Current office bearer</small>
                <h3>{person.name}</h3>
                <p className="people-highlight-role">{person.position}</p>
                <p className="people-highlight-note">{person.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PeopleHighlights
