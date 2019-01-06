import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  height: 3em;
  padding: 1em 0;
  position: fixed;
  top: 0;
  z-index:20;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    white-space: nowrap
  }

  li {
    display: inline-block;
    margin-left: 1em;
    margin-right: 1em;
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

const Menu = () => {
  return (
    <Header>
      <Nav>
        <ul>
          <li>
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
          <li>
            <Link to="/tag/sermons/" activeStyle={activeLinkStyle}>
              Sermons
            </Link>
          </li>
          <li>
            <Link to="/tag/events/" activeStyle={activeLinkStyle}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/tag/missions/" activeStyle={activeLinkStyle}>
              Missions
            </Link>
          </li>
          <li>
            <Link to="/tag/pastors-blog/" activeStyle={activeLinkStyle}>
              Pastor's Blog
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
