import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"
import errorStyle from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <div className={errorStyle.container}>
      <SEO title="404: Not found" />
      <h1>Opps!</h1>
      <h2>404 - Page Not Found</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
