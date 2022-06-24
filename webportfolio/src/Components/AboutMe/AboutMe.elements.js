import styled from 'styled-components'
import { Container } from '../../GlobalStyles'


export const About = styled.section`
  background-color: ${({theme}) => theme.colors.lightTeal}; 
  min-height: fit-content; 
`

export const Wrapper = styled(Container)`
  height: fit-content;  
  min-height: 950px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 64px;
`

export const Info = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  @media (max-width: 1057px){
    flex-direction: column;
    align-items: center;
  }
`

export const MyInfo = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 24px;
  @media (max-width: 1057px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Title = styled.h2`
  height: 72px;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.dark};
  @media (max-width: 1057px) {
    justify-content: center;
    margin-top: 32px;
  }
`

export const MyParagraph = styled.p`
  color: ${({theme}) => theme.colors.dark};
  margin: 48px 0;
  font-size: 20px;
`

export const Image = styled.img`
  width: 500px;
  border-radius: 50px;
  box-shadow: 4px 4px 10px black;
  @media (max-width: 1057px) {
    width: 70%;
    max-width: 500px;
  }
`

export const MySkills = styled.div`
  width: 50%;
  height: 100%;
  margin-bottom: 100px;
  @media (max-width: 1057px) {
    width: 90%;
  }
`

export const SkillsList = styled.ul`
  margin-left: 48px;
  color: ${({theme}) => theme.colors.dark};
  display: flex;
  align-items: flex-start;
  list-style: none;
  flex-wrap: wrap;
  @media (max-width: 1057px) {
    margin-left: 0;
    justify-content: space-evenly;
  }
`

export const Skill = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 32px;
  width: 80px;
`

export const SkillName = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
`

export const SkillImage = styled.img`
  height: 80px;
  margin-top: 16px;
`



