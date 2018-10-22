import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: rgba(32, 35, 42, 0.85);
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
      margin-bottom: 1em;
      padding-right: 1em;
    }
  }

  & a {
    color: #ffffff;
    font-weight: bold;

    &:hover {
      color: #e8e8e8;
      border-bottom: 1px dotted #e8e8e8;
    }
  }

  .footer-col > p {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 1rem;
  }

  .footer-item {
    padding: 0.25rem 0;
    color: #ffffff;
  }

  .footer-heart {
    color: red;
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: #ffffff;
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
`

class Footer extends React.Component {
  render() {
    const { authorName, footerLinks, websiteHost } = this.props.siteConfig

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
          <span className="footer-item">
            <Link className="footer-link" to={item.url}>
              {item.label}
            </Link>
          </span>
        )
      }
      return (
        <span className="footer-item">
          <a className="footer-link" href={item.url}>
            {item.label}
          </a>
        </span>
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
      <FooterWrapper>
        <nav>
          <div className="footer-col">
            <h5 className="footer-title">{authorName} © 2018</h5>
            <p className="footer-item-text">
              Built with{' '}
              <a className="footer-link" href="https://www.gatsbyjs.org">
                Gatsby
              </a>
              .
            </p>
            <p className="footer-item-text">
              Theme using{' '}
              <a
                className="footer-link"
                href="https://github.com/maxpou/gatsby-starter-morning-dew"
              >
                gatsby-starter-morning-dew
              </a>
              .
            </p>
            <p className="footer-item-text">
              Hosted with <span className="footer-heart">❤</span> by{' '}
              <a className="footer-link" href={websiteHost.url}>
                {websiteHost.name}
              </a>
              .
            </p>
          </div>
          {footerLinks.map((column, i) => {
            return <FooterColumn column={column} key={`footer-column-${i}`} />
          })}
        </nav>
      </FooterWrapper>
    )
  }
}

export default Footer
