/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const RightMenu = (props) => {

    const baseURL = 'http://ampersand.paris';

    const scrollAmpersand = () => {
        if (window.location.href.indexOf("creative") > -1) {
            const element = document.getElementById("ampersand");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/creative`
        }
    }
    
    const scrollCSA = () => {
        if (window.location.href.indexOf("creative") > -1) {
            const element = document.getElementById("CSA");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/creative#CSA`
        }
    }

    const scrollProjects = () => {
        if (window.location.href.indexOf("creative") > -1) {
            const element = document.getElementById("projects");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/creative#projects`
        } 
    }

    const scrollRecipes = () => {
        if (window.location.href.indexOf("creative") > -1) {
            const element = document.getElementById("recipes");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/creative#recipes`
        }
    }

    const scrollWritings = () => {
        if (window.location.href.indexOf("ampersand") > -1) {
            const element = document.getElementById("writings");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${baseURL}/ampersand#writings`
        }
    }
    
    return (
        <div className="z-index flex right-menu h-one-hundred" id="right-menu">
            <img onClick={props.active} className="right-menu-triangle cursor" id="right-open" src="./Images/Triangle.png" />
            <div className="z-index relative menu-width h-one-hundred flex column just-center menu-side-padding txt-al-right vermillion-border-left bg-white">
                <img onClick={props.active} className="absolute right-menu-triangle-close cursor cursor" id="right-close" src="./Images/Triangle.png" />
                <h3 className="absolute sub-title-right bright-red opacity-80 text-al-right">Creative</h3>       
                <h3 onClick={scrollAmpersand} className="bright-red menu cursor">ampersand</h3>
                <h3 onClick={scrollCSA} className="bright-red menu cursor">fermentation CSA</h3>
                <h3 onClick={scrollProjects} className="bright-red menu cursor">projects</h3>
                <h3 onClick={scrollRecipes} className="bright-red menu cursor">recipes</h3>
                {/* <h3 onClick={scrollWritings} className="bright-red menu cursor">writings</h3> */}
            </div>
        </div>

    )
}

export default RightMenu;

