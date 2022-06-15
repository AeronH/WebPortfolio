import React from 'react'
import { Wrapper, About, AboutTitle, Info, MyInfo, MySkills,
Title, MyParagraph, Image } from '../Components/AboutMe/AboutMe.elements'
import image from '../AustinMap.PNG'

function AboutPage() {
  return (
    <About  id='AboutMe'>
      <Wrapper>
        <AboutTitle>About Me</AboutTitle>
        <Info>
          <MyInfo>
            <Title>Who am I?</Title>

            <MyParagraph>
              I am a Software Developer based in Austin, TX. 
            </MyParagraph>
            
            <Image src={image} />
          </MyInfo>

          <MySkills>
            Skills
          </MySkills>
        </Info>
      </Wrapper>
    </About>
  )
}

export default AboutPage

