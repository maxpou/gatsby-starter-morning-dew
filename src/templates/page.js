import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content/Content'
import get from 'lodash/get'

class Page extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const page = this.props.data.markdownRemark

    return (
      <Layout
        location={this.props.location}
        title={page.frontmatter.title}
        heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
      >
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: page.title }]}
          title={`${page.frontmatter.title} | ${siteTitle}`}
        />
        <article className="page">
          <Content content={page.html} date={page.frontmatter.date} />
        </article>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        cover {
          publicURL
        }
      }
    }
  }
`
