/* React Elements */
import React from "react";


const FennelFullDish = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
        <div style={contentStyles} className="column bright-red">
            <div className="flex space-btwn w-one-hundred">
                <h1 className="sub-title">F</h1>
                <h1 className="sub-title">E</h1>
                <h1 className="sub-title">B</h1>
                <h1 className="sub-title">R</h1>
                <h1 className="sub-title">U</h1>
                <h1 className="sub-title">A</h1>
                <h1 className="sub-title">R</h1>
                <h1 className="sub-title">Y</h1>
                <h1 className="sub-title">|</h1>
                <h1 className="sub-title">M</h1>
                <h1 className="sub-title">A</h1>
                <h1 className="sub-title">R</h1>
                <h1 className="sub-title">C</h1>
                <h1 className="sub-title">H</h1>
            </div>
            <div className="height-150px flex column red-border-bottom">
                <h2 className="uppercase">pickled fennel stalks and kumquats over white beans, fennel, blood orange, and 
            kalamata olives</h2>
                <div>
                    <p className="no-space">Serves: 6</p>
                    <p className="no-space">Active Prep: 1 hr and 30 minutes</p> 
                </div>
            </div>
            <div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>ingredients</h3>
                        <ul>
                            <li>1 medium onion diced</li>
                            <li>4 celery stalks cut on the bias</li>
                            <li>2 cloves of garlic</li>
                            <li>1 lb of white beans (flageolet, cannellini, or yellow eye)</li> 
                            <li>1 bay leaf</li>
                            <li>1 quart of chicken stock, vegetable stock, or water</li>
                            <li>2 large fennel bulbs cut into eighths through the core</li>
                            <li>3 blood oranges, cut two into ¼ inch slices and rserve the juice of one</li>
                            <li>A large handful of pitted kalamata olives</li>
                            <li>Olive oil</li>
                            <li>Pickled fennel stalks and kumquats, for garnish</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-end">
                    <div className="seventy-percent">
                        <h3>preparation</h3>
                        <p>1.  In a large bowl, cover the beans with water seasoned with salt and soak for at least six hours, preferably overnight.</p>
                        <p>2. Heat olive oil over medium heat in a large pot and add the onions and celery. Season with salt and cook until onions are translucent and tender. Add the garlic and cook for an additional minute. Add the beans and the water they are soaking in as well as the remaining quart of liquid. Bring to a boil and reduce to a simmer. Cook until tender, about 30 minutes to an hour depending on the freshness and size of the beans.</p>
                        <p>3. Meanwhile, preheat the oven to 400 degrees. Place the sliced fennel, blood oranges, and kalamata olives on a sheet tray making sure to intersperse the blood oranges and kalamata olives in between the fennel. Drizzle with olive oil and season with salt. Roast for 20 minutes. Remove from oven and flip the fennel on its second side. Return to the oven and roast for another 20 minutes. Remove from oven once fennel is golden and the orange peels are tender.</p>
                        <p>4. Pour the reserved blood orange juice over the roasted fennnel, blood orange, and kalamata olive (melange?) Taste, and if needed, season with salt.</p>
                        <p>5. To make the beans creamier, remove a third of the beans, place in a blender, and blend until smooth. Return to creamy mixture to the pot and stir. Taste, and if needed, season with salt.</p>
                        <p>6. To serve, ladle the white beans into a shallow bowl and place the roasted fennel, a slice of blood orange and a few kalamata olives. Garnish with pickled fennel stalk, kumquats, and fennel fronds.</p>
                    </div>       
                </div>
            </div>
        </div>
    )
}

export default FennelFullDish;