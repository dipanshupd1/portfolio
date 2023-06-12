import React from 'react'
import '../assets/css/project.css'

import vaarta from '../assets/vaarta.jpg'
import notebook from '../assets/notebook.jpg'
import cineman from '../assets/cineman.jpg'
import { AiOutlineGithub } from "react-icons/ai";

function Project() {
  return (
    <>
    <div id='main-container'>
      <div id='projects'>MY PROJECTS</div>

    <div className="project-box">
    <div className="project-image"><a href="https://vaarta-mu.vercel.app/" target='_blank'><img src={vaarta} alt=""  /></a></div>
      <div className="project-desc">
        <h1 className='project-title'><span className='project-title-span'>VAARTA</span>  <a href="https://github.com/dipanshupd1/vaarta"><AiOutlineGithub className='project-icon'/> </a> </h1>
        Vaarta is a real time Chat Application which uses <b>Socket.io</b> for bidirectional transfer of data in real time. It is a MERN stack application which uses <b style={{color:'black'}}>React</b> as frontend and <b style={{color:'black'}}>NodeJS </b>(Express.js)
        as a backend. <b style={{color:'black'}}>MongoDB</b> is used to stored the user credentials and chats so that, the user's chats are saved even after closing the application
      </div>
    </div>

    <div className="project-box">
    <div className="project-image"><a href='https://notebook-jej2.onrender.com/' target='_blank'><img src={notebook} alt="" /></a></div>
      <div className="project-desc">
        <h1 className='project-title'><span className='project-title-span'>NOTEBOOK</span>  <a href="https://github.com/dipanshupd1/Notebook"><AiOutlineGithub className='project-icon'/> </a> </h1>
      Notebook is a note making application but not a typical one. Its simple and modern design alllows user to make notes and allows them to access them from any device. <b>HBS</b> is used as frontend, <b>Express</b>
      is used as backend. With <b>MongoDB</b> used as database and <b>JWT</b> for authorization, this application becomes very powerful and one of its kind.
            </div>
    </div>

   
    <div className="project-box">
    <div className="project-image"><a href="https://cineman-movie.vercel.app/" target='_blank'><img src={cineman} alt="" /></a></div>
      <div className="project-desc">
        <h1 className='project-title'><span className='project-title-span'>CINEMAN</span>  <a href="https://github.com/dipanshupd1/Cineman---Movie-Streaming-Website"><AiOutlineGithub className='project-icon'/> </a> </h1>
       Cineman is a movie streaming application which uses I-frame to play movies from youtube. The main purpose of this application is to create all elements in a single page 
       by manipulating the display property. It uses <b>HTML</b> <b>CSS</b> and <b>Javascript</b> as the frontend
      </div>
    </div>
    </div>
      </>
  )
}

export default Project
