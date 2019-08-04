import React from "react"
import layoutStyle from "./layout.module.css"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => (
  <div className={layoutStyle.container}>
    <div>
      <Nav />
    </div>

    {children}
    <Footer />
  </div>
)

export default Layout
