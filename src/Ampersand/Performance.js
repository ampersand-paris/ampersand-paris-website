import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

/* === React Components === */
import Ampersand from "./Components/Ampersand";
import FermentationCSA from "./Components/FermentationCSA";
import Projects from "./Components/Projects";
import Recipes from "./Components/Recipes";
import Writings from "./Components/Writings";

const Performance = (props) => {

    const baseURL = 'https://ampersand.paris';

    useEffect(() => {
        if(window.location.href === `${baseURL}/creative#CSA`) {
            document.getElementById("CSA").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === `${baseURL}/creative#recipes`) {
            document.getElementById("recipes").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === `${baseURL}/creative#projects`) {
            document.getElementById("projects").scrollIntoView({ behavior: 'smooth' });
        }
        if(window.location.href === `${baseURL}/creative#writings`) {
            document.getElementById("writings").scrollIntoView({ behavior: 'smooth' });
        }
    }  
    )

    
    return (
        <>
            <div className="full-height full-width flex flex-start al-center absolute">
                <Link className="ampersand mobile-ampersand fixed left-margin cursor" to="/"><img src="/Images/right-half-ampersand.svg" /></Link>
            </div>
            <div class="stnd-padding flex column al-center just-center">
                <Ampersand />
                <FermentationCSA />
                <Projects />
                <Recipes />
            </div>
        </>
    )
}

export default Performance;