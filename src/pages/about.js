import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default class About extends Component {
  render() {
    return (
      <Layout>
        <SEO title="About" />
        <h1>About Us</h1>
        <p>Nothing much . . </p>
      </Layout>
    )
  }
}
