import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import RelatedPosts from '../components/RelatedPosts'
import { Text } from '../components/Commons'

const MainTitle = styled.h1`
  line-height: 1.5;
  text-align: center;
  font-size: 3rem;
`

const Ghost = styled.p`
  line-height: 1.5;
  text-align: center;
  font-size: 7rem;
`

const SubTitle = styled.h2`
  padding-top: 40px;
  line-height: 1.2;
  border-top: 1px solid #ececec;
  margin-top: 44px;
`

class NotFoundPage extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} noCover={true}>
        <SEO title="Page Not Found" />
        <Wrapper>
          <MainTitle>404 Page Not Found</MainTitle>
          <Ghost>👻</Ghost>
          <Text>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </Text>

          <SubTitle>Recent Posts</SubTitle>

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
