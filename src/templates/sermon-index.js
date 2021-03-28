import React from 'react'
import { graphql } from 'gatsby'
// import CardList from '../components/CardList'
import SermonCard from '../components/SermonCard'
// import Sermon from '../components/Sermon'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

import Template from '../components/template/Template'

const SermonIndexTemplate = ({ data, pageContext }) => {
  const root = '/sermons/'
  const posts = data.allContentfulSermon.edges
  // const featuredPost = posts[0].node
  const { currentPage } = pageContext
  // const isFirstPage = currentPage === 1
  // const navigation = pageContext.navigation

  return (
    <Template>
      <div>
        <SEO root={root} />
        <Helmet>
          <title>{`Sermons - Page ${currentPage}`}</title>
        </Helmet>
        <Container>
          {posts.map(({ node: post }) => (
            <SermonCard key={post.id} {...post} root={root} />
          ))}
        </Container>
        <Pagination context={pageContext} root={root} />
      </div>
    </Template>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulSermon(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "DD MMMM, YYYY")
          speaker
          audioLink
          description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 250)
            }
          }
          body: description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 250)
            }
          }
        }
      }
    }
  }
`

export default SermonIndexTemplate
