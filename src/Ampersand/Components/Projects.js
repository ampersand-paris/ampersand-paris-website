import React from "react";

import fermentorshipBackground from "./../ProjectImages/Fermentorship.png"
import YCCLABackground from "./../ProjectImages/YCCLA.png"
import manifestDestiny from "./../ProjectImages/ManifestDestiny.jpg"

const Fermentorship = () => {

    return (
        <div className="stnd-padding flex column al-center just-center bg-bright-red">
            <a id="portfolio"></a>
            <div className="red-border border-radius text-padding seventy-five">
                <h1 className="white no-space">Projects</h1>
            </div>   
            <div className="seventy-five relative">
                <div className="portfolio-text relative z-index">
                    <h3 className="white portfolio-title"><span className="opacity-80">Featured Project |</span> You Can Cook Literally Anything</h3>
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
                <div style={{ backgroundImage: `url(${YCCLABackground})` }} className="portfolio-image absolute right" id="failspace">
                    <div className="portfolio-image-overlay">
                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding flex flex-end">
                <div className="portfolio-text relative z-index">
                    <h3 className="white portfolio-title txt-al-right"><span className="opacity-80">Featured Project |<br></br></span> Fermentorship</h3>
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
                <div style={{ backgroundImage: `url(${fermentorshipBackground})` }} className="portfolio-image absolute left" id="failspace">
                    <div className="portfolio-image-overlay">
                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding">
                <div className="portfolio-text relative z-index">
                    <h3 className="white portfolio-title"><span className="opacity-80">Featured Project |</span> Manifest Destiny</h3>
                    <div className="bg-white  border-radius text-padding">
                        <p>Manifest Destiny is a multidisciplinary perversion of whiteness and white ritual performed by a queer white artist. The work is an unearthing of the unique social and political complicity of white Midwestern ancestry and the strategies employed to  manifest their vision, their ‘destiny’. The piece sparks a long overdue prairie fire, the destruction necessary for future growth. The work examines the fabrication of white identity and its bankruptcy as well as the complicity of white queerness in the pervasiveness and legacy of white supremacy. Film, costume, and movement overlap to create images that evoke autocannabalism, white neurosis, and hopelessness. The piece illuminates largely unacknowledged yet daily white rituals, lugs them to the forefront through gross amplification, and feeds the engorged images back to white people. This piece is like the process of making foie gras. </p>
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
                <div style={{ backgroundImage: `url(${manifestDestiny})` }} className="portfolio-image absolute right" id="failspace">
                    <div className="portfolio-image-overlay">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fermentorship;