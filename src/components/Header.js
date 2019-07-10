import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { colors, media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: ${colors.primaryAlpha};
  font-weight: 700;

  @media ${media.medium} {
    position: fixed;
  }
`

const HeaderNav = styled.nav`
  font-weight: 700;
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 770px;
  z-index: 1000;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`

const HeaderLinksContainer = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: ${colors.textLightest};
  border: 0;
  margin: 0;
  padding: 8px 10px;

  min-width: 42px;
  z-index: 10;
  & + & {
    margin-left: 0.7rem;
  }
`

const HeaderLinkTitle = styled(HeaderLink)`
  padding-left: 0;
`

const HeaderLinkTitleContent = styled.span`
  display: none;
  @media ${media.medium} {
    display: block;
  }
  padding-left: 0;
`

const HeaderImage = styled.img`
  padding: 4px;
  height: 57px;
`

const Header = () => {
  const {
    headerLinks,
    siteTitle,
    headerTitle,
    headerLinksIcon,
  } = useSiteMetadata()
  const iconSrc = headerLinksIcon
    ? useSiteImages(headerLinksIcon).fluid.src
    : null

  return (
    <HeaderWrapper>
      <HeaderNav>
        <HeaderLinkTitle to={`/`} aria-label={`View home page`}>
          {iconSrc && <HeaderImage src={iconSrc} alt={siteTitle} />}
          <HeaderLinkTitleContent>{headerTitle}</HeaderLinkTitleContent>
        </HeaderLinkTitle>
        <HeaderLinksContainer>
          {headerLinks.map((headerLink, i) => (
            <HeaderLink
              to={headerLink.url}
              key={`header-link-${i}`}
              aria-label={`View ${headerLink.label} page`}
            >
              {headerLink.label}
            </HeaderLink>
          ))}
        </HeaderLinksContainer>
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header
