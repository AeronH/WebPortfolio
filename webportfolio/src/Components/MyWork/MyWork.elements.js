import styled from 'styled-components';
import { Container } from '../../GlobalStyles'

export const Work = styled.section`
  background-color: ${({theme}) => theme.colors.lightTeal}; 
  min-height: fit-content; 
  padding-top: 32px;
`

export const Wrapper = styled(Container)`
  padding: 32px;
  min-height: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WorkContainer = styled.div`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 16px;
  flex-wrap: wrap;
  min-height: fit-content;
`

export const WorkCardContainer = styled.div`
  height: 460px; 
  width: 340px;
  transition: 500ms linear;
`

export const PreHoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  /* filter: blur(2px); */
  border-radius: 10px;
  box-shadow: inset 0 0 0 1000px rgba(249, 191, 59, .7);
`

export const PostHoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkTeal};
  border-radius: 10px;
  padding: 24px;
`

export const WorkTitle = styled.h1`
  color: ${({theme}) => theme.colors.dark};
`

export const WorkDesc = styled.p`
  color: ${({theme}) => theme.colors.dark};
`

export const WorkLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const WorkLink = styled.a`
  color: ${({theme}) => theme.colors.dark};
  border: 2px solid ${({theme}) => theme.colors.lightDark};
  padding: 10px 16px;
  border-radius: 100px;
  text-decoration: none;
  :hover {
    background-color: ${({theme}) => theme.colors.gray}
  }
`