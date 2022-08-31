import React, { useEffect } from 'react'
import { Wrapper, About, Info, MyInfo, MySkills, SkillsList,
MyParagraph, Image, ImageWrapper, Skill, SkillImage, SkillName,
AboutPageTitle, Seperator } from '../Components/AboutMe/AboutMe.elements'
import image from '../Images/AustinMap.PNG'
import htmlImage from '../Images/html5-logo-31813.png'
import cssImage from '../Images/kindpng_4640184.png'
import jsImage from '../Images/600px-JavaScript-logo.png'
import reactImage from '../Images/pngwing.com (1).png'
import scImage from '../Images/styled-components.png'
import fbImage from '../Images/kisspng-firebase-cloud-messaging-computer-icons-google-clo-github-5ad5d3ce4fc460.4730334415239628303267.png'
import nextImage from'../Images/800px-Nextjs-logo.svg.png'
import tsImage from '../Images/Typescript_logo_2020.svg.png'
import twImage from '../Images/Tailwind_CSS_Logo.svg.png'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variant } from '../utils/variants'

function AboutPage() {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) control.start('visible');
  }, [control, inView]);

  return (
    <About data-scroll-section id='AboutMe'>
      <Wrapper>
        <Info
          ref={ref}
          variants={variant}
          initial='hidden'
          animate={control}>

          <MyInfo>
            <AboutPageTitle>About Me</AboutPageTitle>

            <MyParagraph>
              I am a Software Developer based in Austin, TX. I specialize in creating
              high quality websites and apps made with a variety of modern technologies.
              I'm constantly seeking opportunities to learn new concepts, technologies, 
              and tools to create the best possible user experience.
            </MyParagraph>
            <ImageWrapper>
              <Image image={image}></Image>
            </ImageWrapper>
          </MyInfo>
          <Seperator/>
          <MySkills>
            <AboutPageTitle>Skills</AboutPageTitle>
            <SkillsList>
              <Skill>
                <SkillName>HTML</SkillName>
                <SkillImage src={htmlImage} />
              </Skill>

              <Skill>
                <SkillName>CSS</SkillName>
                <SkillImage src={cssImage} />
              </Skill>

              <Skill>
                <SkillName>JavaScript</SkillName>
                <SkillImage src={jsImage} />
              </Skill>

              <Skill>
                <SkillName>TypeScript</SkillName>
                <SkillImage src={tsImage} />
              </Skill>

              <Skill>
                <SkillName>React</SkillName>
                <SkillImage src={reactImage} />
              </Skill>

              <Skill>
                <SkillName>NextJS</SkillName>
                <SkillImage src={nextImage} />
              </Skill>

              <Skill>
                <SkillName>Tailwind CSS</SkillName>
                <SkillImage src={twImage} />
              </Skill>

              <Skill>
                <SkillName>Styled <br/>Components</SkillName>
                <SkillImage src={scImage} />
              </Skill>

              <Skill>
                <SkillName>Firebase</SkillName>
                <SkillImage src={fbImage} />
              </Skill>
              
            </SkillsList>
          </MySkills>
        </Info>
      </Wrapper>
    </About>
  )
}

export default AboutPage

