import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import SermonCard from '../components/SermonCard'
import Sermon from '../components/Sermon'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'

const SermonIndexTemplate = ({ data, pageContext }) => {
  const root = '/sermons/'
  const posts = data.allContentfulSermon.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      <SEO root={root} />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}
      <Container>
        {posts.map(({ node: post }) => (
          <SermonCard key={post.id} {...post} root={root} />
        ))}
      </Container>
      <Pagination context={pageContext} />
    </Layout>
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
              excerpt(pruneLength: 80)
            }
          }
          body: description {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`

export default SermonIndexTemplate
