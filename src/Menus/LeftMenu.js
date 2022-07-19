/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu = (props) => {

    const baseURL = 'http://ampersand.paris';

    const scrollAbout = () => {
        if (window.location.href.indexOf("about") > -1) {
            const element = document.getElementById("about");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/about`
        }
    }
    
    const scrollSkills = () => {
        if (window.location.href.indexOf("about") > -1) {
            const element = document.getElementById("skills");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/about#skills`
        }
    }

    const scrollPortfolio = () => {
        if (window.location.href.indexOf("about") > -1) {
            const element = document.getElementById("portfolio");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/about#portfolio`
        }
    }

    const scrollExperience = () => {
        if (window.location.href.indexOf("about") > -1) {
            const element = document.getElementById("experience");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/about#experience`
        }
    }

    return (
        <div className="z-index h-one-hundred left-menu flex" id="left-menu">
            <div className="z-index menu-width h-one-hundred flex column just-center menu-side-padding white-border-right bg-bright-red">
                <h3 onClick={scrollAbout} className="white menu cursor">about</h3>
                <h3 onClick={scrollSkills} className="white menu cursor">skills</h3>
                <h3 onClick={scrollPortfolio} className="white menu cursor">portfolio</h3>
                <h3 onClick={scrollExperience} className="white menu cursor">experience</h3>
            </div>
            <img onClick={props.active} className="left-menu-triangle" src="./Images/WhiteTriangle.svg" />       
        </div>
    )
}

export default LeftMenu;

