/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    const scrollAbout = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about"
        } else {
            const element = document.getElementById("about");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    const scrollSkills = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#skills"
        } else {
            const element = document.getElementById("skills");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollPortfolio = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#portfolio"
        } else {
            const element = document.getElementById("portfolio");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollExperience = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#experience"
        } else {
            const element = document.getElementById("experience");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="z-index h-one-hundred left-menu flex" id="left-menu">
            <div style={contentStyles} className="z-index menu-width h-one-hundred flex column just-center menu-side-padding white-border-right bg-bright-red">
                <h3 onClick={scrollAbout} className="white menu">about</h3>
                <h3 onClick={scrollSkills} className="white menu">skills</h3>
                <h3 onClick={scrollPortfolio} className="white menu">portfolio</h3>
                <h3 onClick={scrollExperience} className="white menu">experience</h3>
            </div>
            <img onClick={props.active} className="left-menu-triangle" src="./Images/WhiteTriangle.svg" />       
        </div>
    )
}

export default LeftMenu;

