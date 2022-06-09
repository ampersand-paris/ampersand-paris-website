import React from "react";

const FSDS = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
    <div style={contentStyles} className="column">
        <h3 className="vermillion">Web Developer and Design Partner</h3>
        <ul>
            <li className="vermillion">Founded a web development and graphic design studio whose profits support performing artists in New York City</li>
            <li className="vermillion">Spearheaded a successful, scalable client interaction model that includes brand development, wireframing, website development, and final deliverable hand-off</li>
            <li className="vermillion">Grew clientele through referral networks and digital marketing yielding a 300% growth in client acquisition and 500% in increased revenue over two years</li>
            <li className="vermillion">Developed rapport with clientele to collaboratively develop UI and personal branding that uniquely addressed the project’s needs</li>
        </ul>
    </div>
    )
}

export default FSDS;