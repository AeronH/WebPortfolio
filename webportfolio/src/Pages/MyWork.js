import React from 'react'
import { Work, Wrapper, WorkContainer } from '../Components/MyWork/MyWork.elements'
import { PageTitle } from '../GlobalStyles'
import WorkCard from '../Components/MyWork/WorkCard'
import BlogEmpireImage from '../Images/BlogEmpirestill.png'
import AqiScanImage from '../Images/aqiscanstill.png'

function MyWork() {

  const projects = [
    {
      image: BlogEmpireImage,
      title: 'Blog Empire',
      description: 'BlogEmpire is a social media site that allows users to login using their google account and make blog posts under varying categories.',
      siteLink: 'https://blogempire.vercel.app',
      githubLink: 'https://github.com/AeronH/blogempire'
      
    },
    {
      image: AqiScanImage,
      title: 'AQI-Scan',
      description: 'Aqi Scan is an app that allows users to see the air quality index of places around the world on an interactive map and select which one they want more indepth information on.',
      siteLink: 'https://aqi-scan.vercel.app',
      githubLink: 'https://github.com/AeronH/aqi-scan'
    }
  ]

  return (
    <Work id="MyWork">
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