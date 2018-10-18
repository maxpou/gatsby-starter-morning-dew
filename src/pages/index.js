import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper/Wrapper'
import Hero from '../components/Hero/Hero'
import PostsList from '../components/PostsList/PostsList'
import SEO from '../components/SEO/SEO'

class BlogList extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <SEO />
        <Hero title={siteTitle} />

        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "page" } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`
