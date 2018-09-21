import React from 'react'
import { Link } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div>
          <span className="footer-title">All content © {siteConfig.authorName}</span>
        </div>
        <div>
          <Link to={'/'} className="footer-item">Blog</Link>
          <Link to={'/speaking'} className="footer-item">speaking</Link>
          <Link to={'/about'} className="footer-item">About</Link>
        </div>
        <div>
          Projects...
        </div>
        <div>
          Follow me
        </div>
      </footer>
    )
  }
}

export default Footer
