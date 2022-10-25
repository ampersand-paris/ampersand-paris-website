/* === React Elements === */
import React from "react";
import { useState } from "react";

import FennelFullDish from "./Recipes/FennelFullDish";
import MidProcess from "./Recipes/MidProcess";
import OatmealTwoWays from "./Recipes/OatmealTwoWays";
import PickledFennelStalks from  "./Recipes/PickledFennelStalks"
import HotToddy from "./Recipes/HotToddy"
import BraisedPorkInPineapple from "./Recipes/BraisedPorkInPineapple"

const Recipes = () => {

    const [fennelFullDish, setFennelFullDish] = useState('flex')
    const [pickledFennelStalks, setPickledFennelStalks] = useState('none')
    const [oatmealTwoWays, setOatmealTwoWays] = useState('none')
    const [midProcess, setMidProcess] = useState('none')
    const [hotToddy, setHotToddy] = useState('none')
    const [braisedPork, setBraisedPork] = useState('none')


    const [arrowOne, setArrowOne] = useState('flex')
    const [arrowTwo, setArrowTwo] = useState('none')
    const [arrowThree, setArrowThree] = useState('none')
    const [arrowFour, setArrowFour] = useState('none')
    const [arrowFive, setArrowFive] = useState('none')
    const [arrowSix, setArrowSix] = useState('none')


    const toggleFennelFullDish = () => {
        // Recipe
        setFennelFullDish('flex')
        setPickledFennelStalks('none')
        setOatmealTwoWays('none')
        setMidProcess('none')
        setBraisedPork('none')
        setHotToddy('none')
        // Arrow
        setArrowOne('flex')
        setArrowTwo('none')
        setArrowThree('none')
        setArrowFour('none')
        setArrowFive('none')
        setArrowSix('none')
    }

    const togglePickledFennelStalks = () => {
        // Recipe
        setFennelFullDish('none')
        setPickledFennelStalks('flex')
        setOatmealTwoWays('none')
        setMidProcess('none')
        setBraisedPork('none')
        setHotToddy('none')
        // Arrow
        setArrowOne('none')
        setArrowTwo('flex')
        setArrowThree('none')
        setArrowFour('none')
        setArrowFive('none')
        setArrowSix('none')
    }

    const toggleOatmealTwoWays = () => {
        // Recipe
        setFennelFullDish('none')
        setPickledFennelStalks('none')
        setOatmealTwoWays('flex')
        setMidProcess('none')
        setBraisedPork('none')
        setHotToddy('none')
        // Arrow
        setArrowOne('none')
        setArrowTwo('none')
        setArrowThree('flex')
        setArrowFour('none')
        setArrowFive('none')
        setArrowSix('none')
    }

    const toggleMidProcess = () => {
        // Recipe
        setFennelFullDish('none')
        setPickledFennelStalks('none')
        setOatmealTwoWays('none')
        setMidProcess('flex')
        setBraisedPork('none')
        setHotToddy('none')
        // Arrow
        setArrowOne('none')
        setArrowTwo('none')
        setArrowThree('none')
        setArrowFour('flex')
        setArrowFive('none')
        setArrowSix('none')
    }

    const toggleBraisedPork = () => {
        // Recipe
        setFennelFullDish('none')
        setPickledFennelStalks('none')
        setOatmealTwoWays('none')
        setMidProcess('none')
        setBraisedPork('flex')
        setHotToddy('none')
        // Arrow
        setArrowOne('none')
        setArrowTwo('none')
        setArrowThree('none')
        setArrowFour('none')
        setArrowFive('flex')
        setArrowSix('none')
    }

    const toggleHotToddy = () => {
        // Recipe
        setFennelFullDish('none')
        setPickledFennelStalks('none')
        setOatmealTwoWays('none')
        setMidProcess('none')
        setBraisedPork('none')
        setHotToddy('flex')
        // Arrow
        setArrowOne('none')
        setArrowTwo('none')
        setArrowThree('none')
        setArrowFour('none')
        setArrowFive('none')
        setArrowSix('flex')
    }

    

    // const arrowOne = () => {
    //     if(arrowTop === 'flex') {
    //         setArrowTop('flex')
    //         setArrowBottom('none')
    //     } else if (arrowTop === 'none') {
    //         setArrowTop('flex')
    //     }
    // }        

    // const arrowTwo = () => {
    //     if(arrowBottom === 'flex' && arrowTop === 'none') {
    //         setArrowBottom('flex')
    //         setArrowTop('none')
    //     } else if (arrowBottom === 'none' && arrowTop === 'flex') {
    //         setArrowBottom('flex')
    //     }
    // } 

    const arrowOneDisplay = {
        display: arrowOne
    }

    const arrowTwoDisplay = {
        display: arrowTwo
    }

    const arrowThreeDisplay = {
        display: arrowThree
    }

    const arrowFourDisplay = {
        display: arrowFour
    }

    const arrowFiveDisplay = {
        display: arrowFive
    }

    const arrowSixDisplay = {
        display: arrowSix
    }

    return (
        <>
            <a id="recipes"></a>
            <div className="stnd-padding flex column al-center just-center">
                <div className="border-radius text-padding seventy-five">
                    <h1 className="bright-red no-space">Recipes</h1>
                    <div className="flex w-one-hundred mobile-column">
                        <div className="flex column">
                            <div className="flex">
                                <div  onClick={toggleFennelFullDish} className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">Pickled Fennel Stalks and Kumquats Over White Beans, Fennel, Blood Orange, and Kalamata Olives</p>  
                                </div> 
                                <div style={arrowOneDisplay} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div>
                            <div className="flex">
                                <div onClick={togglePickledFennelStalks} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">Pickled Fennel Stalks and Kumquats</p>   
                                </div>
                                <div style={arrowTwoDisplay} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div>  
                            <div className="flex">
                                <div onClick={toggleOatmealTwoWays} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">Oatmeal Two Ways</p>   
                                </div>
                                <div style={arrowThreeDisplay} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div>  
                            <div className="flex">
                                <div onClick={toggleBraisedPork} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">Sweet and Spicy Braised Pork in Pineapple</p>   
                                </div>
                                <div style={arrowFiveDisplay} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div> 
                            <div className="flex">
                                <div onClick={toggleMidProcess} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">Mid-Process Cocktail</p>   
                                </div>
                                <div style={arrowFourDisplay} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div>
                            <div className="flex">
                                <div onClick={toggleHotToddy} 
                                    className="border-right tab-padding twenty tab">
                                    <p className="no-margin cursor">Hot Toddy</p>   
                                </div>
                                <div style={arrowSixDisplay} className="flex al-center">
                                    <img className="triangle mobile-triangle-tab" src="./Images/Triangle.png" />
                                </div>
                            </div> 
                        </div>      
                        <div className="experience-width">
                            <FennelFullDish active={fennelFullDish} /> 
                            <PickledFennelStalks active={pickledFennelStalks} />
                            <OatmealTwoWays active={oatmealTwoWays} />
                            <MidProcess active={midProcess} />
                            <HotToddy active={hotToddy} />
                            <BraisedPorkInPineapple active={braisedPork} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recipes;