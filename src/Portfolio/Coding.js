/* === React Elements === */
import React from "react";
import { Link } from "react-router-dom";

/* === React Components === */
import About from "./Components/About";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Experience from "./Components/Experience";

const Coding = () => {

    return (
        <>
            <div className="full-height full-width flex flex-end al-center absolute">
                <Link className="ampersand fixed" to="/"><img  src="/Images/left-half-ampersand.svg" /></Link>
            </div>
            <div class="stnd-padding flex column al-center just-center bg-bright-red">
                <About />
                <Skills />
                <Portfolio />
                <Experience />
            </div>
        </>
    )
}

export default Coding;