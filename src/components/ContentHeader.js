import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'
import { colors } from '../tokens'

const Header = styled.header`
  margin-bottom: 2rem;
  color: ${colors.textLight};
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
