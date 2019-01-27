import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
import PageBody from './PageBody'
import PostDate from './PostDate'

const Wrapper = styled.div`

`

const PostLinks = ({ title, publishDate, speaker, audioLink, description, ...props }) => {
  return (
    <Wrapper>
      <PageTitle>{title}</PageTitle>
      <PostDate>{publishDate}</PostDate>
      <b>Speaker: </b> {speaker}
      <audio controls="controls"><source src={audioLink} type="audio/mpeg" /></audio>
      {description.childMarkdownRemark.html}
      <a href={audioLink}>Download this audio</a>
    </Wrapper>
  )
}

export default PostLinks
