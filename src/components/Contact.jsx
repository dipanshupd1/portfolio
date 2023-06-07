import React ,{useState} from 'react'
import '../assets/css/project.css'
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterSquare,AiFillGithub,AiFillLinkedin} from "react-icons/ai";

function Contact() {
   
    const [datafill,setdatafill]=useState({
        inpName:"",
        inpEmail:'',
        inpMsg:""
    })
    const datachange=(e)=>{
        let value=e.target.value;
        setdatafill((prev)=>({
            ...prev,
            [e.target.name]:value
        }))
    }

const handleSubmit=(e)=>{
    e.preventDefault()
    let mailid="dipanshuprasad250@gmail.com"
    let mailbody=`From ${datafill.inpName}\n MESSAGE: ${datafill.inpMsg}`
    window.location.replace(`mailto:${mailid}?subject=${" "}&body=${mailbody}`)
    setdatafill(
        {
            inpName:"",
            inpEmail:"",
            inpMsg:""
        }
    )
}



  return (
    <div id='contact-div'>
    <h1 id='contact'>CONTACT ME</h1>
    <div id="contact-inner-box">
        <div id="contact-left">
            <form onSubmit={handleSubmit}>
               <p> Enter Your Name</p>  <br />
                <input type="text" required={true} onChange={datachange} name='inpName' className='contact-input' value={datafill.inpName} placeholder='Enter Your Name'/> <br />
               <p> Enter Your Email</p> <br />
                <input type="email" required={true} onChange={datachange} name="inpEmail" className='contact-input' value={datafill.inpEmail} placeholder='Enter Your Email'/><br />
                <p>Write Message </p><br />
                <textarea name="inpMsg" onChange={datachange} className='contact-input-msg' cols="30" rows="9" value={datafill.inpMsg} style={{resize:'none'}} placeholder='Type Your Message'></textarea>
                <input type="submit" id='contact-submit-btn' value="Submit" />
            </form>
        </div>
        <div id="contact-right">
        <p> Connect With Me</p>
        <div id="connect-icons">
        <a href="https://www.linkedin.com/in/dipanshu-prasad-641a18231/" ><AiFillLinkedin id='linkedin'/></a>
        <a href="https://github.com/dipanshupd1"><AiFillGithub id='github'/></a>
        <a href="https://www.instagram.com/dipanshupd/" ><BsInstagram id='insta'/></a>
        <a href="https://twitter.com/Dipanshupd" ><AiFillTwitterSquare id='twitter'/></a> 
        </div>
        </div>
    </div>

      
    </div>
  )
}

export default Contact
