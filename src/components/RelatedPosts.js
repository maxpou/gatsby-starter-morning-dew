import React from 'react'
import { StyledLink } from './Commons'
import Flag from './Flag'
import useSiteMetadata from '../hooks/use-site-config'

const RelatedPosts = props => {
  const { posts } = props
  const { defaultLang } = useSiteMetadata()

  return (
    <ul>
      {posts.map(post => {
        const title = post.node.frontmatter.title
        const slug = post.node.frontmatter.slug
        const language = post.node.frontmatter.language || defaultLang
        return (
          <li key={slug}>
            <StyledLink to={`/${slug}`}>
              {defaultLang !== language && <Flag language={language} />}
              {title}
            </StyledLink>
          </li>
        )
      })}
    </ul>
  )
}
export default RelatedPosts
