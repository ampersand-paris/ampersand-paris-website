/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const RightMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    const scrollAmpersand = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/ampersand"
        } else {
            const element = document.getElementById("ampersand");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    const scrollCSA = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#CSA"
        } else {
            const element = document.getElementById("CSA");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollProjects = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#projects"
        } else {
            const element = document.getElementById("projects");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollRecipes = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#recipes"
        } else {
            const element = document.getElementById("recipes");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollWritings = () => {
        if (window.location.href === "http://localhost:3000/") {
            window.location.href = "http://localhost:3000/about#writings"
        } else {
            const element = document.getElementById("writings");
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    return (
        <div style={contentStyles} className="z-index  h-one-hundred flex column just-center side-padding right-menu txt-al-right">
            <h3 onClick={scrollAmpersand} className="bright-red menu">ampersand</h3>
            <h3 onClick={scrollCSA} className="bright-red menu">fermentation CSA</h3>
            <h3 onClick={scrollProjects} className="bright-red menu">projects</h3>
            <h3 onClick={scrollRecipes} className="bright-red menu">recipes</h3>
            <h3 onClick={scrollWritings} className="bright-red menu">writings</h3>
        </div>
    )
}

export default RightMenu;

