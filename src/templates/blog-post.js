import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Disqus from 'disqus-react'

import Layout from '../components/layout'
import Article from '../components/Article/Article'
import PrevNextPost from '../components/PrevNextPost/PrevNextPost'

class BlogPostTemplate extends React.Component {
  renderDisqus() {
    const disqusShortname = get(
      this.props,
      'data.site.siteMetadata.disqusShortname'
    )
    if (!disqusShortname) {
      return null
    }
    const siteUrl = get(this.props, 'data.site.siteMetadata.siteUrl')
    const post = this.props.data.markdownRemark
    const disqusConfig = {
      url: `${siteUrl}${post.frontmatter.slug}`,
      title: post.frontmatter.title,
    }

    return (
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    )
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const lang = post.frontmatter.language ? post.frontmatter.language : 'en'

    return (
      <Layout
        location={this.props.location}
        title={post.frontmatter.title}
        heroImg={post.frontmatter.cover && post.frontmatter.cover.publicURL}
      >
        <Helmet
          htmlAttributes={{ lang: lang }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <Article post={post} />

        {this.renderDisqus()}

        <PrevNextPost previous={previous} next={next} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        disqusShortname
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
        language
        tags
        cover {
          publicURL
        }
      }
    }
  }
`
