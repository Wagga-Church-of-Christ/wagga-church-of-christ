import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ScrollXParent = styled.div`
  height: 3em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index:20;
  overflow: hidden;
`

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  height: 3em;
  margin-bottom: -50px;
  padding-bottom: calc(1em + 50px);
  padding-top: 1em;
  overflow-y: hidden;
  overflow-x: scroll;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    white-space: nowrap
  }

  li {
    display: inline-block;
    margin-left: 1em;
    &:first-child {
      position: relative;
      margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = ({navigation}) => {
  return (
    <ScrollXParent>
        <Header>
          <Nav>
            <ul>
              {navigation.map(({ href, text }) => (
                <Link key={href} to={href} activeStyle={activeLinkStyle}>
                  {text}
                </Link>
              ))}
            </ul>
          </Nav>
        </Header>
    </ScrollXParent>
  )
}

export default Menu
