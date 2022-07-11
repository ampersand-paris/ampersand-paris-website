/* React Elements */
import React from "react";


const MidProcess = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
        <div style={contentStyles} className="column bright-red">
            <div className="flex space-btwn w-one-hundred">
                <h1 className="bright-red sub-title">M</h1>
                <h1 className="bright-red sub-title">A</h1>
                <h1 className="bright-red sub-title">Y</h1>
                <h1 className="bright-red sub-title">|</h1>
                <h1 className="bright-red sub-title">J</h1>
                <h1 className="bright-red sub-title">U</h1>
                <h1 className="bright-red sub-title">N</h1>
                <h1 className="bright-red sub-title">E</h1>
            </div>
            <div className="height-150px flex column red-border-bottom">
                <h2 className="uppercase">mid-process</h2>
                <div>
                    <p className="no-space">Makes: Makes: 2 cocktails</p>
                    <p className="no-space">Active Prep: 10 minutes</p> 
                </div>
            </div>
            <div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>ingredients</h3>
                        <ul>
                            <li>1 1/2 ounces Chartreuse (cheaper alternatives include, Jagermeister, Genepy, or more gin)</li>
                            <li>1 1/2 ounces gin</li>
                            <li>1 1/2 ounces cucumber simple syrup</li>
                            <li>3/4 ounces lime juice</li>
                            <li>1 tsp egg white*optional</li> 
                            <li> Pinch of salt</li>
                            <li>Thyme *flowering if possible Ice</li>
                        </ul>
                        <ul>
                            <li>For the cucumber simple syrup:</li>
                            <li>1 cup sugar</li>
                            <li>1 cup water</li>
                            <li>1 – 2 small seedless cucumbers, chopped into large pieces</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>preparation</h3>
                        <p>For the cucumber simple syrup:</p>
                        <p>1. In a small saucepan, combine sugar and water. Bring to a boil and give the syrup a stir to make sure the sugar has been dissolved. Let cool.</p>
                        <p>2. Add the cooled syrup and cucumber into a blender and blend until combined. Strain through a fine mesh colander and set aside.</p>
                        <p>For the cocktail</p>
                        <p>1. In a shaker tin, combine the Chartreuse, gin, cucumber simple syrup, lime juice, egg white, and salt.</p>
                        <p>2. Shake well.</p>
                        <p>4. Add ice to fill the shaker tin. Shake well again. (This helps aerate the egg white for a creamier, frothier cocktail).</p>
                        <p>4. Strain and serve with thyme leaves and flowers sprinkled on top.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidProcess;