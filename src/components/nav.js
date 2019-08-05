import React from "react"
import { Link } from "gatsby"
import navStyle from "./nav.module.css"

const Nav = () => (
  <header className={navStyle.header}>
    <div>
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
            <a href="#" className={navStyle.navItems}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Nav
