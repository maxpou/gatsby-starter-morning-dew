import React, { Fragment } from 'react'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import './index.css'
import 'prismjs/themes/prism-tomorrow.css'
import siteConfig from '../../data/siteConfig'

class Template extends React.Component {
  render() {
    const { children, heroImg } = this.props
    const title = this.props.title || siteConfig.siteTitle

    return (
      <Fragment>
        <Header />
        <Hero heroImg={heroImg} title={title} />
        <main id="content" className="content" role="main">
          {children}
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default Template
