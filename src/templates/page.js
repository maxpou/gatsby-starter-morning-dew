import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

class Page extends React.Component {
  render() {
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
        />
        <article className="page">
          <section>
            <p>{page.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
          </section>
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
