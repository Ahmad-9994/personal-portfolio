import React from 'react'
import "./service.css"

const ServiceCard = (props) => {

  const service=[
    {
      title:"Web Developer",
      skill:"Html , css ,bootstrap ,JavaScript ,React js"
    },
    {
      title: "Web Developer",
      skill: "Html , css ,bootstrap ,JavaScript ,React js"
    },
    {
      title: "freelancer",
      skill: "Html , css ,bootstrap ,JavaScript ,React js"
    },

  ]
  return (

    
    <div className='servce-card'>
   <img src={props.image}></img>
    <span style={{fontWeight:"bold"}}>Web Developer</span><br></br>
    <span>Html, Css, BootStrap <br></br> JavaScript, React js, Express js, Node js </span>
    <button className='s-card-button'>Learn more</button>

      
    </div>
  )
}

export default ServiceCard
