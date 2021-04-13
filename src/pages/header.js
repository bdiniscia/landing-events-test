import React from 'react';
import "./header.css";
import logo from "../images/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="div-logo" >
                <img src={logo} alt="Logo of company" />
            </div>
            <ul className="div-nav"> 
                <li><a href="#about">About</a></li>
                <li><a href="#">2021 Events</a></li>
                <li><a href="#past-events">Past Editions</a></li>
            </ul> 
        </header>
    )
}

export default Header
