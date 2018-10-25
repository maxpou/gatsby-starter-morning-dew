import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: #222222cc;
  background-color: #e8e8e8;
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: rgba(34,34,34,0.8);
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}
`
export const StyledLink = styled(Link)`
  border-bottom: 1px dotted rgba(162, 162, 162, 0.8);

  &:hover {
    border-bottom-style: solid;
  }
`

export const Text = styled.p`
  line-height: 1.6;
  margin: 1em 0 0 0;
`
