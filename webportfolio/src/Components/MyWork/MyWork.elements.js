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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 460px;
  width: 340px;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(100, 100, 100, .6);
  padding: 24px;
`

export const WorkImage = styled.img`
  scale: .8;
  margin-top: 18px;
`

export const WorkTitle = styled.h1`
  text-decoration: underline;
  margin-top: 18px;
`

export const WorkDesc = styled.p`
  color: black;
  opacity: 110;
`

export const WorkLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 18px;
`

export const WorkLink = styled.a`
  border: 2px solid black;
  padding: 10px 16px;
  text-decoration: none;
  background-color: lightgray;
  color: black;
  :hover {
    background-color: ${({theme}) => theme.colors.gray};
    cursor: pointer;
  }
`