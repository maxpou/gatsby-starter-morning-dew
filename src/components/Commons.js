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

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}
`
export const StyledLink = styled(Link)`
  border-bottom: 1px dotted ${colors.primary};

  &:hover {
    border-bottom-style: solid;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`
