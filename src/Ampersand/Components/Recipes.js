/* === React Elements === */
import React from "react";
import { useState } from "react";

import FennelFullDish from "./Recipes/FennelFullDish";
import MidProcess from "./Recipes/MidProcess";
import OatmealTwoWays from "./Recipes/OatmealTwoWays";
import PickledFennelStalks from  "./Recipes/PickledFennelStalks"

const Recipes = () => {

    const [fennelFullDish, setFennelFullDish] = useState('flex')
    const [pickledFennelStalks, setPickledFennelStalks] = useState('none')
    const [oatmealTwoWays, setOatmealTwoWays] = useState('none')
    const [midProcess, setMidProcess] = useState('none')

    const [arrowTop, setArrowTop] = useState('flex')
    const [arrowBottom, setArrowBottom] = useState('none')

    const toggleFennelFullDish = () => {
        setFennelFullDish('flex')
        setPickledFennelStalks('none')
        setOatmealTwoWays('none')
        setMidProcess('none')

        setArrowTop('flex')
    }

    const togglePickledFennelStalks = () => {
        setFennelFullDish('none')
        setPickledFennelStalks('flex')
        setOatmealTwoWays('none')
        setMidProcess('none')

        setArrowTop('none')
        setArrowBottom('flex')
    }

    const toggleOatmealTwoWays = () => {
        setFennelFullDish('none')
        setPickledFennelStalks('none')
        setOatmealTwoWays('flex')
        setMidProcess('none')
    }

    const toggleMidProcess = () => {
        setFennelFullDish('none')
        setPickledFennelStalks('none')
        setOatmealTwoWays('none')
        setMidProcess('flex')
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
            <div className="stnd-padding flex column al-center just-center">
                <div className="border-radius text-padding seventy-five">
                    <h1 className="bright-red no-space">Recipes</h1>
                    <div className="flex w-one-hundred">
                        <div className="flex column">
                            <div className="flex">
                                <div  onClick={toggleFennelFullDish} className="border-right tab-padding twenty tab">
                                    <p className="no-margin">Pickled Fennel Stalks and Kumquats Over White Beans, Fennel, Blood Orange, and Kalamata Olives</p>  
                                </div> 
                                <div style={arrowTopHover} className="flex al-center">
                                    <img className="triangle" src="./Images/Triangle.png" />
                                </div>
                            </div>
                            <div className="flex">
                                <div onClick={togglePickledFennelStalks} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin">Pickled Fennel Stalks and Kumquats</p>   
                                </div>
                                <div style={arrowBottomHover} className="flex al-center">
                                    <img className="triangle" src="./Images/Triangle.png" />
                                </div>
                            </div>  
                            <div className="flex">
                                <div onClick={toggleOatmealTwoWays} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin">Oatmeal Two Ways</p>   
                                </div>
                                <div style={arrowBottomHover} className="flex al-center">
                                    <img className="triangle" src="./Images/Triangle.png" />
                                </div>
                            </div>  
                            <div className="flex">
                                <div onClick={toggleMidProcess} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin">Mid-Process Cocktail</p>   
                                </div>
                                <div style={arrowBottomHover} className="flex al-center">
                                    <img className="triangle" src="./Images/Triangle.png" />
                                </div>
                            </div>  
                        </div>      
                        <div className="experience-width">
                            <FennelFullDish active={fennelFullDish} /> 
                            <PickledFennelStalks active={pickledFennelStalks} />
                            <OatmealTwoWays active={oatmealTwoWays} />
                            <MidProcess active={midProcess} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recipes;