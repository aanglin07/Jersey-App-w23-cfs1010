import React from 'react'
import Contact from './Contact'
import './About.css'

const About = () => {
  return (
    <div>
        <div className='textformat'>
          <h1>Welcome to the Jersey App!</h1>
          <p>This Application seeks to provide soccer fans with a one stop location to view old and new jerseys, 
          while providing affiliate links to those jerseys to be purchased. 
          Whether it's that jersey that brings back that nostalgic feeling of when your favourite team won that most coveted trophy
          or that most recently released kit, that fills fans with pride and hope of what a new season will bring. </p>
        </div>
        <Contact />
    </div>
  )
}

export default About