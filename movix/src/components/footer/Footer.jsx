import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

const instahandle=()=>{
  window.location.href='https://www.instagram.com/'
};

const facehandle=()=>{
  window.location.href='https://www.facebook.com/'
};

const linkedinhandle=()=>{
  window.location.href='https://www.linkedin.com/'
};

const twitterinhandle=()=>{
  window.location.href='https://www.twitter.com/'
};

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    This is the clone of app and this is mine first project in React 
                    and SCSS its only contains the front-end. Below here these are my handles.
                </div>
                <div className="socialIcons">
                    <span className="icon" onClick={facehandle}>
                        <FaFacebookF />
                    </span>
                    <span className="icon" onClick={instahandle}>
                        <FaInstagram />
                    </span>
                    <span className="icon" onClick={twitterinhandle} >
                        <FaTwitter />
                    </span>
                    <span className="icon" onClick={linkedinhandle}>
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;