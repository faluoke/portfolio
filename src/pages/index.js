import React, { Component } from "react"
import indexStyle from "./index.module.css"
import programming from "../images/programming.jpg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <div className={indexStyle.container}>
          <div className={indexStyle.text}>
            <p className={indexStyle.textContent}>Hi, I am Faluoke</p>
            <p className={indexStyle.textContent}>A Developer</p>
            <p className={indexStyle.textContent}>
              Currently living in Salt Lake City
            </p>
            <button className={indexStyle.button}>
              <a className={indexStyle.button} href="#projects">
                Go to Projects
              </a>
            </button>
          </div>

          <img
            src={programming}
            alt="programming"
            className={indexStyle.imgDisplay}
          />
        </div>
        <Project />
      </Layout>
    )
  }
}

export default IndexPage
