import React from 'react'
import { NavContainer, NavUl, NavLi, NavLink } from './NavBar.elements'

function NavBar() {

  return (
    <NavContainer>
      <NavUl>
        <NavLi><NavLink href='#AboutPage'>About Me</NavLink></NavLi>
        <NavLi><NavLink href='#MyWork'>My Work</NavLink></NavLi>
        <NavLi><NavLink href='#Contact'>Contact</NavLink></NavLi>
      </NavUl>
    </NavContainer>
  )
}

export default NavBar
