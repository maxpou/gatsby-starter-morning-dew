import React from 'react'
import { withPrefix } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 3rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

const Hero = props => {
  const { siteCover } = useSiteMetadata()
  const heroImg = props.heroImg || withPrefix(siteCover)

  return (
    <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
      <TitleContainer>
        <HeroTitle>{props.title}</HeroTitle>
      </TitleContainer>
    </HeroContainer>
  )
}

export default Hero
