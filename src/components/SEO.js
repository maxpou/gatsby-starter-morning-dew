import React from 'react'
import { Helmet } from 'react-helmet'
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

  const title = props.title
    ? `${props.title} | ${siteTitle}`
    : `${siteTitle} - ${siteDescription}`
  const formatedSiteUrl = siteUrl.endsWith('/')
    ? siteUrl.substring(0, siteUrl.length - 1)
    : siteUrl
  const imagePath = props.imageShare || props.cover || withPrefix(siteCover)
  const image = `${formatedSiteUrl}${imagePath}`
  const description = props.description || siteDescription
  const internalTranslations = (props.translations || []).filter(
    t => !t.link.startsWith('http')
  )

  return (
    <Helmet title={title}>
      {/* General tags */}
      <html lang={lang} />
      <meta name="description" content={description} />
      <link rel="canonical" href={formatedSiteUrl + withPrefix(path)} />

      {internalTranslations.map(translation => (
        <link
          rel="alternate"
          hreflang={translation.hreflang}
          href={formatedSiteUrl + withPrefix(translation.link)}
        />
      ))}

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
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
