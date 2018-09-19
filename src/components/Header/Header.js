import React from 'react'
import { Link } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import './Header.css'

class Header extends React.Component {
  render () {
    const heroImg = this.props.heroImg || siteConfig.siteCover
    const { title } = this.props
 
    return (
      <header style={{ backgroundImage: `url("${heroImg}")` }} className="main-header">
        <Link to={'/'} className="header-menu">Home</Link>
        <div className="header-title">
          <h1>{title}</h1>
        </div>
      </header>
    )
  }
}

export default Header