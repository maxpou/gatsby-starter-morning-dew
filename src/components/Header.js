/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import { media } from '../tokens'
import useSiteImages from '../hooks/use-site-images'
import DarkToggle from './DarkToggle'

const HeaderWrapper = styled.header`
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-primaryAlpha);
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
  padding: 0px 10px;
`

const HeaderLinksContainer = styled.div`
  display: none;
  -webkit-box-align: center;
  align-items: center;
  @media ${media.medium} {
    display: flex;
  }
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: var(--color-white);
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
  display: block;
  padding-left: 0;
`

const HeaderImage = styled.img`
  padding: 4px;
  height: 57px;
`

const MobilePanel = styled.div`
  position: absolute;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: var(--color-primary);
  @media ${media.medium} {
    display: none;
  }
`

const SkipMainContent = styled.a`
  position: absolute;
  left: -999px;
  width: 1px;
  height: 1px;
  top: auto;
  color: var(--color-white);
  background-color: var(--color-grey700);

  &:focus {
    display: inline-block;
    height: auto;
    width: auto;
    position: static;
    padding: 20px 10px;
  }
`

const MobileNav = styled.nav`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;
  margin: 0px auto;

  & a {
    display: flex;
    margin: 10px 0 !important;
  }
`

const HeaderLinks = ({ headerLinks }) => {
  return headerLinks.map((headerLink, i) => (
    <HeaderLink
      to={headerLink.url}
      key={`header-link-${i}`}
      aria-label={`View ${headerLink.label} page`}
    >
      {headerLink.label}
    </HeaderLink>
  ))
}

const BurgerButton = styled.button`
  z-index: 30;
  top: 0px;
  position: relative;
  color: var(--color-white);
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  @media ${media.medium} {
    display: none;
  }
`

const BurgerContent = styled.div`
  width: 24px;
  top: 30px;
  height: 2px;
  background: var(--color-white);
  position: absolute;
  left: 0;
  ${props =>
    props.isToggledOn
      ? 'background: transparent'
      : `background: var(--color-white)`};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  ::before {
    content: '';
    top: -8px;
    width: 24px;
    height: 2px;
    background: var(--color-white);
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? 'transform: rotate(45deg); top: 0;'
        : 'transform: rotate(0)'};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
  ::after {
    top: 8px;
    content: '';
    width: 24px;
    height: 2px;
    background: white;
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? 'transform: rotate(-45deg); top: 0;'
        : 'transform: rotate(0)'};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
`

const MobileHeader = ({ headerLinks }) => {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

  return (
    <>
      <BurgerButton
        onClick={toggle}
        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
      >
        <BurgerContent isToggledOn={isToggledOn} />
      </BurgerButton>
      {isToggledOn && (
        <MobilePanel>
          <MobileNav>
            <HeaderLinks headerLinks={headerLinks} />
            <DarkToggle isExpanded={true} />
          </MobileNav>
        </MobilePanel>
      )}
    </>
  )
}

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
        <SkipMainContent href="#main-content">
          Skip to main content
        </SkipMainContent>
        <HeaderLinkTitle to={`/`} aria-label={`View home page`}>
          {iconSrc && <HeaderImage src={iconSrc} alt={siteTitle} />}
          <HeaderLinkTitleContent>{headerTitle}</HeaderLinkTitleContent>
        </HeaderLinkTitle>
        <HeaderLinksContainer>
          <HeaderLinks headerLinks={headerLinks} />
          <DarkToggle />
        </HeaderLinksContainer>
        <MobileHeader headerLinks={headerLinks} />
      </HeaderNav>
    </HeaderWrapper>
  )
}

export default Header
