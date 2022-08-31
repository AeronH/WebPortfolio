import styled from 'styled-components'
import { Container, DefaultButton } from '../../GlobalStyles'
import { motion } from 'framer-motion'

export const IntroPageContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  max-width: 100vw;
`

export const Theme = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 36px;
  right: 36px;
`

export const TitleCard = styled.div`
  max-height: 500px;
  height: 100%;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  margin-top: 160px;
  @media (max-height: 709px) {
    margin-top: 50px;
  }
`

export const Introduction = styled.div`
  letter-spacing: 1px;
`

export const Name = styled(motion.h1)`
  color: ${({theme}) => theme.colors.dark};
  font-size: 96px;
  font-weight: 400;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 64px;
  }
`

export const Intro2 = styled(motion.h2)`
  font-size: 48px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const Links = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 32px;
`

export const IconButton = styled.a`
  background-color: transparent;
  border: none;
  transform: scale(1.5);
  transition: 0.25s;
  color: ${({theme}) => theme.colors.dark};
  display: flex;
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

export const ResumeButton = styled(DefaultButton)`
  background-color: ${({theme}) => theme.colors.lightTeal};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  :active {
    background-color: ${({theme}) => theme.colors.lightTeal};
  }
`

export const SeeMore = styled(DefaultButton)`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-bottom: 8vh;
  background-color: ${({theme}) => theme.colors.lightTeal};
  font-weight: 600;
`
