import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'

const FooterWrapper = styled.footer`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: var(--color-primary);
  color: var(--color-white);
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
      padding-right: 1em;
    }
  }

  & a {
    color: var(--color-white);
    font-weight: bold;

    &:hover {
      color: var(--color-grey200);
    }
  }

  .footer-col > p {
    margin: 0;
  }

  .footer-title {
    font-size: 0.83em;
    margin: 0 0 1rem;
  }

  .footer-item {
    color: var(--color-white);

    & a {
      padding: 0.25rem 0;
      display: block;
    }
  }

  .footer-heart {
    color: var(--color-red);
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: var(--color-white);
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  .footer-column-items {
    grid-template-columns: 1fr;
    display: grid;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
`

const Footer = () => {
  const { authorName, websiteHost, footerLinks } = useSiteMetadata()

  const FooterItem = ({ item }) => {
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
        <h3 className="footer-title" key={column.sectionName}>
          {column.sectionName}
        </h3>
        <div className="footer-column-items">
          {column.links.map((item, i) => {
            return <FooterItem item={item} key={`footer-column-item-${i}`} />
          })}
        </div>
      </div>
    )
  }

  return (
    <FooterWrapper>
      <nav>
        <div className="footer-col">
          <h3 className="footer-title">
            {authorName} © {new Date().getFullYear()}
          </h3>
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
            Hosted with{' '}
            <span className="footer-heart" role="img" aria-label="Love">
              ❤
            </span>{' '}
            by{' '}
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

export default Footer
