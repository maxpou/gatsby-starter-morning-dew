import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'

const Header = styled.header`
  margin-bottom: 2rem;
  color: #7f7e7e;
`

class ContentIntro extends React.Component {
  render() {
    const { date, tags } = this.props

    return (
      <Header>
        {date && <time>{date}</time>}
        {Array.isArray(tags) && tags.length > 0 && (
          <Fragment>
            <span> in</span>
            <TagList tags={tags} />
          </Fragment>
        )}
      </Header>
    )
  }
}

export default ContentIntro
