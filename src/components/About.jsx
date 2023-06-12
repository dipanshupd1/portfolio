import React,{useState} from 'react'
import "../about.css"

function About() {
    const [animationstarting,setanimationstarting]=useState(false)
    let buttonStyle={animation: 'buttonfall 750ms',
    animationIterationCount: 1,
    animationFillMode: "forwards",
    animatioTimingFunction: "linear",
    display:"block"}
   
    const msg2="Click"
    const movetoskill=()=>{
        window.location.replace("/#skill")
    }
    const animationstart=()=>{
        setanimationstarting(true)
    }

    if(!animationstarting){
        buttonStyle={
            border:"none"
        }
    }
    
  return (
    <>
    <div id="about">
    <div id="about-main-left"><div>ABOUT <span>ME</span></div>
    <button id='about-button' onClick={movetoskill} style={buttonStyle} >{msg2}</button>
    </div>
    <div id="about-main-right">
    
    <div id="about-right-inner" onMouseOver={animationstart}>
    <p className="para">I'm <span>Dipanshu Prasad</span> , a passionate <span>web developer and programmer</span>  with a love for creating innovative and user-friendly digital experiences</p>
     <p className="para">I thrive on the challenges that come with crafting elegant solutions to complex problems, and I'm constantly seeking opportunities to expand my knowledge and stay up-to-date with the latest industry trends.</p>
     <p className="para">Collaboration and effective communication are crucial aspects of my work philosophy.  
    Beyond my technical expertise, I am committed to <span>delivering projects on time and within budget</span> , ensuring client satisfaction and fostering long-term partnerships</p>
    <p className="para">If you have any questions or would like to discuss a potential collaboration, please feel free to reach out to me. <span>Let's build something great together!</span> </p>
    
    </div>
    </div>
   
    </div>

    </>
  )
}

export default About