import React from "react";
import logo from './Images/logo.svg';
import "./styling/Header.css"
const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo" />
        </header>
    );
}

export default Header;
