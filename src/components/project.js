import React from "react"
import projectStyle from "./project.module.css"
import ecommerse_project from "../images/ecommerce_site.jpg"
import twitter_project from "../images/twitter_site.jpg"
import blog_project from "../images/blog_site.jpg"

const Project = () => (
  <div className={projectStyle.container}>
    <h1 id="projects" className={projectStyle.projectHeader}>
      Projects
    </h1>
    <div className={projectStyle.project1}>
      <h2>Ecommerse Site</h2>
      <img src={ecommerse_project} alt="" />
      <a
        href="http://ec2-3-17-143-15.us-east-2.compute.amazonaws.com/ecommerce"
        target="_blank"
        className={projectStyle.link}
      >
        Visit
      </a>
    </div>
    <div className={projectStyle.project2}>
      <h2>Twitter Replaca</h2>
      <img src={twitter_project} alt="" />
      <a
        href="http://ec2-3-17-143-15.us-east-2.compute.amazonaws.com/ecommerce"
        target="_blank"
        className={projectStyle.link}
      >
        Visit
      </a>
    </div>
    <div className={projectStyle.project3}>
      <h2>Simple Blog</h2>
      <img src={blog_project} alt="" />
      <a
        href="https://laughing-euler-d5c5a2.netlify.com"
        target="_blank"
        className={projectStyle.link}
      >
        Visit
      </a>
    </div>
    <div className={projectStyle.project4}>
      <h2>Ecommerse Site</h2>
      <img src={ecommerse_project} alt="" />
      <a
        href="http://ec2-3-17-143-15.us-east-2.compute.amazonaws.com/ecommerce"
        target="_blank"
        className={projectStyle.link}
      >
        Visit
      </a>
    </div>
  </div>
)

export default Project
