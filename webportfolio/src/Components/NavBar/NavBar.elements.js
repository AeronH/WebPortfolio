import styled from 'styled-components'


export const NavContainer = styled.nav`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({theme}) => theme.colors.gray};
`

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 1500px;
  height: 100%;
  margin-right: 48px;
  @media (max-width: 630px) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: ${({theme}) => theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  font-size: 24px;
  margin-left: 40px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: ${({theme}) => theme.colors.darkTeal};
  }
`

export const Menu = styled.button`
  display: none;
  @media (max-width: 630px) {
    display: inline;
    height: 100%;
    transform: scale(1.5);
    background-color: transparent;
    border: none;
    margin-right: 16px;
    margin-top: 4px;
    &:hover {
      cursor: pointer;
    }
  }
`

export const DropdownMenu = styled.ul`
  display: none;
  transition: top 600ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
  @media (max-width: 630px) {
    width: 100%;
    height: fit-content;
    position: absolute;
    top: 60px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.gray};
    opacity: .95;
  }
`

export const DropdownLink = styled.a`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${({theme}) => theme.colors.dark};
  &:hover { 
    text-decoration: underline;
  }
  &:active {
    color: ${({theme}) => theme.colors.darkTeal};
  }
`