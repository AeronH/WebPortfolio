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
  
`

export const WorkCard = styled.div`
  
`