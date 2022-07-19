/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const RightMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    // const scrollAmpersand = () => {
    //     if (window.location.href === "http://localhost:3000/") {
    //         window.location.href = "http://localhost:3000/ampersand"
    //     } else {
    //         const element = document.getElementById("ampersand");
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }
    const scrollAmpersand = () => {
        if (window.location.href.indexOf("ampersand") > -1) {
            const element = document.getElementById("ampersand");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${process.env.BASE_URL}/ampersand`
        }
    }
    
    const scrollCSA = () => {
        if (window.location.href.indexOf("ampersand") > -1) {
            const element = document.getElementById("CSA");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${process.env.BASE_URL}/ampersand#CSA`
        }
    }

    const scrollProjects = () => {
        if (window.location.href.indexOf("ampersand") > -1) {
            const element = document.getElementById("projects");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${process.env.BASE_URL}/ampersand#projects`
        } 
    }

    const scrollRecipes = () => {
        if (window.location.href.indexOf("ampersand") > -1) {
            const element = document.getElementById("recipes");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${process.env.BASE_URL}/ampersand#recipes`
        }
    }

    const scrollWritings = () => {
        if (window.location.href.indexOf("ampersand") > -1) {
            const element = document.getElementById("writings");
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = `${process.env.BASE_URL}/ampersand#writings`
        }
    }
    
    return (
        <div className="z-index flex right-menu h-one-hundred" id="right-menu">
            <img onClick={props.active} className="right-menu-triangle" src="./Images/Triangle.png" />       
            <div style={contentStyles} className="z-index menu-width h-one-hundred flex column just-center menu-side-padding txt-al-right red-border-left bg-white">
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

