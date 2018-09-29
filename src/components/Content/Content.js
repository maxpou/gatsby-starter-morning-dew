import React from 'react'
import './Content.css'
import './GatsbyHighlight.css'

class Content extends React.Component {
  render() {
    const { content, date } = this.props

    const contentDate = date ? <p>{date}</p> : null

    return (
      <section>
        {contentDate}
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </section>
    )
  }
}

export default Content
