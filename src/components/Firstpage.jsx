import React,{useEffect} from 'react';

import Nav from '/src/components/Nav.jsx';



function Firstpage() {
    let name="< Hi, I Am Dipanshu />";
    let name2="{ Know More...}"
   const movedown=()=>{
        window.location.replace("/#about")
        }
    
  return (
    <>
        <Nav/>
    <div id="homediv">
    <div id="homediv-imgtag"></div>
    
    <div id="homediv-contentdiv">
        <div id="homediv-content">
        <h3>Welcome to My Portfolio</h3>
        <h1>{name}</h1>
        <p>A <span>FULLSTACK</span> Developer</p>
        <button id='home-button' onClick={movedown}>{name2} </button>
        </div>
        </div>
        
    


    </div>
    </>
  )
}

export default Firstpage