import React, { useState } from 'react'
import { WorkCardContainer, PreHoverContainer, PostHoverContainer, WorkTitle, WorkDesc, WorkLinks, WorkLink } from './MyWork.elements';

function WorkCard({image, logo, title, description, links}) {

  const [hoverCard, setHoverCard] = useState(false);

  return (
    <WorkCardContainer 
      onMouseEnter={() => setHoverCard(true)} 
      onMouseLeave={() => setHoverCard(false)}>

      {!hoverCard ?
      <PreHoverContainer style={{backgroundImage: `url(${image})`}}>
        <img src={logo} style={{scale: '.7'}}/>
      </PreHoverContainer>
      :
        <PostHoverContainer>
          <WorkTitle>{title}</WorkTitle>
          <WorkDesc>{description}</WorkDesc>
          <WorkLinks>
            <WorkLink href={links.githubLink} target='_blank'>Code</WorkLink>
            <WorkLink href={links.siteLink} target='_blank'>Visit Site</WorkLink>
          </WorkLinks>
        </PostHoverContainer>
      }

    </WorkCardContainer>
    )
  
}

export default WorkCard