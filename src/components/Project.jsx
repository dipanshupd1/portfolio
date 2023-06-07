import React from 'react'
import '../assets/css/project.css'
import Projectcard from '/src/components/Projectcard.jsx'

function Project() {
  return (
    <div id='main-container'>
      <div id='projects'>MY PROJECTS</div>
      <div id="project-box">
      <div id="project-box-front">
      <Projectcard/>
      <Projectcard/> 
      <Projectcard/>
      
       </div>

      </div>
    </div>
  )
}

export default Project
