import React, { Fragment } from 'react'
import { Link } from 'gatsby'

class PrevNextPost extends React.Component {
  render() {
    const { previous, next } = this.props

    return (
      <Fragment>
        <ul>
          {previous && (
            <li>
              <Link to={previous.frontmatter.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            </li>
          )}

          {next && (
            <li>
              <Link to={next.frontmatter.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </Fragment>
    )
  }
}

export default PrevNextPost
