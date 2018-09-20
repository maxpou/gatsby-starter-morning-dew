import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          <Link to={'/'} className="header-menu">
            🏡
          </Link>
          <Link to={'/'} className="header-menu">
            Blog
          </Link>
          <Link to={'/talks'} className="header-menu">
            Talks
          </Link>
          <Link to={'/about'} className="header-menu">
            About
          </Link>
        </nav>
      </header>
    )
  }
}

export default Header
