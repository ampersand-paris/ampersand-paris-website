/* === React Elements === */
import React from "react";

const Home = (props) => {

    return (
        <div className="flex">
            <div style={{width: props.redWidth}} className="full-height flex bg-bright-red just-center al-center">
                <h3 className="white sub-title opacity-80">Software Engineer</h3>
            </div>
            <div className="full-height full-width flex just-center absolute">
                <img className="ampersand" src="/Images/left-half-ampersand.svg" />
                <img className="ampersand" src="/Images/right-half-ampersand.svg" />
            </div>
            <div style={{width: props.whiteWidth}} className="full-height flex bg-white transition-duration just-center al-center">
                <h3 className="bright-red sub-title opacity-80">Creative</h3>
            </div>
      </div>
    )
}

export default Home;
