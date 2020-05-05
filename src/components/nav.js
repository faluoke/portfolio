import React from "react"
import { Link } from "gatsby"
import navStyle from "./nav.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Nav = () => (
  <header className={navStyle.header}>
    <nav className={navStyle.nav}>
      <div>
        <Link to="/" className={navStyle.title}>
          <h1>Portfolio</h1>
        </Link>
      </div>
      <ul className={navStyle.navList}>
        <li>
          <Link to="/" className={navStyle.navItems}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#projects" className={navStyle.navItems}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" className={navStyle.navItems}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className={navStyle.navItems}>
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/faluoke"
            target="_blank"
            className={navStyle.navItems}
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
      </ul>
    </nav>
    <nav>
      <ul className={navStyle.mobileNavList}>
        <li>
          <Link to="/resume" className={navStyle.mobileNavItems}>
            Resume
          </Link>
        </li>
        <li>
          <Link to="/contact" className={navStyle.mobileNavItems}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Nav
