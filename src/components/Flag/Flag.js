import React from 'react'
import ukFlag from './uk-flag.png'
import frFlag from './fr-flag.png'

class Flag extends React.Component {
  render() {
    const { language } = this.props
    const img = language === 'en' ? ukFlag : frFlag
    const alt = language === 'en' ? 'english post' : 'post en francais'

    return <img src={img} alt={alt} />
  }
}

export default Flag
