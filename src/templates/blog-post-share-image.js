import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import styled from 'styled-components'
import { GlobalStyle } from '../components/Commons'
import useSiteMetadata from '../hooks/use-site-config'

const Preview = styled.div.attrs({
  width: props => props.width || 440,
  height: props => props.height || 220,
  hero: props => props.hero || withPrefix(props.siteCover),
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url("${props => props.hero}");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;

  vertical-align: middle;
  text-align: center;
`

const Title = styled.h1.attrs({
  fontSize: props => (props.type === 'twitter' ? '1.8rem' : '4.8rem'),
})`
  font-weight: 700;
  font-size: ${props => props.fontSize};
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  text-align: center;
`

const ReadTime = styled.h2.attrs({
  fontSize: props => (props.type === 'twitter' ? '1.5rem' : '2rem'),
})`
  vertical-align: middle;
  font-size: ${props => props.fontSize};
  text-align: center;
  color: #fff;
  ::before {
    padding: 0.4em;
    content: '👁';
  }
`

const BlogPostShareImage = props => {
  const post = props.data.post
  const { width, height, type } = props.pageContext
  const heroImg = post.frontmatter.cover && post.frontmatter.cover.publicURL
  const minute = post.timeToRead === 1 ? 'min' : 'mins'
  const { siteCover } = useSiteMetadata()

  return (
    <Preview width={width} height={height} hero={heroImg} siteCover={siteCover}>
      <GlobalStyle />
      <Title type={type}>{post.frontmatter.title}</Title>
      <ReadTime type={type}>
        {post.timeToRead} {minute}
      </ReadTime>
    </Preview>
  )
}

export default BlogPostShareImage

export const pageQuery = graphql`
  query BlogPostShareImage($slug: String!) {
    post: mdx(frontmatter: { slug: { eq: $slug } }) {
      timeToRead
      frontmatter {
        title
        cover {
          publicURL
        }
      }
    }
  }
`
