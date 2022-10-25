/* React Elements */
import React from "react";


const PickledFennelStalks = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
        <div style={contentStyles} className="column bright-red">
            <div className="flex space-btwn w-one-hundred">
                <h1 className="bright-red sub-title">F</h1>
                <h1 className="bright-red sub-title">E</h1>
                <h1 className="bright-red sub-title">B</h1>
                <h1 className="bright-red sub-title">R</h1>
                <h1 className="bright-red sub-title">U</h1>
                <h1 className="bright-red sub-title">A</h1>
                <h1 className="bright-red sub-title">R</h1>
                <h1 className="bright-red sub-title">Y</h1>
                <h1 className="bright-red sub-title">|</h1>
                <h1 className="bright-red sub-title">M</h1>
                <h1 className="bright-red sub-title">A</h1>
                <h1 className="bright-red sub-title">R</h1>
                <h1 className="bright-red sub-title">C</h1>
                <h1 className="bright-red sub-title">H</h1>
            </div>
            <div className="height-150px flex column red-border-bottom">
                <h2 className="uppercase">pickled fennel stalks and kumquats</h2>
                <div>
                    <p className="no-space">Yields: 1 quart</p>
                    <p className="no-space">Active Prep: 20 minutes</p> 
                </div>
            </div>
            <div>
                <div className="flex flex-end ">
                    <div className="seventy-percent">
                        <h3>ingredients</h3>
                        <div class="flex space-btwn mobile-column">
                            <ul>
                                <li>300 grams of fennel stalks</li>
                                <li>150 grams of kumquats</li>
                                <li>400 ml white wine vinegar</li>
                                <li>200 grams cane sugar</li> 
                                <li>1 tsp crushed red pepper</li>
                                <li>1 tsp fennel seed</li>
                                <li>2 tsp salt</li>
                                <li>2 cloves of garlic, crushed</li>
                            </ul>
                            <div className="flex al-center">
                                <p>=</p>
                            </div>
                            <ul>
                                <li>2 cups of fennel stalks</li>
                                <li>1 cup of kumquats</li>
                                <li>2 cups white wine vinegar</li>
                                <li>1 cup cane sugar</li> 
                                <li>1 tsp crushed red pepper</li>
                                <li>1 tsp fennel seed</li>
                                <li>2 tsp salt</li>
                                <li>2 cloves of garlic, crushed</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex mobile-column">
                    <div className="twenty-five-percent">
                        <div>
                            <h3>RECIPE NOTES</h3>
                            <p>I recommend making this a couple of days in advance to ensure the brine saturates the fennel stalks and kumquats. This pickle will keep in the fridge for up to two months.</p>
                        </div>
                    </div>
                    <div className="seventy-percent">
                        <div>
                            <h3>preparation</h3>
                            <p>1. Remove the fennel fronds from the stalk and save the fronds for garnishing. Slice the fennel stalks on the bias 1/8 inch thick. Slice the kumquats to a similar thickness. Combine the fennel stalks and the kumquats in a medium sized heat proof bowl or a quart-sized mason jar. To the container, add the crushed red pepper, fennel seed, salt, and crushed garlic.</p>
                            <p>2. In a medium saucepan, combine the white wine vinegar and sugar. Bring this mixture to a boil, stirring occasionally to help dissolve the sugar. Once boiling, pour the liquid into the container with the fennel stalks, kumquats, and spices to submerge.</p>
                            <p>3. Allow for the picke to come to room temperature. Transfer to a sealable container and refrigerate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickledFennelStalks;