import React from "react"

import SEO from "../components/seo"
import { Link } from "gatsby"
import Layout from "../components/layout"
import resumeStyle from "./resume.module.css"
import html_logo from "../images/html.png"
import css_logo from "../images/css.png"
import javascript_logo from "../images/javascript.png"
import react_logo from "../images/react.png"
import nodejs_logo from "../images/nodejs.png"
import php_logo from "../images/php.png"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <div className={resumeStyle.wrapper}>
      <div id="resume" className={resumeStyle.container}>
        <h2 className={[resumeStyle.header]}>Skills</h2>
        <div className={resumeStyle.text}>
          <div>
            <h3>HTML</h3>
            <img
              src={html_logo}
              alt="html logo"
              className={resumeStyle.img}
            ></img>
          </div>
          <div>
            <h3>CSS</h3>
            <img
              src={css_logo}
              alt="css logo"
              className={resumeStyle.img}
            ></img>
          </div>
          <div>
            <h3>JavaScript</h3>
            <img
              src={javascript_logo}
              alt="javascript logo"
              className={resumeStyle.img}
            ></img>
          </div>
          <div>
            <h3>React</h3>
            <img
              src={react_logo}
              alt="react logo"
              className={resumeStyle.img}
            ></img>
          </div>
          <div>
            <h3>NodeJS</h3>
            <img
              src={nodejs_logo}
              alt="nodejs logo"
              className={resumeStyle.img}
            ></img>
          </div>
          <div>
            <h3>PHP</h3>
            <img
              src={php_logo}
              alt="php logo"
              className={resumeStyle.img}
            ></img>
          </div>
        </div>
        <h2 className={[resumeStyle.header]}>Education</h2>
        <div>
          <div className={resumeStyle.experienceText}>
            <h3>Western Governors University</h3>
            <h4>Bachelor's Degree</h4>
            <p>2019-2021</p>
          </div>
          <div className={resumeStyle.experienceText}>
            <h3>Helio Training</h3>
            <h4>Full Stack Web Development</h4>
            <p>2019-2020</p>
          </div>
          <div className={resumeStyle.experienceText}>
            <h3>Salt Lake Community College</h3>
            <h4>Associate's Degree</h4>
            <p>2017-2019</p>
          </div>
        </div>
        <h2 className={[resumeStyle.header]}>Experience</h2>
        <div>
          <div className={resumeStyle.experienceText}>
            <h3>IT Technician II</h3>
            <p>Extra Space Storage</p>
          </div>
          <div className={resumeStyle.experienceText}>
            <h3>Data Entry Clerk</h3>
            <p>Discover Financial Services</p>
          </div>
          <div className={resumeStyle.experienceText}>
            <h3>Language Tutor</h3>
            <p>Salt Lake Community College</p>
          </div>
        </div>
        <h2 className={[resumeStyle.header]}>About Me</h2>
        <div className={resumeStyle.experienceText}>
          <p>
            From the moment I produced “Hello World” in the browser with my
            first web page, I knew I was hooked into the world of web
            development. But web development has never been “just a job” for me,
            it’s offered an engaging challenge to continually learn and improve
            my skills in creating high-quality application. What started with a
            simple “Hello World” has become a full-fledged passion that only
            gets more exciting as the years go by. <br />
            <span>
              <Link to="/#projects" className={resumeStyle.link}>
                Here
              </Link>
            </span>
            you will find projects I’ve completed that showcase my skills and
            general background in developing webpages and applications.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Resume
