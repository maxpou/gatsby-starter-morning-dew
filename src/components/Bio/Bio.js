import React, { Fragment } from 'react'
import siteConfig from '../../../data/siteConfig'
import './Bio.css'

class Bio extends React.Component {
  render() {
    return (
      <Fragment>
        <figure className="author-image">
          <a
            src={siteConfig.authorAvatar}
            alt={siteConfig.authorName}
            style={{ backgroundImage: `url("${siteConfig.authorAvatar}")` }}
            className="img"
          />
        </figure>
        <section>
          <h4>About the author</h4>
          <p className="bio-text">{siteConfig.authorDescription}</p>
        </section>
      </Fragment>
    )
  }
}

export default Bio
