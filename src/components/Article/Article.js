import React from 'react'
import Bio from '../Bio/Bio'
import './Article.css'

class Article extends React.Component {
  render() {
    const { post } = this.props

    return (
      <article className="article">
        <section>
          <p>{post.frontmatter.date}</p>
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </section>
        <footer className="article-footer">
          <Bio />
        </footer>
      </article>
    )
  }
}

export default Article
