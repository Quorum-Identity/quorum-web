import React from "react";
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import  './navbar.css';
import * as Icon from 'react-feather';

const NavbarApp = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <h1>Broadway</h1>
            </div>
            <div className="navbar-items">

                
                <h1>Development</h1>
                <h1>About</h1>
                <button>Downloads</button>

                
            </div>
            <Icon.Menu color='#212035'/>
                
        </div>
    )
}
export default NavbarApp;