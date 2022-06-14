import styled from 'styled-components'
import { Container } from '../../GlobalStyles'

export const IntroPageCont = styled(Container)`
  height: calc(100vh);
  /* margin-top: 60px; */
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TitleCardCont = styled.div`
  max-height: 500px;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const IntroductionCont = styled.h1`
  color: ${({theme}) => theme.colors.dark};
  font-size: 58px;
  font-weight: 700;
  padding: 30px 0;
  /* text-align: center; */
  letter-spacing: 2px;
  border: 1px solid green;
`

export const NameCont = styled.span`
  color: ${({theme}) => theme.colors.dark};
  font-style: italic;
  font-size: 64px;
  font-weight: 700;
`

export const LinksCont = styled.div`

`
