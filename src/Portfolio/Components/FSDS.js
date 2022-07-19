import React from "react";

const FSDS = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
    <div style={contentStyles} className="column bright-red">
        <h3>Web Developer and Design Partner</h3>
        <ul className="circles">
            <li>Founded a web development and graphic design studio whose profits support performing artists in New York City</li>
            <li >Spearheaded a successful, scalable client interaction model that includes brand development, wireframing, website development, and final deliverable hand-off</li>
            <li>Grew clientele through referral networks and digital marketing yielding a 300% growth in client acquisition and 500% in increased revenue over two years</li>
            <li>Developed rapport with clientele to collaboratively develop UI and personal branding that uniquely addressed the project’s needs</li>
        </ul>
    </div>
    )
}

export default FSDS;