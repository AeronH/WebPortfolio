import React, { useEffect } from 'react'
import { Wrapper, About, Info, MyInfo, MySkills, SkillsList,
MyParagraph, Image, ImageWrapper, Skill, SkillImage, SkillName,
Seperator } from '../Components/AboutMe/AboutMe.elements'
import { PageTitle } from '../GlobalStyles'
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

  const skills = [
    {name:'HTML', image: htmlImage},
    {name:'CSS', image: cssImage},
    {name:'JavaScript', image: jsImage},
    {name:'TypeScript', image: tsImage},
    {name:'React', image: reactImage},
    {name:'NextJS', image: nextImage},
    {name:'TailwindCSS', image: twImage},
    {name:'Styled Components', image: scImage},
    {name:'Firebase', image: fbImage},
  ]

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) control.start('visible');
  }, [control, inView]);

  return (
    <About id='AboutPage'>
      <Wrapper>
        <Info
          ref={ref}
          variants={variant}
          initial='hidden'
          animate={control}>

          <MyInfo>
            <PageTitle>About Me</PageTitle>

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
            <PageTitle>Skills</PageTitle>
            <SkillsList>

              {skills.map((skill) => (
                <Skill>
                  <SkillName>{skill.name}</SkillName>
                  <SkillImage src={skill.image}/>
                </Skill>
              ))}
              
            </SkillsList>
          </MySkills>

        </Info>
      </Wrapper>
    </About>
  )
}

export default AboutPage

