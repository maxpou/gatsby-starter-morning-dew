import React, { Fragment } from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import siteConfig from '../../data/siteConfig'

import './index.css'
import 'prismjs/themes/prism-tomorrow.css'

class Template extends React.Component {
  render() {
    const { children, heroImg } = this.props
    const title = this.props.title || siteConfig.siteTitle

    return (
      <Fragment>
        <Header headerLinks={siteConfig.headerLinks} />
        <Hero heroImg={heroImg} title={title} />
        <main id="main" className="main" role="main">
          {children}
        </main>
        <Footer siteConfig={siteConfig} />
      </Fragment>
    )
  }
}

export default Template
