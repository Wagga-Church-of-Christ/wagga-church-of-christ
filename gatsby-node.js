const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const allCompletePromise = getNavigationConfig(graphql)
  .then(navigation => {
    // console.log(navigation)

    let promises = []
    
    promises.push(createLandingPage(createPage, navigation))
    promises.push(createPastorsBlog(createPage, graphql, navigation))
    promises.push(createSermons(createPage, graphql, navigation))
    promises.push(createGenericPages(createPage, graphql, navigation))
    promises.push(createRedirects(createPage, graphql, navigation))

    return Promise.all(promises)
  })
 
  return allCompletePromise
}

function getNavigationConfig(graphql) {
  const navigationPromise = new Promise((resolve, reject) => {
    graphql(`
      {
        contentfulConfiguration(name: {eq: "navigation"}) {
          data {
            text
            href
          }
        }
      }
    `).then(result => {
      let navigation = result.data.contentfulConfiguration.data
      resolve(navigation)
    })
  })

  return navigationPromise
}

function createRedirects(createPage, graphql, navigation) {
  const redirectsPromise = new Promise((resolve, reject) => {
    graphql(`
      {
        contentfulConfiguration(name: {eq: "redirects"}) {
          data {
            slug
            href
          }
        }
      }
    `).then(result => {

      const redirectData = result.data.contentfulConfiguration.data

      redirectData.map(({ slug, href }) => {
        createPage({
          path: `${slug}/`,
          component: path.resolve(`./src/templates/redirect.js`),
          context: {
            slug: slug,
            navigation,
            redirect: href
          },
        })
      })
      resolve()
    })
  })

  return redirectsPromise
}

function createLandingPage(createPage, navigation) {
  const landingPagePromise = new Promise((resolve, reject) => {
    // Create main home page
    createPage({
      path: `/`,
      component: path.resolve(`./src/templates/index.js`),
      context: {
        slug: 'home',
        navigation
      },
    })
    resolve()
  })

  return landingPagePromise
}

function createPastorsBlog(createPage, graphql, navigation) {
  const pastorsBlogPromise = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPastorsBlog(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPastorsBlog.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create Pastor's blog page
      createPage({
        path: `/pastors-blog/`,
        component: path.resolve(`./src/templates/pastors-blog-index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
          navigation
        },
      })

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/pastors-blog/${i + 2}/`,
          component: path.resolve(`./src/templates/pastors-blog-index.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
            navigation
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `/pastors-blog/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/pastors-blog-entry.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
            navigation
          },
        })
      })
      resolve()
    })
  })

  return pastorsBlogPromise
}

function createSermons(createPage, graphql, navigation) {
  const sermonsPromise = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulSermon(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulSermon.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      createPage({
        path: `/sermons/`,
        component: path.resolve(`./src/templates/sermon-index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
          navigation
        },
      })

      // Create additional pagination on home page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/sermons/${i + 2}/`,
          component: path.resolve(`./src/templates/sermon-index.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
            navigation
          },
        })
      })

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `/sermons/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/sermon-entry.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
            navigation
          },
        })
      })
      resolve()
    })
  })

  return sermonsPromise
}

function createGenericPages(createPage, graphql, navigation) {
  const pagesPromise = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
            navigation
          },
        })
      })
      resolve()
    })
  })

  return pagesPromise
}



