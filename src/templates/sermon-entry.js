import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'

const SermonEntryTemplate = ({ data, pageContext }) => {
  const root = '/sermons/'
  const postNode = data.contentfulSermon

  const {
    title,
    slug,
    body,
    publishDate,
    speaker,
    audioLink,
    description
  } = postNode

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO root={root} />

      <Container>
        <PostDate date={publishDate} />
        <PageBody body={description} />
      </Container>
      <PostLinks previous={previous} next={next} root={root}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulSermon(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "DD MMMM, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      speaker
      audioLink
      description {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default SermonEntryTemplate
