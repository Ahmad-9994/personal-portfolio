import React from 'react'
import "./nav.css"



const NavBar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light container-fluid">
      
        <h2>Portfolio</h2>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto text-center">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">Experience</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#service">Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skill">Skills</a>
            </li>
          </ul>

          <a href='#contact' style={{color:"black"}}><button type="button" class="btn button">Contact us</button></a>
        </div>
    
    </nav>


  )
}

export default NavBar