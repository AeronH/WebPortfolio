import React, { useEffect } from 'react'
import { Work, Wrapper, WorkContainer, WorkPageTitle } from '../Components/MyWork/MyWork.elements'
import WorkCard from '../Components/MyWork/WorkCard'
import { projects } from '../utils/projects'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { variant } from '../utils/variants'

function MyWork() {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) control.start('visible');
  }, [control, inView]);

  return (
    <Work 
      data-scroll-section 
      id="MyWork">
      <Wrapper >
          <WorkPageTitle
            ref={ref}
            variants={variant}
            initial='hidden'
            animate={control}>Projects</WorkPageTitle>
          <WorkContainer>
            
            {projects.map((project, i) => (
              <WorkCard project={project} key={i}/>
            ))}

          </WorkContainer>
          
      </Wrapper>
    </Work>
  )
}

export default MyWork