import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: rgba(32, 35, 42, 0.85);
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 1260px;
  z-index: 1000;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

class Header extends React.Component {
  render() {
    const { headerLinks } = this.props

    return (
      <HeaderWrapper>
        <HeaderNav>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderNav>
      </HeaderWrapper>
    )
  }
}

export default Header
