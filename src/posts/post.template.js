import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export default class PostPage extends Component {
  render() {
    const {
      location,
      data: {
        markdownRemark: {
          html,
          frontmatter: { title, date },
        },
      },
    } = this.props
    console.log(location)
    return (
      <Layout location={location}>
        <SEO title={title} />
        <span>{date}</span>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD YYYY")
      }
    }
  }
`
