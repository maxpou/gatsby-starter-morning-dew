import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  color: #787676;
`

const TagListItem = styled(Link)`
  margin-left: 0.3rem;
  color: #787676;

  &:hover {
    border-bottom: 1px dotted #787676;
  }
  &:before {
    content: '#';
  }
`

class TagList extends React.Component {
  render() {
    const { tags, icon } = this.props

    return (
      <ListContainer>
        {icon === true && <Fragment>🏷 </Fragment>}
        {tags.map((tag, i) => {
          return (
            <Fragment key={`tag-list-${i}`}>
              <TagListItem to={`tags/${tag}`}>{tag}</TagListItem>
              {i < tags.length - 1 ? ', ' : ''}
            </Fragment>
          )
        })}
      </ListContainer>
    )
  }
}
export default TagList
