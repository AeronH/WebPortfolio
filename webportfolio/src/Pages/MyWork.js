import React from 'react'
import { Work, Wrapper, WorkContainer } from '../Components/MyWork/MyWork.elements'
import { PageTitle } from '../GlobalStyles'
import WorkCard from '../Components/MyWork/WorkCard'
import BlogEmpireImage from '../Images/BlogEmpirestill.png'
import BlogEmpireLogo from '../Images/blogempire.png'

function MyWork() {

  return (
    <Work id="MyWork">
      <Wrapper>
        <PageTitle>My Work</PageTitle>
        <WorkContainer>
          <WorkCard 
            image={BlogEmpireImage} 
            title={'Blog Empire'} 
            description={'BlogEmpire is a social media site that allows users to login using their google account and make blog posts under varying categories.'} 
            links={{siteLink: 'https://blogempire.vercel.app', githubLink: 'https://github.com/AeronH/blogempire'}}
            logo={BlogEmpireLogo}/>
          {/* <WorkCard 
            image={} 
            title={'AQI-Scan'} 
            description={} 
            links={}/> */}
          

        </WorkContainer>
      </Wrapper>
    </Work>
  )
}

export default MyWork