import styled from 'styled-components'
import { Container } from '../../GlobalStyles'
import { motion } from 'framer-motion'

export const About = styled.section`
  min-height: 100vh; 
`

export const Wrapper = styled(Container)`
  height: fit-content;  
  min-height: 850px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 64px 32px 32px 32px;
  overflow: hidden;
  @media (max-width: 1057px) {
    align-items: center;
  }
`

export const Info = styled(motion.div)`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 12px;
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
  color: ${({theme}) => theme.colors.lightTeal};
  margin: 48px 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 40px;
  text-indent: 32px;
`

export const Image = styled.div`
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  height: 500px;
  width: 500px;
  /* border-radius: 50px; */
  box-shadow: 0 0 5px 10px ${({theme}) => theme.colors.dark} inset;
  @media (max-width: 1057px) {
    width: 50vw;
    max-width: 500px;
    height: 50vw;
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
  margin-top: 32px;
  color: ${({theme}) => theme.colors.lightTeal};
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
  @media (max-width: 1057px) {
    margin: 16px;
  }
`

export const SkillName = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  height: 40px;
  font-size: 16px;
  font-weight: 300;
`

export const SkillImage = styled.img`
  height: 50px;
  margin-top: 16px;
`

export const Seperator = styled.div`
  border-left: 1px solid gray;
  height: 800px;
  margin: auto 24px;
  @media (max-width: 1057px){
    border-top: 1px solid gray;
    height: 0;
    width: 95%;
    margin: 24px auto;
  }
`



