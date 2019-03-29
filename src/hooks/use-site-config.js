import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteTitle
          siteUrl
          authorName
          websiteHost {
            name
            url
          }
        }
      }
    }
  `)

  return result.site.siteMetadata
}

export default useSiteMetadata
