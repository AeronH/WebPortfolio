import styled from "styled-components";
import { motion } from 'framer-motion'

export const ContactContainer = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled(motion.main)`
  width: 100%;
  margin-bottom: 96px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  @media(max-width: 714px) {
    width: 75%;
  }
`

export const ContactH2 = styled.h2`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: ${({theme}) => theme.colors.lightTeal}; 
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

export const StyledEmail = styled.a`
  color: ${({theme}) => theme.colors.lightTeal}; 
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 64px;
  width: 80%;
`

export const ContactInput = styled.input`
  height: 40px;
  padding: 8px;
  margin-bottom: 12px;
`

export const ContactTextArea = styled.textarea`
  padding: 12px 8px;
  height: 160px;
  resize: none;
`

export const ContactSendButton = styled.input`
  font-size: 16px;
  height: 40px;
  margin-top: 12px;
  background-color: ${({theme}) => theme.colors.dark};
  color: ${({theme}) => theme.colors.lightTeal};
  border: 1px solid ${({theme}) => theme.colors.lightTeal};
  :hover {
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.gray};
  }
`

