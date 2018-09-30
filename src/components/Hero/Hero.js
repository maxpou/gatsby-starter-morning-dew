import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import './Hero.css'

class Hero extends React.Component {
  render() {
    const heroImg = this.props.heroImg || withPrefix(siteConfig.siteCover)
    const { title } = this.props

    return (
      <div style={{ backgroundImage: `url("${heroImg}")` }} className="hero">
        <div className="hero-title">
          <h1>{title}</h1>
        </div>
      </div>
    )
  }
}

export default Hero
