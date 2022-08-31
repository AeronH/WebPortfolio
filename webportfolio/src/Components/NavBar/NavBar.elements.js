import styled from 'styled-components'


export const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  margin-right: 150px;
  @media (max-width: 640px) {
    display: none;
  }
`

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  gap: 10px;
  width: fit-content;
  height: 100%;
`

export const NavLi = styled.li`
  width: 150px;
  text-align: center;
`

export const NavLink = styled.a`
  color: ${({theme}) => theme.colors.dark};
  text-decoration: blueviolet;
  font-weight: 400;
  font-size: 16px;
  transition: .25s;
  &:hover {
    cursor: pointer;
    font-size: 20px;
    color: ${({theme}) => theme.colors.lightDark}
  }
  &:active {
    color: ${({theme}) => theme.colors.darkTeal};
    font-size: 18px;
  }
`