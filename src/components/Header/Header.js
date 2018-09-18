import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends React.Component {
  render () {
    const { heroImg } = this.props || null  
 
    return (
      <header style={{ backgroundImage: `url("${heroImg}")` }} className="main-header">
        <Link to={'/'}>Home</Link>
      </header>
    )
  }
}

export default Header