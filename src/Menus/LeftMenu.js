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
        <div style={contentStyles} className="z-index h-one-hundred flex column just-center side-padding left-menu bg-bright-red">
            <h2 className="white">about</h2>
            <h2 className="white">portfolio</h2>
            <h2 className="white">experience</h2>
        </div>
    )
}

export default LeftMenu;

