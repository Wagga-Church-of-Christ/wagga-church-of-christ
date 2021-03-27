const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const allComplete = Promise.all([
    createHomePage(createPage),
    createWhoWeArePage(createPage),
    createWhatWeBelievePage(createPage),
    createWhatsOnPage(createPage),
    createSermons(createPage, graphql)
  ])

  return allComplete
}


function createWhoWeArePage(createPage) {
  const promise = new Promise((resolve, reject) => {
    createPage({
      path: `/who-we-are`,
      component: path.resolve(`./src/components/about/AboutPage.tsx`),
      context: {
        defaultSection: 0
      },
    })
    resolve()
  })

  return promise
}

function createWhatWeBelievePage(createPage) {
  const promise = new Promise((resolve, reject) => {
    createPage({
      path: `/confession-of-faith`,
      component: path.resolve(`./src/components/about/AboutPage.tsx`),
      context: {
        defaultSection: 1
      },
    })
    resolve()
  })

  return promise
}

function createWhatsOnPage(createPage) {
  const promise = new Promise((resolve, reject) => {
    createPage({
      path: `/whats-on`,
      component: path.resolve(`./src/components/about/AboutPage.tsx`),
      context: {
        defaultSection: 2
      },
    })
    resolve()
  })

  return promise
}

function createHomePage(createPage) {
  const promise = new Promise((resolve, reject) => {
    createPage({
      path: `/`,
      component: path.resolve(`./src/components/home/HomePage.tsx`)
    })
    resolve()
  })

  return promise
}


function createSermons(createPage, graphql) {
  const promise = new Promise((resolve, reject) => {
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
          currentPage: 1
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
            currentPage: i + 2
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
            next
          },
        })
      })
      resolve()
    })
  })

  return promise
}


// function createRedirects(createPage, graphql, navigation) {
//   const redirectsPromise = new Promise((resolve, reject) => {
//     graphql(`
//       {
//         contentfulConfiguration(name: {eq: "redirects"}) {
//           data {
//             slug
//             href
//           }
//         }
//       }
//     `).then(result => {

//       const redirectData = result.data.contentfulConfiguration.data

//       redirectData.map(({ slug, href }) => {
//         createPage({
//           path: `${slug}/`,
//           component: path.resolve(`./src/templates/redirect.js`),
//           context: {
//             slug: slug,
//             navigation,
//             redirect: href
//           },
//         })
//       })
//       resolve()
//     })
//   })

//   return redirectsPromise
// }


// function createPastorsBlog(createPage, graphql, navigation) {
//   const pastorsBlogPromise = new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allContentfulPastorsBlog(
//           sort: { fields: [publishDate], order: DESC }
//           limit: 10000
//         ) {
//           edges {
//             node {
//               slug
//               publishDate
//             }
//           }
//         }
//       }
//     `).then(result => {
//       const posts = result.data.allContentfulPastorsBlog.edges
//       const postsPerFirstPage = config.postsPerHomePage
//       const postsPerPage = config.postsPerPage
//       const numPages = Math.ceil(
//         posts.slice(postsPerFirstPage).length / postsPerPage
//       )

//       // Create Pastor's blog page
//       createPage({
//         path: `/pastors-blog/`,
//         component: path.resolve(`./src/templates/pastors-blog-index.js`),
//         context: {
//           limit: postsPerFirstPage,
//           skip: 0,
//           numPages: numPages + 1,
//           currentPage: 1,
//           navigation
//         },
//       })

//       // Create additional pagination on home page if needed
//       Array.from({ length: numPages }).forEach((_, i) => {
//         createPage({
//           path: `/pastors-blog/${i + 2}/`,
//           component: path.resolve(`./src/templates/pastors-blog-index.js`),
//           context: {
//             limit: postsPerPage,
//             skip: i * postsPerPage + postsPerFirstPage,
//             numPages: numPages + 1,
//             currentPage: i + 2,
//             navigation
//           },
//         })
//       })

//       // Create each individual post
//       posts.forEach((edge, i) => {
//         const prev = i === 0 ? null : posts[i - 1].node
//         const next = i === posts.length - 1 ? null : posts[i + 1].node
//         createPage({
//           path: `/pastors-blog/${edge.node.slug}/`,
//           component: path.resolve(`./src/templates/pastors-blog-entry.js`),
//           context: {
//             slug: edge.node.slug,
//             prev,
//             next,
//             navigation
//           },
//         })
//       })
//       resolve()
//     })
//   })

//   return pastorsBlogPromise
// }



// function createGenericPages(createPage, graphql, navigation) {
//   const pagesPromise = new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allContentfulPage {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `).then(result => {
//       const pages = result.data.allContentfulPage.edges
//       pages.map(({ node }) => {
//         createPage({
//           path: `${node.slug}/`,
//           component: path.resolve(`./src/templates/page.js`),
//           context: {
//             slug: node.slug,
//             navigation
//           },
//         })
//       })
//       resolve()
//     })
//   })

//   return pagesPromise
// }



// function getNavigationConfig(graphql) {
//   const navigationPromise = new Promise((resolve, reject) => {
//     graphql(`
//       {
//         contentfulConfiguration(name: {eq: "navigation"}) {
//           data {
//             text
//             href
//           }
//         }
//       }
//     `).then(result => {
//       let navigation = result.data.contentfulConfiguration.data
//       resolve(navigation)
//     })
//   })

//   return navigationPromise
// }