import React from 'react'
import ParticleBackground from '../ParticleBackground'
import { IntroPageCont, TitleCardCont, IntroductionCont, LinksCont, NameCont } from '../Components/IntroPage/IntroPage.elements'
// import GitHubIcon from '@mui/icons-material/GitHub';

function IntroPage() {
  return (
      <IntroPageCont id='IntroPage'>
          <TitleCardCont>
            <IntroductionCont>Hey, I'm <NameCont>Aeron Horne</NameCont>,<br/>
              Web Developer.</IntroductionCont>
              <LinksCont></LinksCont>
          </TitleCardCont>
          <ParticleBackground/>
      </IntroPageCont>
  )
}

export default IntroPage