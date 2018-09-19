import React, { Fragment } from 'react'
import Header from './Header/Header'
import "./index.css";
import "prismjs/themes/prism-tomorrow.css";
import siteConfig from '../../data/siteConfig'

class Template extends React.Component {
  render() {
    const { children, heroImg } = this.props
    const title = this.props.title || siteConfig.siteTitle

    return (
      <Fragment>
        <Header heroImg={heroImg} title={title} />
        <main id="content" className="content" role="main">
          {children}
        </main>
      </Fragment>
    )
  }
}

export default Template
