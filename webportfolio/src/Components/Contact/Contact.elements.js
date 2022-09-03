import styled from "styled-components";
import { motion } from 'framer-motion'

export const ContactContainer = styled.section`
  min-height: 50vh;
`

export const Wrapper = styled(motion.main)`
  width: 100%;
  margin: 64px auto;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const ContactH2 = styled.h2`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`

export const IconContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  gap: 32px;
`

export const IconButton = styled.a`
  background-color: transparent;
  border: none;
  transform: scale(1.75);
  transition: 0.25s;
  color: ${({theme}) => theme.colors.lightTeal};
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

