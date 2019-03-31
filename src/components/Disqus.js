import React from 'react'
import Disqus from 'disqus-react'
import useSiteMetadata from '../hooks/use-site-config'

const DisqusWrapper = props => {
  const { disqusShortname, disqusSiteUrl } = useSiteMetadata()

  if (!disqusShortname) {
    return null
  }
  const disqusConfig = {
    url: `${disqusSiteUrl}${props.slug}`,
    title: props.title,
  }

  return (
    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
  )
}

export default DisqusWrapper
