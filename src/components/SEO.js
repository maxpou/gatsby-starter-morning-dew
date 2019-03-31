import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import useSiteMetadata from '../hooks/use-site-config'

const SEO = props => {
  const { isBlogPost, path = '', lang = 'en' } = props
  const {
    siteTitle,
    siteUrl,
    siteCover,
    siteDescription,
    twitterUsername,
  } = useSiteMetadata()

  const title = props.title ? `${props.title} | ${siteTitle}` : siteTitle
  const formatedSiteUrl = siteUrl.substring(0, siteUrl.length - 1)
  const imagePath = props.imageFb || props.cover || withPrefix(siteCover)
  const imagePathTwitter = props.imageTw || props.cover || withPrefix(siteCover)
  const image = `${formatedSiteUrl}${imagePath}`
  const imageTwitter = `${formatedSiteUrl}${imagePathTwitter}`
  const description = props.description || siteDescription

  return (
    <Helmet title={title}>
      {/* General tags */}
      <html lang={lang} />
      <meta name="description" content={description} />
      <link rel="canonical" href={formatedSiteUrl + withPrefix(path)} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={formatedSiteUrl + withPrefix(path)} />
      <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageTwitter} />
    </Helmet>
  )
}

export default SEO
