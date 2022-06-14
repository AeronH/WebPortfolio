import styled, { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
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

export default GlobalStyles