import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
