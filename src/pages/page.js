import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class Page extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: 'About' }]}
        />
        About me...
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "page"}}}) {
      edges {
        node {
          frontmatter {
            title
            type
          }
        }
      }
    }
  }
`
