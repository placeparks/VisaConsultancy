import React from 'react'
import MainSection from './MainSection'
import CountrySection from './CountrySection'
import WorkPermit from './WorkPermit'
import AboutSection from './About'
import CTA from './CTA'

const Home = () => {
  return (
    <div>
      <MainSection/>
      <div className='bg-slate-100 max-w-full'>
      <CountrySection/>
      </div>
      <WorkPermit/>
      <AboutSection/>
      <CTA/>
    </div>
  )
}

export default Home
