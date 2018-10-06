import React, { Fragment } from 'react'
import TagList from '../TagList/TagList'
import './ContentHeader.css'

class ContentIntro extends React.Component {
  render() {
    const { date, tags } = this.props

    return (
      <header className="ContentHeader">
        {date && <time className="ContentHeader-time">{date}</time>}
        {Array.isArray(tags) &&
          tags.length > 0 && (
            <Fragment>
              <span className="ContentHeader-in"> in</span>
              <TagList tags={tags} />
            </Fragment>
          )}
      </header>
    )
  }
}

export default ContentIntro
