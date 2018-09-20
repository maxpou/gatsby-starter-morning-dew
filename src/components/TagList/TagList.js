import React, { Fragment } from 'react'

class TagList extends React.Component {
  render() {
    const { tags } = this.props

    return (
      <Fragment>
        🏷 {tags.map((tag, i) => (
          <span>#{tag}</span>
          // {i < tags.length - 1 ? ', ' : ''}
        ))}
      </Fragment>
    )
  }
}
export default TagList
