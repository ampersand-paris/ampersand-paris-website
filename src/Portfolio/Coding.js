/* === React Elements === */
import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react"

/* === React Components === */
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";

const Coding = (props) => {

    useEffect(() => {
        if(window.location.href === "http://localhost:3000/about#experience") {
            document.getElementById("experience").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === "http://localhost:3000/about#skills") {
            document.getElementById("skills").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === "http://localhost:3000/about#portfolio") {
            document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth' });
        }
    }  
    )
    

    return (
        <>
            <div className="full-height full-width flex flex-end al-center absolute">
                <Link onClick={props.active} className="ampersand fixed" to="/"><img  src="/Images/left-half-ampersand.svg" /></Link>
            </div>
            <div className="stnd-padding flex column al-center just-center bg-bright-red">
                <About />
                <Skills />
                <Portfolio />
                <Experience />
            </div>
        </>
    )
}

export default Coding;