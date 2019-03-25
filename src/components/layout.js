import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import siteConfig from '../../data/siteConfig'

import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './Commons'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return [
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
      </Helmet>,
      <GlobalStyle />,
      <Header headerLinks={siteConfig.headerLinks} />,
      <div style={{ margin: '60px 0' }}>{children}</div>,
      <Footer siteConfig={siteConfig} />,
    ]
  }
}

export default Template
