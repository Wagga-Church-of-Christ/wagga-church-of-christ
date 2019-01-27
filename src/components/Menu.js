import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Menu from './MenuResponsive'

import { navbarList } from '../utils/siteConfig'

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
  top: 0;
  left: 0;
  right: 0;
  height: 3em;
  position: fixed;
  z-index:20;
  padding: 1em;
`

// const nav = priorityNav.init();

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

// const Menu = () => {
//   return (
//     <Header>
//       <Nav>
//           <ul>
//             {navbarList.map(item => (
//               <li>
//                 <Link to={item.href} activeStyle={activeLinkStyle}>
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//       </Nav>
//     </Header>
//   )
// }

// Menu = MenuResponsive

export default Menu
