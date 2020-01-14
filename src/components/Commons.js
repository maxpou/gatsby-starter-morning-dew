import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../tokens'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: ${colors.text};
  background-color: ${colors.background};
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: ${colors.primary};
}

hr {
  border: 0;
  border-top: 1px solid ${colors.grey100};
  margin: 50px 0 5px 0;
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}

*::selection {
  background-color: ${colors.backgroundSelection};
}
`
export const StyledLink = styled(Link)`
  box-shadow: 0 2px 0 0 ${colors.links};

  &:hover {
    filter: brightness(150%);
    box-shadow: none;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`

export const Bull = styled.span`
  display: inline-block;
  color: ${colors.postMetadata};
  margin: 0 4px;
  &::before {
    content: '•';
  }
`

export const ReadingTime = props => {
  const ReadingTimeContainer = styled.span`
    text-transform: uppercase;
    color: ${colors.postMetadata};
  `
  return <ReadingTimeContainer>{props.min} min read</ReadingTimeContainer>
}
