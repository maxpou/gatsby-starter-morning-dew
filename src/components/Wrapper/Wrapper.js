import React from 'react'
import './Wrapper.css'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <main className="main" role="main">
        {children}
      </main>
    )
  }
}

export default Template
