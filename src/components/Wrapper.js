import styled from 'styled-components'
import { colors } from '../tokens'

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  border-radius: 5px;
  width: 80%;
  max-width: 770px;
  word-wrap: break-word;
  background-color: ${colors.backgroundArticle};
  margin: 0px auto 30px auto;
  top: 30px;
  padding: 50px;
  box-shadow: 0 0 0 0, 0 6px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px;
  }
`

export default Wrapper
