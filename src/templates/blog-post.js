import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper/Wrapper'
import Hero from '../components/Hero/Hero'
import Article from '../components/Article/Article'
import PrevNextPost from '../components/PrevNextPost/PrevNextPost'
import SEO from '../components/SEO/SEO'
import Disqus from '../components/Disqus'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.excerpt}
          cover={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          lang={post.frontmatter.language}
          path={post.frontmatter.slug}
          isBlogPost
        />

        <Hero
          heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
          title={post.frontmatter.title}
        />

        <Wrapper>
          <Article post={post} />
        </Wrapper>

        <Wrapper>
          <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} />
          <PrevNextPost previous={previous} next={next} />
        </Wrapper>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        language
        tags
        cover {
          publicURL
        }
      }
    }
  }
`
