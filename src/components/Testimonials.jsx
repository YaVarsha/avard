import { FaQuoteLeft, FaStar } from "react-icons/fa"

const testimonials = [
  {
    name: "Sunita Devi",
    role: "Self-help group member",
    quote:
      "The livelihood training helped our group start regular savings and earn through local produce. We now plan our work with confidence.",
  },
  {
    name: "Ramesh Kumar",
    role: "Farmer partner",
    quote:
      "AVARD connected us with practical farming support and market awareness. The sessions were simple, respectful, and useful for our village.",
  },
  {
    name: "Anjali Sharma",
    role: "Volunteer educator",
    quote:
      "I saw how small donations become notebooks, mentoring sessions, and real encouragement for children who want to continue school.",
  },

  
]

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-heading" data-aos="fade-up">
          <span>Community Voices</span>
          <h2>Stories from people your support reaches</h2>
          <p>
            Every contribution helps AVARD keep grassroots programs practical,
            accountable, and close to the people they serve.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article className="testimonial-card" key={item.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <FaQuoteLeft className="quote-icon" />
              <div className="rating" aria-label="Five star rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
              <p>{item.quote}</p>
              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
