import React from "react";
import "./footer.css";


import { FaPhone, FaEnvelope } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="main-div bg-blue-900 text-white">
      <div className="container mx-auto p-4 md-p-0">
        <div className="main-div-p1 md-flex md-justify-between p-4">
          <div className="flex flex-col inner-div">
            <h1>Ahmad ali</h1>
            <p className="md-max-w-xs mt-2">
              Frontend Developer with a wealth of experience and a strong track record of delivering high-quality work. Proficient in MERN (MongoDB, Express, React, Node.js) stack development, dedicated to creating exceptional user experiences and innovative solutions.
            </p>
          </div>
          <div className="md-col-span-2 mt-1 inner-div">
            <h3 className="text-lg mb-4 md-mb-10 font-bold md-mt-10">Projects</h3>
            <p>E commerce (frontend Design)</p>
            <p>E-Clinic (frontend + backend)</p>
            <p>Blog website (frontend + backend)</p>
            <p>Mini Projects (Todo List ,Accordion ,calculator etc)</p>
          </div>
          <div className="md-col-span-2 mt-1 inner-div">
            <h3 className="text-lg mb-4 md-mb-10 font-bold md-mt-10">Contact Us</h3>
            <p className="md-row">Feel Free to contact with us via call or message</p>
            
            <div className="flex items-center mt-5">
              <FaPhone className="mr-2" />
              <p>+92-3080947124</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <p>ahmadaspire661@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="main-div-p2 h-16 flex flex-col md-flex-row justify-center items-center p-4 md-border-t md-border-white">
          <div className="text-center md-text-left mb-4 md-mb-0">
            <span>Copy Right @ 2023 company pvt ltd</span>
          </div>
          <div className="text-center md-text-right">
            Design and Develop By Ahmad ali
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
