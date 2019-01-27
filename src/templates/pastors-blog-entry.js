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

const PastorsBlogEntryTemplate = ({ data, pageContext }) => {
  const root = '/pastors-blog/'
  const postNode = data.contentfulPastorsBlog

  console.log(pageContext)

  const {
    title,
    slug,
    heroImage,
    body,
    publishDate
  } = postNode

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO root={root} />

      <Hero title={title} image={heroImage} height={'50vh'} />

      <Container>
        <PostDate date={publishDate} />
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} root={root} name="Pastor's Blog Post"/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPastorsBlog(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "DD MMMM, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
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

export default PastorsBlogEntryTemplate
