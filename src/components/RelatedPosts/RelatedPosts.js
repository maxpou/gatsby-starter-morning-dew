import React from 'react'
import { Link } from 'gatsby'
import Flag from '../Flag/Flag'
import siteConfig from '../../../data/siteConfig'

class RelatedPosts extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <ul>
        {posts.map(post => {
          const title = post.node.frontmatter.title
          const slug = post.node.frontmatter.slug
          const language = post.node.frontmatter.language || 'en'
          return (
            <li>
              <Link to={slug}>
                {siteConfig.multilangPosts && <Flag language={language} />}
                {title}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default RelatedPosts
