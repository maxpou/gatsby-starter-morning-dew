import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import SchemaOrg from './schema-org'
import useSiteMetadata from '../../hooks/use-site-config'

const SEO = props => {
  const { isBlogPost, path = '', lang = 'en', datePublished } = props
  const {
    siteTitle,
    siteUrl,
    siteCover,
    siteDescription,
    twitterUsername,
    authorName,
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
  const url = formatedSiteUrl + withPrefix(path)

  return (
    <>
      <Helmet title={title}>
        {/* General tags */}
        <html lang={lang} />
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {internalTranslations.map(translation => (
          <link
            key={`head-translation-${translation.hreflang}`}
            rel="alternate"
            hreflang={translation.hreflang}
            href={formatedSiteUrl + withPrefix(translation.link)}
          />
        ))}

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
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
      <SchemaOrg
        isBlogPost={isBlogPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={url}
        author={authorName}
        organization={siteTitle}
        defaultTitle={title}
      />
    </>
  )
}

export default SEO
