import styled from 'styled-components'
import { Container } from '../../GlobalStyles'


export const About = styled.section`
  background-color: ${({theme}) => theme.colors.lightTeal};  
`

export const Wrapper = styled(Container)`
  height: 950px;
  display: flex;
  flex-direction: column;
`

export const AboutTitle = styled.h1`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.dark};
  text-decoration: underline;
  font-size: 40px;
  font-weight: 300;
`

export const Info = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
`

export const MyInfo = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 24px;
`

export const Title = styled.h2`
  height: 72px;
  display: flex;
  align-items: center;
  font-size: 32px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.dark};
`

export const MyParagraph = styled.p`
  color: ${({theme}) => theme.colors.dark};
  margin: 48px 0;
  font-size: 20px;
`

export const Image = styled.img`
  height: 500px;
  border-radius: 50px;
  box-shadow: 4px 4px 10px black;
`

export const MySkills = styled.div`
  width: 50%;
  height: 100%;
`

export const SkillsList = styled.ul`
  margin-left: 48px;
  color: ${({theme}) => theme.colors.dark};
  display: flex;
  align-items: flex-start;
  list-style: none;
  flex-wrap: wrap;
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



