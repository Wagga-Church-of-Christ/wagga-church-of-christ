import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../src/utils/siteConfig'
import Layout from '../src/components/Layout'
import Container from '../src/components/Container'
import PageTitle from '../src/components/PageTitle'
import PageBody from '../src/components/PageBody'
import SEO from '../src/components/SEO'

const PageTemplate = ({ data, pageContext }) => {
  const root = '/'
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage
  const navigation = pageContext.navigation

  return (
    <Layout navigation={navigation} >
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={'/'} postNode={postNode} pageSEO root={root} />

      <Container>
        <PageTitle>{title}</PageTitle>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
