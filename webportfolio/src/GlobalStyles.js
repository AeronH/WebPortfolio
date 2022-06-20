import styled, { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    scroll-behavior: smooth;
    scroll-padding-top: 60px;
  }

  html
  {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    /* overflow-x: hidden;  */
  }

  #particles {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -99999;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`

export const DefaultButton = styled.button`
  height: 50px;
  width: 100px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.dark};
  border: 1px solid ${({theme}) => theme.colors.dark};
  border-radius: 3px;
  background-color: transparent;
  transition: .25s;
  &:hover {
    background-color: ${({theme}) => theme.colors.darkTeal};
    cursor: pointer;
    opacity: .8;
  }
`

export const GlobalContainer = styled.div`
  height: fit-content;
`

export default GlobalStyles