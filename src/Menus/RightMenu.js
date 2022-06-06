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
        <div style={contentStyles} className="z-index  h-one-hundred flex column just-center side-padding right-menu txt-al-right">
            <Link to="/ampersand"><h3 onClick={props.active} className="bright-red menu">ampersand</h3></Link>   
            <h3 className="bright-red menu">fermentation CSA</h3>
            <h3 className="bright-red menu">fermentorship</h3>
            <h3 className="bright-red menu">recipes</h3>
            <h3 className="bright-red menu">writings</h3>
        </div>
    )
}

export default RightMenu;

