const config = require('./src/utils/siteConfig')
let contentfulConfig

try {
  contentfulConfig = require('./.contentful')
} catch (e) {
  contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN,
    },
  }
} finally {
  const { spaceId, accessToken } = contentfulConfig.production
  if (!spaceId || !accessToken) {
    throw new Error('Contentful space ID and access token need to be provided.')
  }
}

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl,
      feed_url: `${config.siteUrl}/rss.xml`,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl}${config.siteLogo}`,
      author: config.author,
      copyright: config.copyright,
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:100,200,300,400,500,700,800', 'Crimson+Text:400,400i']
        }
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options:
        process.env.NODE_ENV === 'development'
          ? contentfulConfig.development
          : contentfulConfig.production,
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: config.siteUrl,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 650,
              backgroundColor: 'white',
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-69B316P6VD'
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    }
  ],
}
