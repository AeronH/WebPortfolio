import styled from 'styled-components'
import { Container } from '../../GlobalStyles'


export const About = styled.section`
  background-color: ${({theme}) => theme.colors.lightTeal}; 
  min-height: fit-content; 
`

export const Wrapper = styled(Container)`
  height: fit-content;  
  min-height: 850px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 32px;
  padding-top: 64px;
  @media (max-width: 1057px) {
    align-items: center;
  }
`

export const Info = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  @media (max-width: 1057px){
    flex-direction: column;
    align-items: center;
  }
`

export const MyInfo = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 1057px) {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const MyParagraph = styled.p`
  color: ${({theme}) => theme.colors.dark};
  margin: 48px 0;
  font-size: 20px;
  opacity: 70%;
  font-weight: 100;
`

export const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  height: 500px;
  width: 500px;
  /* border-radius: 50px; */
  box-shadow: 0 0 5px 10px ${({theme}) => theme.colors.lightTeal} inset;
  @media (max-width: 1057px) {
    width: 70%;
    max-width: 500px;
    height: 70%;
    max-height: 500px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: fit-content;
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
  margin-top: 48px;
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
  font-size: 20px;
  opacity: 80%;
  font-weight: 100;
`

export const SkillImage = styled.img`
  height: 80px;
  margin-top: 16px;
`



