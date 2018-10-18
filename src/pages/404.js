import React from 'react'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper/Wrapper'
import SEO from '../components/SEO/SEO'
import RelatedPosts from '../components/RelatedPosts/RelatedPosts'

class NotFoundPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} noCover={true}>
        <SEO title="Page Not Found" />
        <Wrapper>
          <h2>Page Not Found</h2>
          <p>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <h2>Since you are here...</h2>
          <p>Here's my latest posts:</p>
          <RelatedPosts posts={posts} />
        </Wrapper>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { ne: "page" } } }
      limit: 5
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
