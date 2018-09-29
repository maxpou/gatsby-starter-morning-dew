import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          <Link to={'/'} className="header-item">
            🏡
          </Link>
          <Link to={'/'} className="header-item">
            Blog
          </Link>
          <Link to={'/speaking'} className="header-item">
            Speaking
          </Link>
          <Link to={'/about'} className="header-item">
            About
          </Link>
        </nav>
      </header>
    )
  }
}

export default Header
