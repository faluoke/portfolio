import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import indexStyle from "./index.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Project from "../components/project"

export default props => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyle.container}>
      <Img fluid={props.data.file.childImageSharp.fluid} />
      <div className={indexStyle.text}>
        <p className={indexStyle.textContent}>Hi, I am</p>
        <p className={indexStyle.textContent}>A developer, and a CS student</p>
        <p className={indexStyle.textContent}>Living in Salt Lake City, Utah</p>
        <div>
          <button className={indexStyle.button}>
            <a href="#projects">Check Out My Projects</a>
          </button>
        </div>
      </div>
    </div>
    <Project />
  </Layout>
)

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "programming.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 5500, quality: 100, maxHeight: 2600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
