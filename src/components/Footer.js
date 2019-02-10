import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
`

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  padding: 1em 0 2em;
  margin: 0 1.5em;
`

const Item = styled.li`
  display: inline-block;
  padding: 0.25em 0;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 40%;
  }
`

const Links = styled.p`
  line-height: 1.6;
  text-align: center;
  font-size: small;
  a {
    font-weight: 600;
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight} !important;
    }
    &:visited {
      color: ${props => props.theme.colors.base};
    }
  }
`

const Text = styled.p`
  text-align: center;
  font-size: x-small;
`

const Footer = () => (
  <Wrapper>
    <List>
      <Item>
        <Links>
          <a href="mailto:waggachurchofchristpastor@gmail.com">
            Email the Pastor</a>
        </Links>
        <Links>
          <a href="http://cofcaustralia.org/">Australian Churches of Christ</a>
        </Links>
        <Links>
          <a href="https://www.freshhope.org.au/">NSW Churches of Christ</a>
        </Links>
        <Links>
          <a href="http://biblewebapp.com/">Bible Study Web App</a>
        </Links>
        <Links>
          <a href="https://www.waggaslifefm.com/">101.9 Wagga's Life FM</a>
        </Links>
        <br/>
        <Text>
          We respectfully acknowledge all Aboriginal People of the Wiradjuri 
          Nation who are the traditional custodians of the land on which we 
          meet.
        </Text>
      </Item>
      <Item>
        <Links>
          <a href="/members">Members Area</a>
        </Links>
        <Links>
          <a href="https://github.com/Wagga-Church-of-Christ/churchwebsite">
            Website source code on GitHub</a>
        </Links>
        <Links>
          <a href="/how-to-edit-website">How to edit website content</a>
        </Links>
        <Links>
          <a href="/edit">Content Editor</a>
        </Links>
      </Item>
    </List>
  </Wrapper>
)

export default Footer
