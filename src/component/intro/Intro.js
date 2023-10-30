import React from 'react'
import "./intro.css"



const Intro = () => {
  return (
   <div className='intro-main'>
   <div className='i-left'>
   <div className='i-name'>
   <span>Hy! I am</span><br></br>
   <span style={{color:"var(--orange)"}}>AHMAD ALI</span><br></br>
   <p>Frontend Developer with high levlel experience and quality work levlel experience and quality work.
            As a proficient MERN (MongoDB, Express, React, Node.js) stack developer.
   </p>
   </div>

   <button className='button i-button'><a href='images/ahmadcv.pdf' download={true}>Download CV</a> </button>

   <div className='i-icon'>
          <a href='https://github.com/Ahmad-9994' target='blank'><img src='images/github.png'></img></a>
          <a href='https://www.linkedin.com/in/ahmad-ali-51893b282/' target='blank'><img src='images/linkedin.png'></img></a> 
  
   
   </div>
   
   </div>


   <div className='i-right'>

   

   <img src='images/portfoliopic.png'></img>
   

  <div className='blur'></div>
  
   </div>
   
   
   
   </div>
  )
}

export default Intro
