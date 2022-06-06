/* === React Elements === */
import React from "react";

const Home = (props) => {

    return (
        <div className="flex">
            <div style={{width: props.redWidth}} className="full-height flex bg-bright-red">
            </div>
            <div className="full-height full-width flex just-center absolute">
                <img className="ampersand" src="/Images/left-half-ampersand.svg" />
                <img className="ampersand" src="/Images/right-half-ampersand.svg" />
            </div>
            <div style={{width: props.whiteWidth}} className="full-height flex bg-white">
            </div>
      </div>
    )
}

export default Home;
