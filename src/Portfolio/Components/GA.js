import React from "react";

const GA = (props) => {

    const contentStyles = {
        display: props.active
    }

    return (
    <div style={contentStyles} className="column">
        <h3 className="vermillion">Software Engineer Immersive</h3>
        <ul>
            <li className="vermillion">Full-stack software engineering immersive student in an intensive, twelve-week, 450+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. Developed a portfolio of individual and group projects.</li>
        </ul>
    </div>
    )
}

export default GA;