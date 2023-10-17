import React from "react";
import './styling/Nav.css'; 

const Nav = () => {
    return (
        <nav className="nav">
            <ul className="nav-menu">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
