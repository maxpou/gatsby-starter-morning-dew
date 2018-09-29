import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends React.Component {
  render() {
    const { headerLinks } = this.props

    return (
      <header className="header">
        <nav className="header-nav">
          {headerLinks.map((headerLink, i) => (
            <Link
              to={headerLink.url}
              className="header-item"
              key={`header-item-${i}`}
            >
              {headerLink.label}
            </Link>
          ))}
        </nav>
      </header>
    )
  }
}

export default Header
