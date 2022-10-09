/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu = (props) => {

    const baseURL = 'http://ampersand.paris';

    const scrollAbout = () => {
        if (window.location.href.indexOf("se") > -1) {
            const element = document.getElementById("about");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/se`
        }
    }
    
    const scrollSkills = () => {
        if (window.location.href.indexOf("se") > -1) {
            const element = document.getElementById("skills");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/se#skills`
        }
    }

    const scrollPortfolio = () => {
        if (window.location.href.indexOf("se") > -1) {
            const element = document.getElementById("portfolio");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/se#portfolio`
        }
    }

    const scrollExperience = () => {
        if (window.location.href.indexOf("se") > -1) {
            const element = document.getElementById("experience");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/se#experience`
        }
    }

    return (
        <div className="z-index h-one-hundred left-menu flex" id="left-menu">
            <div className="z-index relative menu-width h-one-hundred flex column just-center menu-side-padding white-border-right bg-bright-red cursor">
                <img onClick={props.active} className="z-index absolute left-menu-triangle-close cursor" id="left-close" src="./Images/WhiteTriangle.png" />       
                <h3 className="sub-title absolute white opacity-80 ">UX/UI Engineer</h3>
                <div>
                    <h3 onClick={scrollAbout} className="white menu cursor">about</h3>
                    <h3 onClick={scrollSkills} className="white menu cursor">skills</h3>
                    <h3 onClick={scrollPortfolio} className="white menu cursor">portfolio</h3>
                    <h3 onClick={scrollExperience} className="white menu cursor">experience</h3>
                </div>
            </div>
            <img onClick={props.active} className="left-menu-triangle cursor" id="left-open" src="./Images/WhiteTriangle.png" />       
        </div>
    )
}

export default LeftMenu;

