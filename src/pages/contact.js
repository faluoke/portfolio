import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyle from "./contact.module.css"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <form
      name="contact"
      method="post"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className={contactStyle.container}
    >
      <input type="hidden" name="bot-field" id="name" />
      <label>
        Name
        <input
          type="text"
          name="name"
          id="name"
          className={contactStyle.input}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          id="email"
          className={contactStyle.input}
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          id="subject"
          className={contactStyle.input}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          id="message"
          rows="6"
          cols="22"
          className={contactStyle.input}
        />
      </label>
      <div className={contactStyle.buttonContainer}>
        <button type="submit" className={contactStyle.button}>
          Send
        </button>
        <input
          type="reset"
          value="Clear"
          className={contactStyle.clearButton}
        />
      </div>
    </form>
  </Layout>
)
