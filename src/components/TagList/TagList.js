import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import './TagList.css'

class TagList extends React.Component {
  render() {
    const { tags } = this.props

    return (
      <div className="tag-list">
        🏷{' '}
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              <Link className="tag-list-item" to={`tags/${tag}`}>
                {tag}
              </Link>
              {i < tags.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </div>
    )
  }
}
export default TagList
