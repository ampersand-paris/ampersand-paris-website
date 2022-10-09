/* === React Elements === */
import React from "react";
import { useState } from "react";

import FSDS from "./FSDS";
import GA from "./GA";

const Experience = () => {

    const [failspace, setFailspace] = useState('flex')
    const [generalAssembly, setGeneralAssembly] = useState('none')
    const [arrowTop, setArrowTop] = useState('flex')
    const [arrowBottom, setArrowBottom] = useState('none')

    const toggleFSDS = () => {
        setGeneralAssembly('none')
        setFailspace('flex')
        setArrowTop('flex')
        setArrowBottom('none')
    }

    const toggleGA = () => {
        setFailspace('none')
        setGeneralAssembly('flex')
        setArrowTop('none')
        setArrowBottom('flex')
    }

    const topArrow = () => {
        if(arrowTop === 'flex') {
            setArrowTop('flex')
            setArrowBottom('none')
        } else if (arrowTop === 'none') {
            setArrowTop('flex')
        }
    }

    const bottomArrow = () => {
        if(arrowBottom === 'flex' && arrowTop === 'none') {
            setArrowBottom('flex')
            setArrowTop('none')
        } else if (arrowBottom === 'none' && arrowTop === 'flex') {
            setArrowBottom('flex')
        }
    } 

    const arrowTopHover = {
        display: arrowTop
    }

    const arrowBottomHover = {
        display: arrowBottom
    }

    return (
        <>
            <a id="experience"></a>
            <div className="stnd-padding full-height flex column al-center just-center bg-bright-red">
                <div className="white-border border-radius text-padding text-width bg-white experience-height">
                    <h1 className="bright-red sub-title opacity-80 no-space">Experience</h1>
                    <div className="flex w-one-hundred mobile-column">
                        <div className="flex column ">
                            <div className="flex">
                                <div  onClick={toggleFSDS} className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">FAILSPACE Design Services</p>  
                                </div> 
                                <div style={arrowTopHover} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div>
                            <div className="flex">
                                <div onClick={toggleGA} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">General Assembly</p>   
                                </div>
                                <div style={arrowBottomHover} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div>  
                        </div>      
                        <div className="experience-width">
                            <FSDS active={failspace}/> 
                            <GA active={generalAssembly}/>     
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;