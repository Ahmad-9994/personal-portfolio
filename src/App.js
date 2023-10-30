
import "./App.css"
import "./style.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";

import NavBar from "./component/navbar/NavBar";
import Intro from "./component/intro/Intro";
import Service from "./component/service/Service";
import Skills from "./component/Skill.js/Skills";
import Footer from "./component/Footer/Footer";
import Contact from "./component/contactus/Contact";
import Projects from "./component/projects/Projects";
import ReactNavBar from "../src/ReactNavBar"

import React, { createContext, useState } from "react";
 export const globalData = createContext();



function App() {
  const[data ,setData]=useState(32323232232)

  return (
<globalData.Provider value={data}>

    <div className="App">
   <NavBar />
       
  
   <Intro />
   <Service />
   <Skills />
   <Projects />
 
   <Contact />
   
   
      
   </div>

    </globalData.Provider>

  );
}
export default App;
