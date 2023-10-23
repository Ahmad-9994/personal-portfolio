import React from 'react'
import "./service.css"

const ServiceCard = (props) => {
  return (
    <div className='servce-card'>
   <img src={props.image}></img>
    <span style={{fontWeight:"bold"}}>Web Developer</span><br></br>
    <span>fuiff fufe  fe9fiefe9 <br></br>fefeu9ef9 e fefeu9ef9 efueu</span>
    <button className='s-card-button'>Learn more</button>

      
    </div>
  )
}

export default ServiceCard
