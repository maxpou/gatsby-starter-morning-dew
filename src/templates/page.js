import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Content from '../components/Content/Content'
import Wrapper from '../components/Wrapper/Wrapper'
import Hero from '../components/Hero/Hero'
import SEO from '../components/SEO/SEO'

class Page extends React.Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <Layout location={this.props.location}>
        <SEO
          title={page.frontmatter.title}
          description={page.excerpt}
          path={page.frontmatter.slug}
          cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
        />

        <Hero
          heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
          title={page.frontmatter.title}
        />

        <Wrapper>
          <article className="page">
            <Content content={page.html} date={page.frontmatter.date} />
          </article>
        </Wrapper>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
