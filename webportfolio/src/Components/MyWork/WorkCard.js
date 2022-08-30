import React from 'react'
import { WorkCardContainer, WorkDesc, WorkLinks, WorkLink, WorkTitle } from './MyWork.elements';

function WorkCard({project}) {

  

  return (
      <WorkCardContainer style={{backgroundImage: `url(${project.image})`}}>
        <WorkTitle>{project.title}</WorkTitle>
        <div>
          <WorkDesc>
            {project.description}
          </WorkDesc>
          <WorkLinks>
            <WorkLink href={project.siteLink} target='_blank'>Live Site</WorkLink>
            <WorkLink href={project.githubLink} target='_blank'>&#60; View Code &#62;</WorkLink>
          </WorkLinks>
        </div>
      </WorkCardContainer>
    )
  
}



export default WorkCard