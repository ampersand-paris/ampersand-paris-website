import React from "react";
import { Link } from "react-router-dom";

/* === React Components === */
import Ampersand from "./Components/Ampersand";
import FermentationCSA from "./Components/FermentationCSA";
import Projects from "./Components/Projects";
import Recipes from "./Components/Recipes";
import Writings from "./Components/Writings";

const Performance = (props) => {

    return (
        <>
            <div className="full-height full-width flex flex-start al-center absolute">
                <Link onClick={props.active} className="ampersand fixed" to="/"><img src="/Images/right-half-ampersand.svg" /></Link>
            </div>
            <div class="stnd-padding flex column al-center just-center">
                <Ampersand />
                <FermentationCSA />
                <Projects />
                <Recipes />
                <Writings />
            </div>
        </>
    )
}

export default Performance;