import React from 'react'
import ParticleBackground from '../ParticleBackground'
import { IntroPageContainer, TitleCard, Introduction, Links, Name,
Intro2, IconButton, Theme, SeeMore, ResumeButton } from '../Components/IntroPage/IntroPage.elements'
import NavBar from '../Components/NavBar/NavBar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function IntroPage({ colorTheme, setColorTheme, lightTheme, darkTheme }) {
  
const changeTheme = () => {
  const newTheme = colorTheme === 'light' ? 'dark' : 'light';
  setColorTheme(newTheme);
}

const variant = {
  hidden: { x: '10vw', opacity : 0},
  visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 2.5
      }
  }
}

  return (
      <IntroPageContainer  data-scroll-section id='IntroPage'>
        <NavBar />
        <Theme>
          <IconButton onClick={changeTheme}>
            {colorTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>                         
        </Theme>

        <TitleCard>
          <Introduction>
            <Name
              animate='visible'
              initial='hidden'
              variants={variant}>
                Aeron Horne
            </Name>

            <Intro2
              variants={variant}
              initial={{ x: '-35vw', opacity: 0}}
              animate={{ x: 0, opacity: 1, transition: {type: 'spring', duration: 2.5, delay: .75}}}>
                Software Developer.
            </Intro2>
          </Introduction>

          <Links>
            <IconButton href="https://github.com/AeronH" target="_blank"><GitHubIcon /></IconButton>

            <IconButton href='https://www.linkedin.com/in/aeron-horne-051b2a242/' target="_blank"><LinkedInIcon /></IconButton>

            <ResumeButton as='a' href='https://drive.google.com/file/d/1Aepo-F0KVvxkAHf3b75lFJ--F4hUl2Il/view?usp=sharing' target="_blank">Resume</ResumeButton>
          </Links>
        </TitleCard>

        <SeeMore as='a' href='#AboutPage'>
          <KeyboardArrowDownIcon/>See More<KeyboardArrowDownIcon/>
        </SeeMore>
        
        <ParticleBackground colorTheme={colorTheme === 'light' ? lightTheme : darkTheme}/>
      </IntroPageContainer>
  )
}

export default IntroPage