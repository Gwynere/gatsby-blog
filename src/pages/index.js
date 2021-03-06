import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

import Layout from "../components/layout"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

const BlogIndex = () => {
  return (
    <Layout>
      <h1>hello from the index</h1>
      <Row>
        <Col md="8">
          <StaticQuery
            query={indexQuery}
            render={data => {
              return (
                <div>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Post
                      key={node.id}
                      title={node.frontmatter.title}
                      author={node.frontmatter.author}
                      slug={node.fields.slug}
                      date={node.frontmatter.date}
                      body={node.excerpt}
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                      tags={node.frontmatter.tags}
                    />
                  ))}
                </div>
              )
            }}
          />
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            date(formatString: "MMMM DD YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
