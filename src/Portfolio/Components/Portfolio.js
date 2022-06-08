/* === React Elements === */
import React from "react";

import failspaceBackground from "./../PortfolioImages/FAILSPACE.png"

const Portfolio = () => {

    return (
    <div className="stnd-padding flex column al-center just-center bg-bright-red">
	    <div className="red-border border-radius text-padding seventy-five">
            <h1 className="white no-space">Portfolio</h1>
        </div>   
        <div className="seventy-five relative">
            <div className="portfolio-text relative z-index">
                <h3 className="white portfolio-title"><span className="opacity-80">Featured Project |</span> FAILSPACE</h3>
                <div className="bg-white  border-radius text-padding">
                    <p>A boldly designed web application that serves as the digital home for a design studio and performing arts mentorship organization in New York City.</p>
                </div>
                <div className="flex no-space">
                    <p className="white tech-padding-first">React</p>
                    <p className="white tech-padding">CSS</p>
                    <p className="white tech-padding">Netlify</p>
                </div>
                <div className="flex no-space">
                    <img className="icon icon-padding-first" src="./Images/GitHub.png" />
                    <img className="icon icon-padding" src="./Images/ExternalLink.png" />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${failspaceBackground})` }} className="portfolio-image absolute right" id="failspace">
                <div className="portfolio-image-overlay">

                </div>
            </div>
        </div>
        <div className="seventy-five relative top-padding flex flex-end">
            <div className="portfolio-text relative z-index">
                <h3 className="white portfolio-title txt-al-right"><span className="opacity-80">Featured Project |<br></br></span> You Can Cook Literally Anything</h3>
                <div className="bg-white border-radius text-padding">
                    <p className="txt-al-right">A boldly designed web application that serves as the digital home for a design studio and performing arts mentorship organization in New York City.</p>
                </div>
                <div className="flex flex-end no-space">
                    <p className="white tech-padding-first">Django</p>
                    <p className="white tech-padding-first">PostgreSQL</p>
                    <p className="white tech-padding">CSS</p>
                    <p className="white tech-padding">Heroku</p>
                </div>
                <div className="flex flex-end no-space">
                    <img className="icon icon-padding-first" src="./Images/GitHub.png" />
                    <img className="icon icon-padding" src="./Images/ExternalLink.png" />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${failspaceBackground})` }} className="portfolio-image absolute left" id="failspace">
                <div className="portfolio-image-overlay">
                </div>
            </div>
        </div>
        <div className="seventy-five relative top-padding">
            <div className="portfolio-text relative z-index">
                <h3 className="white portfolio-title"><span className="opacity-80">Featured Project |</span> PRIORI</h3>
                <div className="bg-white  border-radius text-padding">
                    <p>A boldly designed web application that serves as the digital home for a design studio and performing arts mentorship organization in New York City.</p>
                </div>
                <div className="flex no-space">
                    <p className="white tech-padding-first">React</p>
                    <p className="white tech-padding">CSS</p>
                    <p className="white tech-padding">Netlify</p>
                </div>
                <div className="flex no-space">
                    <img className="icon icon-padding-first" src="./Images/GitHub.png" />
                    <img className="icon icon-padding" src="./Images/ExternalLink.png" />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${failspaceBackground})` }} className="portfolio-image absolute right" id="failspace">
                <div className="portfolio-image-overlay">

                </div>
            </div>
        </div>
        <div className="seventy-five relative top-padding flex flex-end">
            <div className="portfolio-text relative z-index">
                <h3 className="white portfolio-title txt-al-right"><span className="opacity-80">Featured Project |</span> Reaxion</h3>
                <div className="bg-white border-radius text-padding">
                    <p className="txt-al-right">A boldly designed web application that serves as the digital home for a design studio and performing arts mentorship organization in New York City.</p>
                </div>
                <div className="flex flex-end no-space">
                    <p className="white tech-padding-first">React</p>
                    <p className="white tech-padding-first">MongoDB</p>
                    <p className="white tech-padding">CSS</p>
                </div>
                <div className="flex flex-end no-space">
                    <img className="icon icon-padding-first" src="./Images/GitHub.png" />
                    <img className="icon icon-padding" src="./Images/ExternalLink.png" />
                </div>
            </div>
            <div style={{ backgroundImage: `url(${failspaceBackground})` }} className="portfolio-image absolute left" id="failspace">
                <div className="portfolio-image-overlay">
                </div>
            </div>
        </div>
    </div>
    )
}

export default Portfolio;