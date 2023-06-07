
import React, {useState} from 'react'
import '../assets/css/skill.css'

function Skill() {

  let msg2="Flip !!"
  let msg3='{...read more}'

 const flipbox=()=>{
 const container=document.getElementById("skill-box-wrap")
 container.classList.toggle("skill-box-wrap-transform")

 }
 const readmore=()=>{
      window.location.replace('/#projects')
 }
//  setflipStyle({})
 

  return (
    <div id='skill'>
      <div id="skill-content">
     
      <div id='skill-text'>SKILLS</div>
      
      <div id="skill-box-wrap">
      {/* <button id='readmore' onClick={readmore}>read more</button> */}
      <div id="skill-content-innerbox">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Node.JS</li>
          <li>Express.JS</li>
          <li>JQuery</li>
        </ul>
      </div>
      <div id="skill-content-innerbox-back">
        <ul>
          <li>React.js</li>
          <li>C++</li>
          <li>C</li>
          <li>Bootstrap</li>
          <li>MongoDB</li>
        </ul>
      </div>
      </div> 
      <div id="allbuttons">
        <button id='flipbtn' onClick={flipbox}>{msg2}</button>
        <button id='readmore' onClick={readmore}>{msg3}</button>
      </div>
      </div> 
      
     
     </div>
  )
}

export default Skill
