import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PaginationWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
  justify-content: space-between;
  width: 80%;
  max-width: 770px;
  padding: 25px 0;
  margin: 0px auto;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px 0;
  }
`

const PageBtn = styled(Link)`
  border-radius: 3px;
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  color: var(--color-white);
  padding: 8px 20px;
  min-width: 130px;

  &:hover {
    background-color: var(--color-white);
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }

  @media (max-width: 564px) {
    margin-top: 10px;
    width: 100%;
  }
`

const PreviousBtn = styled(PageBtn)`
  order: 1;
  @media (max-width: 564px) {
    order: 2;
  }
`

const NextBtn = styled(PageBtn)`
  order: 3;
`

const Spacer = styled.span`
  display: block;
  min-width: 130px;

  &.previous {
    order: 1;
  }

  &.next {
    order: 3;
  }

  @media (max-width: 564px) {
    display: none;

    &.previous {
      order: 2;
    }

    &.next {
      order: 3;
    }
  }
`

const PageInfo = styled.span`
  order: 2;
  padding: 1em 0;
  @media (max-width: 564px) {
    order: 1;
  }
`

class Pagination extends React.Component {
  render() {
    const { currentPage, nbPages } = this.props
    const previousUrl = currentPage === 2 ? '/' : `/pages/${currentPage - 1}`

    return (
      <PaginationWrapper>
        {currentPage !== 1 ? (
          <PreviousBtn to={previousUrl}>‹ Newer posts</PreviousBtn>
        ) : (
          <Spacer className="previous" />
        )}

        <PageInfo>
          Page {currentPage} of {nbPages}
        </PageInfo>

        {currentPage < nbPages ? (
          <NextBtn to={`/pages/${currentPage + 1}`}>Older posts ›</NextBtn>
        ) : (
          <Spacer className="next" />
        )}
      </PaginationWrapper>
    )
  }
}

export default Pagination
