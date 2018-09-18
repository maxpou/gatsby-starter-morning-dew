import React, { Fragment } from 'react'
import Header from './Header/Header'
import "./index.css";
import "prismjs/themes/prism-tomorrow.css";

class Template extends React.Component {
  render() {
    const { children, heroImg } = this.props

    return (
      <Fragment>
        <Header heroImg={heroImg} />
        {children}
      </Fragment>
    )
  }
}

export default Template
