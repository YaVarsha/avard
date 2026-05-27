import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Projects", to: "/projects" },
  { label: "Newsletter", to: "/newsletter" },
  { label: "Contact", to: "/contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header" id="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <div className="container nav-inner">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img src="/avard-logo.png" alt="AVARD logo" className="logo" width="68" height="58" />
            <span className="brand-text">
              <strong>AVARD</strong>
              <small>Rural Development</small>
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active-link" : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link className="nav-donate" to="/donate" onClick={closeMenu}>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
