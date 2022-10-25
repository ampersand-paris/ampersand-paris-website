/* React Elements */
import React from "react";


const MidProcess = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
        <div style={contentStyles} className="column bright-red">
            <div className="flex space-btwn w-one-hundred">
                <h1 className="bright-red sub-title">O</h1>
                <h1 className="bright-red sub-title">C</h1>
                <h1 className="bright-red sub-title">T</h1>
                <h1 className="bright-red sub-title">O</h1>
                <h1 className="bright-red sub-title">B</h1>
                <h1 className="bright-red sub-title">E</h1>
                <h1 className="bright-red sub-title">R</h1>
            </div>
            <div className="height-150px flex column red-border-bottom">
                <h2 className="uppercase">hot toddy</h2>
                <div>
                    <p className="no-space">Makes: Makes: 1 cocktail</p>
                    <p className="no-space">Active Prep: 10 minutes</p> 
                </div>
            </div>
            <div>
                <div className="flex flex-end mobile-column">
                    <div className="twenty-five-percent">
                        <div>
                            <h3>RECIPE NOTES</h3>
                            <p>Fill your mug full of hot water while gathering ingredients so that your mug is warmed. Pour out used water and refill with freshly boiled water to prepare the hot toddy.</p>
                        </div>
                    </div>
                    <div className="seventy-percent">
                        <h3>ingredients</h3>
                        <ul>
                            <li>2 ounces whiskey (I prefer bourbon for its soft, caramel notes)</li>
                            <li>1 teaspoon maple syrup</li>
                            <li>1 lemon peel</li>
                            <li>1 cinnamon stick</li>
                            <li>2 cloves</li>
                            <li>1 star anise</li>
                            <li>2 cardamom pods (optional)</li>
                            <li>Hot water</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>preparation</h3>
                        <p>1. Add the maple syrup, lemon peel, cinnamon stick, cloves, and cardamom pods, if using, to your mug.</p>
                        <p>2. Pour freshly boiled water three quarters of the way up the mug. Stir.</p>                    
                        <p>3. Add whiskey and gently stir before sipping slowly.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidProcess;