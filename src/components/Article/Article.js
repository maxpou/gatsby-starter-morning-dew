import React from 'react'
import Bio from '../Bio/Bio'
import Content from '../Content/Content'
import './Article.css'

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <article className="article">
        <Content
          content={post.html}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
        <footer className="article-footer">
          <Bio />
        </footer>
      </article>
    )
  }
}

export default Article
