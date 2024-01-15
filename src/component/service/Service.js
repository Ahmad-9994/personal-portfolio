import React, { useEffect } from 'react'
import "./service.css"
import ServiceCard from './ServiceCard'
import "../../../node_modules/aos/dist/aos.css"
import Aos from 'aos'


const Service = () => {
  useEffect(()=>{
Aos.init({duration:2000})
  },[])
  return (
    <div className='services' id='service'>

    <div className='s-left'>
   <span>My Awesome</span><br></br>
   <span style={{color:"var(--orange)"}}>Services</span><br></br>
    <p>As a seasoned Frontend Developer skilled in React JS, Redux JS, and the latest web technologies, I specialize in crafting visually compelling and highly responsive user interfaces.</p>
    <button className='button s-button'>Download CV</button>

    <div className='blur'></div>
    </div>



    <div className='s-right'>

    <div className='cards'>
      <div className='first-card' data-aos="fade-right" data-aos-duration="2000"><ServiceCard  image="images/glasses.png"/></div>
      <div className='second-card' data-aos="fade-down-left" data-aos-duration="2000"><ServiceCard image="images/thumbup.png"/></div>
      <div className='third-card' data-aos="fade-left" data-aos-duration="2000"><ServiceCard image="images/humble.png"/></div>
      
      
    </div>   
      
    
    </div>
      
    </div>
  )
}

export default Service
