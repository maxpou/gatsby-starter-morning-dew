import React, { Fragment } from 'react'
import Header from './Header'
import "./index.css";
import "prismjs/themes/prism-tomorrow.css";

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Fragment>
        <Header />
        {children}
      </Fragment>
    )
  }
}

export default Template
