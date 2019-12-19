import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PostListing from '../components/PostListing'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location,
}) => (
  <Layout location={location}>
    <SEO title="Home" />
    <h2>Posts</h2>
    {edges.map(({ node }) => (
      <PostListing key={node.id} post={node} />
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
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
