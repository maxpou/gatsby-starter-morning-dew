import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  render () {
    return (
      <Link to={'/'}>Home</Link>
    )
  }
}

export default Header