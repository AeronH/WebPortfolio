import React, { useEffect } from 'react'
import { WorkCardContainer, WorkImage, WorkDesc, WorkLinks, WorkTitle, WorkTools, WorkTool, WorkLinkButton } from './MyWork.elements';
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { workVariant } from '../../utils/variants'

function WorkCard({project}) {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) control.start('visible');
  }, [control, inView]);

  return (
      <WorkCardContainer 
        ref={ref}
        variants={workVariant}
        initial='hidden'
        animate={control}>

        <WorkImage 
          as='a' 
          href={project.siteLink}
          target='_blank'
          image={project.image}/>

        <WorkTitle>{project.title}</WorkTitle>

        <WorkDesc>
          {project.description}
        </WorkDesc>

        <WorkTools>
          {project.builtWith.map((tool, i) => (
            <WorkTool key={i}>{tool}</WorkTool>
          ))}
        </WorkTools>

        <WorkLinks>
          <WorkLinkButton as='a' href={project.siteLink} target='_blank'>Visit Site</WorkLinkButton>
          <WorkLinkButton as='a' href={project.githubLink} target='_blank'>View Code</WorkLinkButton>
        </WorkLinks>
      </WorkCardContainer>
    )
  
}



export default WorkCard