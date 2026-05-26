const partners = [
  "Voluntary Agencies",
  "Rural Communities",
  "Farmer Groups",
  "Women Collectives",
  "Education Supporters",
  "Development Donors",
]

function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="container partners-layout">
        <div className="partners-copy">
          <span>Our Partners</span>
          <h2>Working together with people-first institutions</h2>
          <p>
            AVARD collaborates with grassroots organisations, local leadership,
            donors, and community groups to keep rural development practical,
            accountable, and close to the people it serves.
          </p>
        </div>

        <div className="partners-grid" aria-label="AVARD partner categories">
          {partners.map((partner) => (
            <div className="partner-logo-card" key={partner}>
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
