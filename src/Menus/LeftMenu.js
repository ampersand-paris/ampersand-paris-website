/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }

    return (
        <div style={contentStyles} className="z-index h-one-hundred flex column just-center side-padding left-menu">
            <Link to="/about"><h3 className="white menu" onClick={props.active}>about</h3></Link>
            <h3 className="white menu">skills</h3>
            <h3 className="white menu">portfolio</h3>
            <h3 className="white menu">experience</h3>
        </div>
    )
}

export default LeftMenu;

