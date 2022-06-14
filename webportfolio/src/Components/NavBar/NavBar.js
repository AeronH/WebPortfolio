import React from 'react'
import { NavContainer, NavUl, NavLink } from './NavBar.elements'

function NavBar() {
  return (
    <NavContainer>
      <NavUl>
        <li><NavLink href="#IntroPage">Home</NavLink></li>
        <li><NavLink href="#AboutMe">About Me</NavLink></li>
        <li><NavLink href="#MyWork">My Work</NavLink></li>
        <li><NavLink href="#Contact">Contact</NavLink></li>
      </NavUl>
    </NavContainer>
  )
}

export default NavBar
