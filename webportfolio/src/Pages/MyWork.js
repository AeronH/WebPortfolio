import React from 'react'
import { Work, Wrapper, WorkContainer } from '../Components/MyWork/MyWork.elements'
import { PageTitle } from '../GlobalStyles'
import WorkCard from '../Components/MyWork/WorkCard'
import { projects } from '../utils/projects'

function MyWork() {

  return (
    <Work data-scroll-section id="MyWork">
      <Wrapper>
        <PageTitle>My Work</PageTitle>
        <WorkContainer>
          
          {projects.map((project) => (
            <WorkCard project={project} />
          ))}

        </WorkContainer>
      </Wrapper>
    </Work>
  )
}

export default MyWork