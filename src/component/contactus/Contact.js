import React from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2cpo68o', 'template_ng5sbmh', form.current, 'YKEazVLRihWRUCTXQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };





  return (
    <div className='contact-main' id='contact'>
    
      <div className='c-right'><img src='images/getintouch.png'></img>

      <div className='blur'></div>
      
      </div>
      
      <div className='c-left'>
      <h1>Contact Us </h1>

      <form id="contact-form" ref={form} onSubmit={sendEmail}>
    <div className="form-group">
        <label >Name</label>
        <input type="text" className="form-control" name='name' placeholder='your name'/>
    </div>
    <div className="form-group">
        <label >Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" name='user_email' placeholder='your e-mail' />
    </div>
    <div className="form-group">
        <label >Message</label>
        <textarea className="form-control" rows="5" name='message' placeholder='text here '></textarea>  
    </div>
    <div ><button type="submit" className="button c-button">Submit</button></div>
  
</form>

      </div>
      
     
      
      </div>
   
  )
}

export default Contact
