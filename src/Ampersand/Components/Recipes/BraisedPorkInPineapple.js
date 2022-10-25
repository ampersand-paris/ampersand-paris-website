/* React Elements */
import React from "react";


const FennelFullDish = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
        <div style={contentStyles} className="column bright-red">
            <div className="flex space-btwn w-one-hundred">
                <h1 className="sub-title">S</h1>
                <h1 className="sub-title">E</h1>
                <h1 className="sub-title">P</h1>
                <h1 className="sub-title">T</h1>
                <h1 className="sub-title">E</h1>
                <h1 className="sub-title">M</h1>
                <h1 className="sub-title">B</h1>
                <h1 className="sub-title">E</h1>
                <h1 className="sub-title">R</h1>
            </div>
            <div className="height-150px flex column red-border-bottom">
                <h2 className="uppercase">sweet and spicy braised pork in pineapple</h2>
                <div>
                    <p className="no-space">Serves: 6</p>
                    <p className="no-space">Active Prep: 4 hrs and 30 minutes</p> 
                </div>
            </div>
            <div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>ingredients</h3>
                        <div className="flex space-btwn mobile-column">
                            <ul>
                                <li>For the rub:</li>
                                <li>1 Tbsp + 1 tsp chili powder</li>
                                <li>3 whole cloves</li>
                                <li>1 Tbsp coffee beans</li>
                                <li>1 Tbsp smoked paprika</li>
                                <li>1 Tbsp fennel seed</li>
                                <li>1 Tbsp cumin seed</li>
                                <li>1/2 tsp dried ginger</li>
                                <li>1/4 tsp white pepper</li>
                                <li>1/4 tsp cayenne</li>
                                <li>3 Tbsp brown sugar</li>
                                <li>1 Tbsp salt</li>
                            </ul>
                            <ul>
                                <li>For the braise:</li>
                                <li>2 lb pork butt</li>
                                <li>1 Tbsp neutral oil</li>
                                <li>1 lb onions</li>
                                <li>1/2 a pineapple</li>
                                <li>1 habañero</li>
                                <li>2 garlic cloves</li>
                                <li>1 Tbsp tomato paste</li>
                                <li>1 star anise</li>
                                <li>1 bay leaf</li>
                                <li>1 T dijon mustard</li>
                                <li>2 T soy sauce</li>
                                <li>16 oz Dr. Pepper</li>
                                <li>Salt</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>preparation</h3>
                        <p>For the rub:<br></br>
                        1. In a spice grinder, add the whole cloves and coffee beans. Grind finely.</p>
                        <p>2. Combine the ground coffee and cloves with the remaining spices in a small bowl. Mix well.</p> 
                        <p>3. Add salt and brown sugar to the spices and incorporate evenly. Store in an airtight container.</p>
                        <p>For the pork:<br></br>
                        4. Heat oven to 350.</p>
                        <p>5. Coat the outside of the pork butt with the prepared spice rub. The outside should be coated evenly and appear vibrantly red. Cover, and let rest for 15 minutes.</p>  
                        <p>6. Meanwhile, chop the onions and pineapple (make sure to remove the skin and the core) into ½ chunks. This results in luxcious bit size bits at the end of the braise. Mince the habañero (you might want to wear a glove) and garlic. Set these ingredients aside.</p>
                        <p>7. Heat the oil over medium heat in a large enamel or cast iron oven safe pot. Once glistening, place the large flat side of seasoned pork butt into the hot pan. Sear on one side for 3–4 minutes. Flip onto the opposite side and sear for another 3–4 minutes. Flip onto the shorter side and repeat the searing process until all sides of the pork butt have been browned. Then remove from the pot and set aside.</p>
                        <p>8. Add the chopped onions and pineapple into the same pot. Give the mixture a good stir. As the fruits and vegetables begin to release their moisture, the browned bits from searing the pork should begin to release from the pan. Continue to stir frequently and allow for the onions and pineapple to lightly caramelize for about 10–15 minutes.</p>
                        <p>9. Add the habeñero and the garlic. Stir and cook for two minutes. Add the tomato paste and cook for another two minutes.</p>
                        <p>10. Nestle the pork butt into the pot. Add the star anise and bay leaf along with the dijon mustard, soy sauce, and Dr. Pepper. Give the braising liquid a stir and bring to a boil.</p>
                        <p>11. Cover the pot with a lid and place in the oven. An hour in, give the pork butt a turn. An hour later, give another turn and remove the lid. Braise for another 30 minutes, two and a half hours total. If the pork butt not easily falling apart, braise for an extra 30 minutes, otherwise, remove from the oven and let it stand for 20 minutes. Shred the pork with two forks pulling apart into tender strands. Enjoy on a potato roll with fresh coleslaw.</p>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default FennelFullDish;