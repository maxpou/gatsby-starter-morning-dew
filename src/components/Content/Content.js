import React from 'react'
import ContentHeader from '../ContentHeader/ContentHeader'
import './Content.css'
import './GatsbyHighlight.css'

class Content extends React.Component {
  render() {
    const { content, date, tags } = this.props

    return (
      <section>
        {(tags || date) && <ContentHeader date={date} tags={tags} />}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    )
  }
}

export default Content
