import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../pages/mystyles.scss"
import contactStyle from "./contact.module.css"

export default () => (
  <Layout>
    <SEO title="Contact" />
    <form
      name="contact"
      action="https://formspree.io/mrgqjqng"
      method="POST"
      className={`container ${contactStyle.container}`}
    >
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input type="text" name="name" id="name" className="input" required />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="phone" className="label">
          Phone
        </label>
        <div className="control">
          <input
            type="tel"
            name="phone"
            id="phone"
            className="input"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <div className="control">
          <input
            type="text"
            name="subject"
            id="subject"
            className="input"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea name="message" id="message" className="textarea" required />
        </div>
      </div>

      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
        <p className="control">
          <button type="reset" className="button is-light">
            Clear
          </button>
        </p>
      </div>
    </form>
  </Layout>
)
