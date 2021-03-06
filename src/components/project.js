import React from "react"
import projectStyle from "./project.module.css"
import budget_site from "../images/budget_site.jpg"
import master_blog from "../images/master_blog.jpg"
import ecommerse_project from "../images/ecommerce_site.jpg"
import twitter_project from "../images/twitter_site.jpg"
import blog_project from "../images/blog_site.jpg"
import tetris_project from "../images/tetris_site.jpg"

const Project = () => (
  <div>
    <h1 id="projects" className={projectStyle.projectHeader}>
      Projects
    </h1>
    <div className={projectStyle.container}>
      <div className={projectStyle}>
        <h2>Full Stack Budget App</h2>
        <img src={budget_site} alt="" />
        <a
          href="https://unruffled-allen-850709.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Visit
        </a>
        <a
          href="https://github.com/faluoke/budget-app-ui"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Source Code
        </a>
      </div>
      <div className={projectStyle}>
        <h2>Full Stack Blog</h2>
        <img src={master_blog} alt="" />
        <a
          href="https://mirzakhani-3b28e3.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Visit
        </a>
        <a
          href="https://github.com/faluoke/master-blog-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Source Code
        </a>
      </div>
      <div className={projectStyle}>
        <h2>Ecommerse Site</h2>
        <img src={ecommerse_project} alt="" />
        <a
          href="http://ec2-3-17-143-15.us-east-2.compute.amazonaws.com/ecommerce"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Visit
        </a>
        <a
          href="https://github.com/faluoke/an-online-shop"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Source Code
        </a>
      </div>
      {/* <div className={projectStyle}>
        <h2>Twitter Replica</h2>
        <img src={twitter_project} alt="" />
        <a
          href="http://ec2-3-17-143-15.us-east-2.compute.amazonaws.com/level2/ce/ce11/"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Visit
        </a>
        <a
          href="https://github.com/faluoke/twitter-replica"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Source Code
        </a>
      </div>

      <div className={projectStyle}>
        <h2>Tetris Project</h2>
        <img src={tetris_project} alt="" className={projectStyle.img} />
        <a
          href="https://vigorous-villani-be870c.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Visit
        </a>
        <a
          href="https://github.com/faluoke/curly-garbanzo"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Source Code
        </a>
      </div>
      <div className={projectStyle}>
        <h2>Simple Blog</h2>
        <img src={blog_project} alt="" />
        <a
          href="https://laughing-euler-d5c5a2.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Visit
        </a>
        <a
          href="https://github.com/faluoke/a-simple-blog"
          target="_blank"
          rel="noopener noreferrer"
          className={projectStyle.link}
        >
          Source Code
        </a>
      </div> */}
    </div>
  </div>
)

export default Project
