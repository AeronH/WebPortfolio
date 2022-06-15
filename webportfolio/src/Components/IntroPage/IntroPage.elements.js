import styled from 'styled-components'
import { Container, DefaultButton } from '../../GlobalStyles'


export const IntroPageContainer = styled(Container)`
  height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Theme = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 32px;
  right: 32px;
`

export const TitleCard = styled.div`
  max-height: 500px;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  margin-top: 100px;
`

export const Introduction = styled.div`
  letter-spacing: 1px;
`

export const Intro1 = styled.p`
  font-size: 32px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.lightDark};
  margin-bottom: 4px;
`

export const Name = styled.h1`
  color: ${({theme}) => theme.colors.dark};
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const Intro2 = styled.h2`
  font-size: 48px;
  color: ${({theme}) => theme.colors.lightDark};
  margin-bottom: 24px;
`

export const Links = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 32px;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  transform: scale(1.5);
  transition: 0.25s;
  color: ${({theme}) => theme.colors.dark};
  &:hover {
    transform: scale(1.6);
    cursor: pointer;
    color: ${({theme}) => theme.colors.lightDark};
  }

  &:active {
    transform: scale(1.5);
    color: ${({theme}) => theme.colors.dark};
  }
`

export const SeeMore = styled(DefaultButton)`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`
