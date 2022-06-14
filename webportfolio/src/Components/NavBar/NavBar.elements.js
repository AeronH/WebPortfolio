import styled from 'styled-components'


export const NavContainer = styled.nav`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
`

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 1500px;
  height: 100%;
  margin-right: 48px;
`

export const NavLink = styled.a`
  color: ${({theme}) => theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  font-style: italic;
  margin-left: 40px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    transform: scaleY(10px);
  }
  

`