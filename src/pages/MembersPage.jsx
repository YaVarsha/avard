import { useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { FaIdBadge, FaMapMarkerAlt } from "react-icons/fa"
import { getMembers } from "../data/membershipStore"

function MembersPage() {
  const members = useMemo(() => getMembers(), [])

  return (
    <>
      <Helmet>
        <title>Members | AVARD</title>
        <meta name="description" content="View active AVARD members who are part of the rural development network." />
      </Helmet>

      <section className="page-hero members-page-hero">
        <div className="container">
          <span>Member Portal</span>
          <h1>AVARD members network</h1>
          <p>
            Approved and paid members are listed here after admin verification.
          </p>
        </div>
      </section>

      <section className="members-section">
        <div className="container">
          <div className="section-heading">
            <span>Active Members</span>
            <h2>People connected with AVARD's rural mission</h2>
          </div>

          {members.length === 0 ? (
            <div className="members-empty">
              <FaIdBadge />
              <h2>No active members yet</h2>
              <p>Approved members will appear here after payment verification.</p>
            </div>
          ) : (
            <div className="members-grid">
              {members.map((member) => (
                <article className="member-card" key={member.id}>
                  <div><FaIdBadge /></div>
                  <span>{member.membershipType}</span>
                  <h3>{member.name}</h3>
                  <p><FaMapMarkerAlt /> {member.city}, {member.state}</p>
                  <small>Receipt: {member.receiptId}</small>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default MembersPage
