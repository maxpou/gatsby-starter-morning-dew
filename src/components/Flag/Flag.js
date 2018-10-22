import React from 'react'
import ukFlag from './uk-flag.png'
import frFlag from './fr-flag.png'
import styled from 'styled-components'

const FlagImage = styled.img`
  padding-right: 0.5rem;
  padding-bottom: 0.2rem;
`

class Flag extends React.Component {
  render() {
    const { language } = this.props
    const img = language === 'en' ? ukFlag : frFlag
    const alt = language === 'en' ? 'english post' : 'post en francais'

    return <FlagImage src={img} alt={alt} className="flag" />
  }
}

export default Flag
