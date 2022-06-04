/* === React Elements === */
import React from "react";

const Ampersand = (props) => {

    const contentStyles = {
        display: props.active,
    }
    return (
        <div style={contentStyles} className="bg-vermillion no-margin side-padding">
            <h2 className="white">Ampersand</h2>
        </div>
    )
}

export default Ampersand;