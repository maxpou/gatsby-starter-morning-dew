import React from 'react'
import { Link } from 'gatsby'
import Flag from '../Flag/Flag'
import TagList from '../TagList/TagList'
import './PostsListItem.css'

class PostsListItem extends React.Component {
  render() {
    const { title, excerpt, slug, date, language, tags } = this.props

    return (
      <article className="post">
        <header className="post-header">
          <h2 className="post-title">
            <Link to={slug}>
              <Flag language={language} />
              {title}
            </Link>
          </h2>
        </header>
        <section className="post-excerpt">
          <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        </section>
        <footer className="post-meta">
          <TagList tags={tags} icon={true} />
          🗓 <time className="post-date">{date}</time>
          <Link className="post-read" to={slug}>
            Read post ›
          </Link>
        </footer>
      </article>
    )
  }
}
export default PostsListItem
