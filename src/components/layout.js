import React, { Fragment } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import siteConfig from '../../data/siteConfig'

import './index.css'
import 'prismjs/themes/prism-tomorrow.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Header headerLinks={siteConfig.headerLinks} />
        <div style={{ margin: '60px 0' }}>{children}</div>
        <Footer siteConfig={siteConfig} />
      </Fragment>
    )
  }
}

export default Template
