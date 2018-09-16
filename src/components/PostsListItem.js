import React from 'react'
import { Link } from 'gatsby'

class PostsListItem extends React.Component {
  render() {
    const { title, excerpt, slug, date } = this.props

    return (
      <article className="post">
        <header className="post-header">
          <h2 className="post-title">
            <Link to={slug}>
              {title}
            </Link>
          </h2>
        </header>
        <section className="post-excerpt">
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Link className="read-more" to={slug}>
            &raquo;
          </Link>
        </section>
        <footer className="post-meta">
          <time>{date}</time>
        </footer>
      </article>
    )
  }
}
export default PostsListItem