import React from 'react';
import './style.css';
import logo from './CoEdify-logo.png';
// import {Navlink} from "react-router-dom";


function Navbar() {
    return (
    <>
    <header>
        <img src={logo} alt="logo" className="logo"/>
   
        <nav>
            <ul className="nav__links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button className="btnSign">Sign up</button></a>
    </header>   
    </>
    )
}

export default Navbar
