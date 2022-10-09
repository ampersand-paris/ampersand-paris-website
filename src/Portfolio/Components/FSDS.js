import React from "react";

const FSDS = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
    <div style={contentStyles} className="column bright-red">
        <h3>Web Developer and Design Partner</h3>
        <ul className="circles">
            <li>Designed, built, and deployed more than a dozen web applications specializing in React in order to deliver dynamic and intuitive front-end experiences for client users</li>
            <li>Spearheaded new product offerings including custom CSS and JavaScript that supported client needs across accessibility, internationalization, and responsive design broadening our client base and increasing product value</li>
            <li>Developed a successful, scalable client interaction model that includes brand development, wireframing, website development, and final deliverable deployment</li>
            <li>Grew clientele through referral networks and digital marketing yielding a 300% growth in client acquisition and 500% in increased revenue over two years</li>
            <li>Led design team in conversations and provided constructive feedback that resulted in more maintainable and efficient engineering solutions</li>
            <li>Presented UX/UI design solutions and wireframes to stakeholders and translated highly technical information into an easeful, and understandable rapport</li>
        </ul>
    </div>
    )
}

export default FSDS;