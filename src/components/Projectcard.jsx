import React,{useState} from 'react'

function Projectcard() {
    const addstyle={position: "absolute", top: "80%"}
    let updatedstyle={};

    const [newStyle,setnewStyle]=useState(false)

    const scrolldown=()=>{
  
    setnewStyle(true);
    updatedstyle=addstyle
    }
    if(newStyle){
         updatedstyle=addstyle
         
    }
    else{
        updatedstyle={}
        
    }
    console.log(updatedstyle)
    const scrollup=()=>{
        setnewStyle(false)
    }
    
  return (
    <>
    <div id='cardwrapper'>
    <div id='project-desc' style={updatedstyle}>
        <p id='project-desc-para'>This is a movie streaming app, which totally focuses on the designing part rather than functionality. this project was made to show the true power or of designing</p>
    </div>
    <div id='card'></div>
    <div id="cardcover"></div>
    <div id="cardmiddlecover"></div>
    <div id="cardtop" onMouseOver={scrolldown} onMouseLeave={scrollup}><p id="card-title">CINEMAN</p>
    </div>
    </div>
    </>
  )
}

export default Projectcard
