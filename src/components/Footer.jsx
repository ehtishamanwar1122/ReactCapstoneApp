import React from "react";

import { FaFacebook} from "react-icons/fa";
import {AiFillTwitterCircle} from "react-icons/ai"
import {  FaLinkedin } from "react-icons/fa";
import "./styling/Footer.css"
const Footer = () =>{
    return (
   <footer className="footer">
            <div className="contact-info">
                <p>Email: ehtishamanwar.1112@gmail.com</p>
                <p>Phone: +92 346 7688722</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com">
                    <FaFacebook className="icon" />
                </a>
                 <a href="https://www.twitter.com">
                    <AiFillTwitterCircle className="icon" />
                </a> 
                <a href="https://www.linkedin.com">
                    <FaLinkedin className="icon" />
                </a>
            </div>
        </footer>
    );
}
export default Footer