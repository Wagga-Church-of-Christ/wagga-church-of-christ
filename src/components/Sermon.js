import React from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'
// import Body from './PageBody'
// import PostDate from './PostDate'

const Wrapper = styled.div`

`
const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.25em;
  }
  h3 {
    font-size: 1em;
  }

  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const DateWrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Date = styled.p`
  display: inline-block;
  span {
    font-weight: 600;
  }
`

const SermonDate = props => {
  return (
    <DateWrapper>
      <Date>
        <span>Date Sermon was Delivered:</span> {props.date}
      </Date>
    </DateWrapper>
  )
}

const Sermon = ({ title, publishDate, speaker, audioLink, description, ...props }) => {
  return (
    <Wrapper>
      <PageTitle>{title}</PageTitle>
      <SermonDate date={publishDate} />
      <Body>
        <h3>Speaker: {speaker}</h3>
        <p>
          <audio style="width: 100%;" controls="controls"><source src={audioLink} type="audio/mpeg" /></audio>
        </p>
      </Body>

      <Body 
        dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }}
      />

      <Body>
        <a href={audioLink}>Download this audio (right click here and press "Save link as...")</a>
      </Body>
    </Wrapper>
  )
}

export default Sermon
