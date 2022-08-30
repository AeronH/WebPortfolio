import React from 'react'
import ParticleBackground from '../ParticleBackground'
import { IntroPageContainer, TitleCard, Introduction, Links, Name,
Intro1, Intro2, IconButton, Theme, SeeMore } from '../Components/IntroPage/IntroPage.elements'
import { DefaultButton } from '../GlobalStyles';
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

  return (
      <IntroPageContainer id='IntroPage'>
        <Theme>
          <IconButton onClick={changeTheme}>
            {colorTheme === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>                         
        </Theme>

        <TitleCard>
          <Introduction>
            <Intro1>Hey, I'm</Intro1>
            <Name>Aeron Horne,</Name>
            <Intro2>Software Developer.</Intro2>
          </Introduction>

          <Links>
            <IconButton href="https://github.com/AeronH" target="_blank"><GitHubIcon /></IconButton>

            <IconButton href='https://www.linkedin.com/in/aeron-horne-051b2a242/' target="_blank"><LinkedInIcon /></IconButton>

            <DefaultButton>Resume</DefaultButton>
          </Links>
        </TitleCard>

        <SeeMore as='a' href='#AboutMe'>
          <KeyboardArrowDownIcon/>See More<KeyboardArrowDownIcon/>
        </SeeMore>
        
        <ParticleBackground colorTheme={colorTheme === 'light' ? lightTheme : darkTheme}/>
      </IntroPageContainer>
  )
}

export default IntroPage