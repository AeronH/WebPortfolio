import React, { useState } from 'react'
import { NavContainer, NavUl, NavLink, Menu, DropdownMenu, DropdownLink } from './NavBar.elements'
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setTimeout(() => {
      setShowMenu(false);
    }, 250);
  }

  return (
    <NavContainer>
      <div>
        <NavUl>
          <li><NavLink href="#IntroPage">Home</NavLink></li>
          <li><NavLink href="#AboutMe">About Me</NavLink></li>
          <li><NavLink href="#MyWork">My Work</NavLink></li>
          <li><NavLink href="#Contact">Contact</NavLink></li>
        </NavUl>
        <Menu onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
        </Menu>
      </div>
      {showMenu && <DropdownMenu>
                     <li><DropdownLink onClick={handleMenu} href='#IntroPage'>Home</DropdownLink></li>
                     <li><DropdownLink onClick={handleMenu} href='#AboutMe'>About Me</DropdownLink></li>
                     <li><DropdownLink onClick={handleMenu} href='#MyWork'>My Work</DropdownLink></li>
                     <li><DropdownLink onClick={handleMenu} href='#Contact'>Contact</DropdownLink></li>
                   </DropdownMenu>}
    </NavContainer>
  )
}

export default NavBar
