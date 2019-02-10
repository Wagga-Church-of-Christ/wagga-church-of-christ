import React from 'react'

import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'


async function redirect(url) {
    window.location.replace(url)
}

const PageTemplate = ({ pageContext }) => {
  const navigation = pageContext.navigation
  const url = pageContext.redirect

  redirect(url);

  return (
    <Layout navigation={navigation} >
      <Container>
        <PageTitle>Redirecting...</PageTitle>
      </Container>
    </Layout>
  )
}

export default PageTemplate
