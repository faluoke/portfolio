import React from "react"
import navStyle from "./nav.module.css"

const Nav = () => (
  <header className={navStyle.header}>
    <div>
      <nav className={navStyle.nav}>
        <div>
          <a href="#" className={navStyle.title}>
            <h1>Portfolio</h1>
          </a>
        </div>
        <ul className={navStyle.navList}>
          <li>
            <a href="#" className={navStyle.navItems}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className={navStyle.navItems}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" className={navStyle.navItems}>
              Resume
            </a>
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
