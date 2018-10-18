import React, { Fragment } from 'react'
import RelatedPosts from '../RelatedPosts/RelatedPosts';

class PrevNextPost extends React.Component {
  render() {
    const { previous, next } = this.props
    const articles = [previous, next]
      .filter(i => i)
      .map(item => ({node: item}))

    return (
      <Fragment>
        <p>Read next:</p>
        <RelatedPosts
          posts={articles}
        />
      </Fragment>
    )
  }
}

export default PrevNextPost
