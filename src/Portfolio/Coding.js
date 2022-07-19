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

    const baseURL = 'https://ampersand.paris';

    useEffect(() => {
        if(window.location.href === `${baseURL}/se#experience`) {
            document.getElementById("experience").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === `${baseURL}/se#skills`) {
            document.getElementById("skills").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === `${baseURL}/se#portfolio`) {
            document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === `${baseURL}/se#experience`) {
            document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth' });
        }
    }  
    )
    

    return (
        <>
            <div className="full-height full-width flex flex-end al-center absolute">
                <Link className="ampersand mobile-ampersand fixed right-margin cursor " to="/"><img  src="/Images/left-half-ampersand.svg" /></Link>
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