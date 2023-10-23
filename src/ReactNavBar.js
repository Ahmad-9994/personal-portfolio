import React from 'react'
import { NavLink } from 'react-router-dom';


const ReactNavBar = () => {
    return (

        <nav class="navbar">
            <div class="navbar-container">
                <div class="navbar-left">
                    <a class="navbar-logo" href="#">
                        <img src='images/logo.png'></img>

                    </a>
                </div>
                <div class="navbar-center">
                    <ul class="navbar-menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="navbar-right">
                    <NavLink to={"/cart"} style={{ color: "white", fontSize: "45px" }}>fffe</NavLink>
                </div>
            </div>
        </nav>


    )
}

export default ReactNavBar


