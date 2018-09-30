import React, { Fragment } from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import './Bio.css'

class Bio extends React.Component {
  render() {
    const prefixedImg = withPrefix(siteConfig.authorAvatar)
    return (
      <Fragment>
        <figure className="author-image">
          <a
            src={siteConfig.authorAvatar}
            alt={siteConfig.authorName}
            style={{ backgroundImage: `url("${prefixedImg}")` }}
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
