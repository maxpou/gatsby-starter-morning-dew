import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import siteConfig from '../../data/siteConfig'

import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './Commons'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <GlobalStyle />
        <Header headerLinks={siteConfig.headerLinks} />
        <div style={{ margin: '60px 0' }}>{children}</div>
        <Footer siteConfig={siteConfig} />
      </Fragment>
    )
  }
}

export default Template
