/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Prop {
  title: string
  meta: [
    {
      name: string
      content: string
    }
  ]
  description: string
  lang: string
}

function SEO({ meta, title }: Prop) {
  const { wordpressSiteMetadata, site } = useStaticQuery(
    graphql`
      query {
        wordpressSiteMetadata {
          description
          name
        }
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `
  )

  const metaTitle = wordpressSiteMetadata.name
    ? wordpressSiteMetadata.name
    : site.siteMetadata.title
  const metaDescription = wordpressSiteMetadata.description
    ? wordpressSiteMetadata.description
    : site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: `${site.siteMetadata.lang}`,
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  title: ``,
  lang: `ja`,
  meta: [],
  description: ``,
}

export default SEO
