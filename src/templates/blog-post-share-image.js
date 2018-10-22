import React from 'react'
import { graphql, withPrefix } from 'gatsby'
import styled from 'styled-components'
import siteConfig from '../../data/siteConfig'

const Preview = styled.div.attrs({
  width: props => props.width || 440,
  height: props => props.height || 220,
  hero: props => props.hero || withPrefix(siteConfig.siteCover),
})`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-image: url("${props => props.hero}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`

const Title = styled.h1.attrs({
  fontsize: props => (props.type === 'twitter' ? '2.5rem' : '4.8rem'),
})`
  font-weight: 700;
  font-size: ${props => props.fontsize};
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
  text-align: center;
`

const ReadTime = styled.h2.attrs({
  fontsize: props => (props.type === 'twitter' ? '1.5rem' : '2rem'),
})`
  vertical-align: middle;
  font-size: ${props => props.fontsize};
  text-align: center;
  color: #fff;
  ::before {
    padding: 0.4em;
    content: '👁';
  }
`

class BlogPostShareImage extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { width, height, type } = this.props.pageContext
    const heroImg = post.frontmatter.cover && post.frontmatter.cover.publicURL

    return (
      <Preview width={width} height={height} hero={heroImg}>
        <Title type={type}>{post.frontmatter.title}</Title>
        <ReadTime type={type}>{post.timeToRead} mins</ReadTime>
      </Preview>
    )
  }
}

export default BlogPostShareImage

export const pageQuery = graphql`
  query BlogPostShareImage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
