const navbarList = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "About",
    href: "/about/"
  },
  {
    name: "Sermons",
    href: "/tag/sermons/"
  },
  {
    name: "Events",
    href: "/tag/events/"
  },
  {
    name: "Missions",
    href: "/tag/missions/"
  },
  {
    name: "Pastor's Blog",
    href: "/tag/pastors-blog/"
  }
]


module.exports = {
  navbarList,
  siteTitle: 'Wagga Church of Christ',
  siteTitleAlt: 'Wagga Church of Christ', // This allows an alternative site title for SEO schema.
  publisher: 'Wagga Church of Christ', // Organization name used for SEO schema
  siteDescription:
    'Growing together in Christ to impact our world. Wagga Church of Christ in Turvey Park, Wagga Wagga, NSW.',
  siteUrl: 'https://www.waggachurchofchrist.org.au', // Site domain. Do not include a trailing slash! If you wish to use a path prefix you can read more about that here: https://www.gatsbyjs.org/docs/path-prefix/
  postsPerHomePage: 7, // Number of posts shown on the 1st page of of the index.js template (home page)
  postsPerPage: 6, // Number of posts shown on paginated pages
  author: 'Wagga Church of Christ', // Author for RSS author segment and SEO schema
  authorUrl: 'https://www.waggachurchofchrist.org.au/', // URL used for author and publisher schema, can be a social profile or other personal site
  userTwitter: '@twitter', // Change for Twitter Cards
  shortTitle: 'Wagga Church of Christ', // Used for App manifest e.g. Mobile Home Screen
  shareImage: '/logos/share.jpg', // Open Graph Default Share Image. 1200x1200 is recommended
  shareImageWidth: 900, // Change to the width of your default share image
  shareImageHeight: 600, // Change to the height of your default share image
  siteLogo: '/logos/logo-512.png', // Logo used for SEO, RSS, and App manifest
  backgroundColor: '#e9e9e9', // Used for Offline Manifest
  themeColor: '#121212', // Used for Offline Manifest
  copyright: 'Copyright © 2019 Wagga Church of Christ', // Copyright string for the RSS feed
}
