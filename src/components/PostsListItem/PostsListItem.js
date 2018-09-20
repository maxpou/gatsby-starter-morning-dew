import React from 'react'
import { Link } from 'gatsby'
import Flag from '../Flag/Flag'
import TagList from '../TagList/TagList'

class PostsListItem extends React.Component {
  render() {
    const { title, excerpt, slug, date, language, tags } = this.props
    console.log(tags);

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
          <Link className="read-more" to={slug}>
            &raquo;
          </Link>
        </section>
        <footer className="post-meta">
          🗓 <time>{date}</time>
          <TagList tags={tags}/>
        </footer>
      </article>
    )
  }
}
export default PostsListItem
