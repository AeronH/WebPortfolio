import styled from 'styled-components';
import { Container, PageTitle } from '../../GlobalStyles'
import { motion } from 'framer-motion'
import { DefaultButton } from '../../GlobalStyles';

export const Work = styled.section`
  min-height: 100vh; 
`

export const Wrapper = styled(Container)`
  padding: 120px 40px 40px 40px;
  display: flex; 
  align-items: flex-start;
  @media(max-width: 1057px) {
    padding: 120px 10px 40px 20px;
  }
  @media(max-width: 902px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`

export const WorkPageTitle = styled(motion.h1)`
  color: ${({theme}) => theme.colors.lightTeal};
  font-size: 40px;
  font-weight: 500;
  flex: 1;
  position: sticky;
  top: 120px;
  @media(max-width: 902px) {
    position: relative;
    top: 0;
  }
  @media(max-width: 714px) {
    font-size: 32px;
    text-align: center;
  }
`

export const WorkContainer = styled.div`
  flex: 3;
  margin-left: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 128px;
  min-height: fit-content;
  @media(max-width: 714px) {
    gap: 64px;
    margin: 0;
  }
`

export const WorkCardContainer = styled(motion.div)`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  height: 460px;
  width: 100%;
  padding: 48px 24px;
  @media(max-width: 1057px) {
    padding: 48px 0;
  }
  @media(max-width: 714px) {
    align-items: center;
    padding: 24px 12px;
    height: 660px;
  }

`

export const WorkImage = styled.div`
  position: absolute;
  z-index: -1;
  height: 35vw;
  max-height: 100%;
  width: 45vw;
  max-width: 55%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  left: 0;
  box-shadow: 3px 3px 5px black;
  transition: ease-in-out .1s;
  :hover {
    box-shadow: 5px 5px 10px black;
    cursor: pointer;
    transform: scale(1.01);
  }
  @media(max-width: 714px) {
    position: relative;
    height: 60vw;
    width: 60vw;
    max-width: 100%;
    margin-bottom: 12px;
  }
`

export const WorkTitle = styled.h1`
  color: ${({theme}) => theme.colors.lightTeal};
  font-size: 28px;
  padding-bottom: 12px;
`

export const WorkDesc = styled.p`
  color: ${({theme}) => theme.colors.dark};
  font-weight: 200;
  opacity: 110;
  width: 60%;
  background-color: ${({theme}) => theme.colors.lightTeal};
  padding: 24px;
  box-shadow: 1px 1px 5px black;
  @media(max-width: 714px) {
    width: 100%;
    padding: 12px;
  }
`

export const WorkTools = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  width: 45%;
  gap: 16px;
  padding: 0 8px;
  @media(max-width: 714px) {
    width: 100%;
    justify-content: center;
    margin-top: 12px;
  }
`

export const WorkTool = styled.li`
  font-size: 14px;
  color: ${({theme}) => theme.colors.lightTeal};
  font-style: italic;
`

export const WorkLinks = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 18px;
`

export const WorkLinkButton = styled(DefaultButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({theme}) => theme.colors.lightTeal};
  margin-left: 8px;
  width: fit-content;
  padding: 0 24px;
  box-shadow: 1px 1px 5px black;
  border: none;
`