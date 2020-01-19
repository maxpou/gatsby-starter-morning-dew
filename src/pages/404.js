/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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

const Ghost = styled.span`
  display: block;
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

const NotFoundPage = props => {
  const data = useStaticQuery(graphql`
    query {
      posts: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "//content/posts//" }
          frontmatter: { published: { ne: false }, unlisted: { ne: true } }
        }
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
  `)

  const posts = data.posts.edges

  return (
    <Layout location={props.location} noCover={true}>
      <SEO title="Page Not Found" />
      <Wrapper>
        <MainTitle>404 Page Not Found</MainTitle>
        <Ghost role="img" aria-label="Ghost">
          👻
        </Ghost>
        <Text>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </Text>

        <SubTitle>Recent Posts</SubTitle>

        <RelatedPosts posts={posts} />
      </Wrapper>
    </Layout>
  )
}

export default NotFoundPage
