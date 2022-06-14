/* === React Elements === */
import React from "react";

import failspaceBackground from "./../PortfolioImages/FAILSPACE.png"
import YCCLABackground from "./../PortfolioImages/YCCLA.png"
import PRIORIBackground from "./../PortfolioImages/PRIORI.png"
import reaxionBackground from "./../PortfolioImages/Reaxion.png"
import bunbunsBackground from "./../PortfolioImages/BUNBUNS.png"

const Portfolio = () => {

    return (
        <div className="stnd-padding flex column al-center just-center bg-bright-red">
            <a id="portfolio"></a>
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
                        <a href="https://github.com/ampersand-paris/FAILSPACE"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                        <a href="https://failspacenyc.com"><img className="icon icon-padding" src="./Images/ExternalLink.png" /></a>
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
                        <p className="txt-al-right">Web application developed for recipe collection and recipe testing. Users can keep track of their correspondance, search published recipes, and, for selected users, create and share their thoughts on recipes in development.</p>
                    </div>
                    <div className="flex flex-end no-space">
                        <p className="white tech-padding">Django</p>
                        <p className="white tech-padding">PostgreSQL</p>
                        <p className="white tech-padding">CSS</p>
                        <p className="white tech-padding-first-reverse">Heroku</p>
                    </div>
                    <div className="flex flex-end no-space">
                        <a href="https://github.com/ampersand-paris/YCCLAv2"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                        <a href="https://ycclav2.herokuapp.com/"><img className="icon icon-padding" src="./Images/ExternalLink.png" /></a>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${YCCLABackground})` }} className="portfolio-image absolute left" id="failspace">
                    <div className="portfolio-image-overlay">
                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding">
                <div className="portfolio-text relative z-index">
                    <h3 className="white portfolio-title"><span className="opacity-80">Featured Project |</span> PRIORI</h3>
                    <div className="bg-white  border-radius text-padding">
                        <p>Prioritization web application that allows users to make to-do lists and prioritize a maxiumum of three tasks per day.</p>
                    </div>
                    <div className="flex no-space">
                        <p className="white tech-padding-first">Django</p>
                        <p className="white tech-padding">PostgreSQL</p>
                        <p className="white tech-padding">CSS</p>
                        <p className="white tech-padding">Heroku</p>
                    </div>
                    <div className="flex no-space">
                        <a href="https://github.com/ampersand-paris/PRIORI"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                        <a href="https://ycclav2.herokuapp.com/"><img className="icon icon-padding" src="./Images/ExternalLink.png" /></a>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${PRIORIBackground})` }} className="portfolio-image absolute right" id="failspace">
                    <div className="portfolio-image-overlay">

                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding flex flex-end">
                <div className="portfolio-text relative z-index">
                    <h3 className="white portfolio-title txt-al-right"><span className="opacity-80">Featured Project |</span> Reaxion</h3>
                    <div className="bg-white border-radius text-padding">
                        <p className="txt-al-right">A web app developed to survey immediate, emotional feedback in group settings. The app sends users easy to fill out surveys surveys after participating in events then collects and displays to the partipants' community all the survey results that were gathered within the 15-minute survey-window.</p>
                    </div>
                    <div className="flex flex-end no-space">
                        <p className="white tech-padding">React</p>
                        <p className="white tech-padding">MongoDB</p>
                        <p className="white tech-padding-first-reverse">CSS</p>
                    </div>
                    <div className="flex flex-end no-space">
                        <a href="https://github.com/robyngoodner/Reaxion"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${reaxionBackground})` }} className="portfolio-image absolute left" id="failspace">
                    <div className="portfolio-image-overlay">
                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding">
                <div className="portfolio-text relative z-index">
                    <h3 className="white portfolio-title"><span className="opacity-80">Featured Project |</span> BUNBUNS</h3>
                    <div className="bg-white  border-radius text-padding">
                        <p>A visually striking social media web appliation for homecooks to use to create and share recipes.</p>
                    </div>
                    <div className="flex no-space">
                        <p className="white tech-padding-first">EJS</p>
                        <p className="white tech-padding">Node.js</p>
                        <p className="white tech-padding">Express</p>
                        <p className="white tech-padding">MongoDB</p>
                        <p className="white tech-padding">CSS</p>
                    </div>
                    <div className="flex no-space">
                        <a href="https://github.com/chiangd233/Full-Stack-Web-App"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                        <a href="https://bunbun-seirfx119.herokuapp.com/"><img className="icon icon-padding" src="./Images/ExternalLink.png" /></a>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${bunbunsBackground})` }} className="portfolio-image absolute right" id="failspace">
                    <div className="portfolio-image-overlay">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;