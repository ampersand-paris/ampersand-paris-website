/* === React Elements === */
import React from "react";

import FSDS from "./FSDS"
const Experience = () => {

    return (
        <div class="stnd-padding full-height flex column al-center just-center bg-bright-red">
	    <div class="white-border border-radius text-padding text-width bg-white">
            <h1 className="bright-red sub-title opacity-80 no-space">Experience</h1>
            <div className="flex w-one-hundred">
                <div className="flex column">
                    <div className="flex">
                        <div className="border-right tab-padding twenty tab">
                            <p className="no-margin">FAILSPACE Design Services</p>  
                        </div> 
                        <div className="flex al-center">
                            <img className="triangle" src="./Images/Triangle.png" />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="border-right tab-padding twenty tab">
                            <p className="no-margin">General Assembly</p>   
                        </div>
                        <div className="flex al-center">
                            <img className="triangle" src="./Images/Triangle.png" />
                        </div>
                    </div>      
                </div>      
                <div className="experience-width">
                    <FSDS />      
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experience;