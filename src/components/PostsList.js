import React, { Fragment } from 'react'

import PostsListItem from './PostsListItem'
import './PostList.css'

class PostsList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <Fragment>
        {posts.map(post => {
          const props = {
            title: post.node.frontmatter.title,
            excerpt: post.node.excerpt,
            slug: post.node.fields.slug,
            date: post.node.frontmatter.date,
          }
          return <PostsListItem key={props.slug} {...props} />
        })}
      </Fragment>
    )
  }
}
export default PostsList