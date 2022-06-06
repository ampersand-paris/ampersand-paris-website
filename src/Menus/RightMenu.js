/* === React Elements === */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const RightMenu = (props) => {

    const contentStyles = {
        display: (props.display),
        opacity: (props.opacity)
    }
    
    return (
        <div style={contentStyles} className="z-index  h-one-hundred flex column just-center side-padding right-menu bg-white">
            <Link to="/ampersand"><h2 onClick={props.active} className="bright-red">ampersand</h2></Link>
            <h2 className="bright-red">fermentation CSA</h2>
            <h2 className="bright-red">fermentorship</h2>
            <h2 className="bright-red">recipes</h2>
            <h2 className="bright-red">writings</h2>
        </div>
    )
}

export default RightMenu;

