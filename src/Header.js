// import {useState} from 'react';
import React from 'react'
import './Header.css'
import logo from './JoyRideLogo.png';
// import logo from './IMG_9311.tiff';
// import database from './firebase';

// Head Function
const Header = () => {
    return (
        <div className="Header">
            <img src={logo} type="image/tiff"
                className="Image" align="left"/>
            <h1 className="Text">JOYRIDE</h1>
        </div>
    );
}


export default Header;
