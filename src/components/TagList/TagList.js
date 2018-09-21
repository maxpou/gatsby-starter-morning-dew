import React, { Fragment } from 'react'
import './TagList.css'

class TagList extends React.Component {
  render() {
    const { tags } = this.props

    return (
      <div className="tag-list">
        🏷{' '}
        {tags.map((tag, i) => (
          <span className="tag-list-item">{tag}</span>
          // todo: solve this shit!
          // {i < tags.length - 1 ? ', ' : ''}
        ))}
      </div>
    )
  }
}
export default TagList
