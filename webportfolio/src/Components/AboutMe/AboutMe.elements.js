import styled from 'styled-components'
import { Container } from '../../GlobalStyles'


export const About = styled.section`
  background-color: ${({theme}) => theme.colors.dark};
`

export const AboutContainer = styled(Container)`
  height: 1000px;
  border: 1px solid yellow;
`