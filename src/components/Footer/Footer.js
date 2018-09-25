import React from 'react'
import { Link } from 'gatsby'
import './Footer.css'

class Footer extends React.Component {
  render() {
    const { authorName, footerLinks } = this.props.siteConfig

    const FooterItem = ({ item }) => {
      if (typeof item === 'string') {
        return (
          <h5 className="footer-title" key={item}>
            {item}
          </h5>
        )
      }
      if (item.url.startsWith('/')) {
        return (
          <Link className="footer-item" to={item.url}>
            {item.label}
          </Link>
        )
      }
      return (
        <a className="footer-item" href={item.url}>
          {item.label}
        </a>
      )
    }

    const FooterColumn = ({ column }) => {
      return (
        <div className="footer-col">
          {column.map((item, i) => {
            return <FooterItem item={item} key={`footer-column-item-${i}`} />
          })}
        </div>
      )
    }

    return (
      <footer className="footer">
        <nav className="footer-nav">
          <div className="footer-col">
            <h5 className="footer-title">{authorName} © 2018</h5>
            <p className="footer-item-text">Built with Gatsby.</p>
            <p className="footer-item-text">
              Theme inpired by{' '}
              <a
                className="footer-link"
                href="https://mmistakes.github.io/hpstr-jekyll-theme/"
              >
                hpstr-jekyll-theme
              </a>
              .
            </p>
            <p className="footer-item-text">
              Hosted with ❤ by{' '}
              <a className="footer-link" href="https://github.com/">
                Github
              </a>
              .
            </p>
          </div>
          {footerLinks.map((column, i) => {
            return <FooterColumn column={column} key={`footer-column-${i}`} />
          })}
        </nav>
      </footer>
    )
  }
}

export default Footer
