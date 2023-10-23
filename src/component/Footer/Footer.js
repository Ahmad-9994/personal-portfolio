import React from "react";
import "./footer.css";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div class="sections-container">
  
      <section class="about-us">
        <h3>About Me</h3>
        <h6>Frontend Developer with high level experience and quality work levlel experience and quality work. As a proficient MERN (MongoDB, Express, React, Node.js) stack developer.</h6>
      </section>

      
      <section class="contact-us">
        <h2>Contact Us</h2>
        <ul>
          <li>Contact #: 03080947124</li>
          <a  style={{textDecoration:"none"}} href="https://www.linkedin.com/in/ahmad-ali-51893b282/"><li>linkedin</li></a>
         
          <a class="nav-link " aria-current="page" href="#"><li>Email :ahmadaspire661@gmail.com</li></a>
        
        </ul>
      </section>

      
      <section class="projects">
        <h2>Projects</h2>
        <ul>
          <li>E-Clinic (FYP) </li>
          <li>Blog site</li>
          <li>Personal portfolio</li>
          <li>Ecommerce Frontend Design</li>
          <li>Mini projects (calulator ,Accordion app ,TO-DO LIST ,etc )</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
