import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'

class SEO extends React.Component {
  render() {
    const { isBlogPost, path = '', lang = 'en' } = this.props
    const title = this.props.title
      ? `${this.props.title} | ${siteConfig.siteTitle}`
      : siteConfig.siteTitle
    const imagePath = this.props.cover || withPrefix(siteConfig.siteCover)
    const formatedSiteUrl = siteConfig.siteUrl.substring(
      0,
      siteConfig.siteUrl.length - 1
    )
    const image = `${formatedSiteUrl}${imagePath}`
    const description = this.props.description || siteConfig.siteDescription

    return (
      <Helmet title={title}>
        {/* General tags */}
        <html lang={lang} />
        <meta name="description" content={description} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={formatedSiteUrl + withPrefix(path)} />
        <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={siteConfig.twitterUsername} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    )
  }
}

export default SEO
