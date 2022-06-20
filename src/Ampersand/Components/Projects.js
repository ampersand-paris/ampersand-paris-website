import React from "react";

import fermentorshipBackground from "./../ProjectImages/Fermentorship.png"
import YCCLABackground from "./../ProjectImages/YCCLA.png"
import manifestDestiny from "./../ProjectImages/ManifestDestiny.jpg"

const Fermentorship = () => {

    return (
        <div className="stnd-padding flex column al-center just-center">
            <a id="portfolio"></a>
            <div className="text-padding seventy-five">
                <h1 className="bright-red no-space">Projects</h1>
            </div>   
            <div className="seventy-five relative">
                <div className="portfolio-text relative z-index">
                    <h3 className="bright-red portfolio-title">You Can Cook Literally Anything</h3>
                    <div className="bg-bright-red  border-radius text-padding">
                        <p className="white">You Can Cook Literally Anything is a project by Lexi Adams and Ampersand Paris, two best-friends separated by 1,413 miles. They grew up together in Lawrence, Kansas one illustrating and the other cooking and both obsessed with stationary and nice pens. You Can Cook Anything is a celebration of friendship across time and space with a collector's twist. Each pack of recipe-postcards contains seven recipe postcards and a cover card, all with unique illustrations. We invite you join our correspondence and send and receive these postcards with your pen pals, lovers, rivals, family, and friends. Try and collect them all as we expand the collection of recipes and introduce guest chefs, shiny postcards, golden tickets, and more.</p>
                    </div>
                    <div className="flex no-space">
                        <p className="tech-padding-first">Recipe Development</p>
                    </div>
                    <div className="flex no-space">
                        <a href="https://www.kickstarter.com/projects/youcancook/you-can-cook-literally-anything"><img className="icon icon-padding" src="./Images/ExternalLink.png" /></a>
                        <a href="https://www.instagram.com/youcancookliterallyanything/"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${YCCLABackground})` }} className="portfolio-image absolute right" id="failspace">
                    <div className="portfolio-image-overlay">
                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding flex flex-end">
                <div className="portfolio-text relative z-index">
                    <h3 className="bright-red portfolio-title txt-al-right">Fermentorship</h3>
                    <div className="bg-bright-red border-radius text-padding">
                        <p className="white txt-al-right">An intimate two-week long workshop facilitated by Ampersand for five non-cis (trans, gender-nonconforming, non-binary, two-spirit, and beyond) folx. The cohort meets over the course of the two-weeks for three masterclasses: kombucha fermentation, bottling and scoby textiles, and self-portraiture. In between these gatherings, the cohort recieves daily journaling prompts on relating to microecologies and integrating their wisdom into their own lives and creative processes. Each cohort member exits the workshop with two-liters of kombucha, a self-portrait, knowledge of both fermentation and vegan leather craft, and a deepened relationship to each other and their microbial kin.</p>
                    </div>
                    <div className="flex flex-end no-space">
                        <p className="tech-padding">Fermentation</p>
                        <p className="tech-padding">Writing</p>
                        <p className="tech-padding">T/GNC</p>
                    </div>
                    <div className="flex flex-end no-space">
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${fermentorshipBackground})` }} className="bg-center portfolio-image absolute left" id="failspace">
                    <div className="portfolio-image-overlay">
                    </div>
                </div>
            </div>
            <div className="seventy-five relative top-padding">
                <div className="portfolio-text relative z-index">
                    <h3 className="bright-red portfolio-title">Manifest Destiny</h3>
                    <div className="bg-bright-red border-radius text-padding">
                        <p className="white">Manifest Destiny is a multidisciplinary perversion of whiteness and white ritual performed by a queer white artist. The work is an unearthing of the unique social and political complicity of white Midwestern ancestry and the strategies employed to  manifest their vision, their ‘destiny’. The piece sparks a long overdue prairie fire, the destruction necessary for future growth. The work examines the fabrication of white identity and its bankruptcy as well as the complicity of white queerness in the pervasiveness and legacy of white supremacy. Film, costume, and movement overlap to create images that evoke autocannabalism, white neurosis, and hopelessness. The piece illuminates largely unacknowledged yet daily white rituals, lugs them to the forefront through gross amplification, and feeds the engorged images back to white people. This piece is like the process of making foie gras.</p>
                    </div>
                    <div className="flex no-space">
                        <p className="tech-padding-first">Performance</p>
                    </div>
                    <div className="flex no-space">
                        <a href="https://github.com/ampersand-paris/PRIORI"><img className="icon icon-padding-first" src="./Images/GitHub.png" /></a>
                        <a href="https://ycclav2.herokuapp.com/"><img className="icon icon-padding" src="./Images/ExternalLink.png" /></a>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${manifestDestiny})` }} className="portfolio-image bg-center absolute right" id="failspace">
                    <div className="portfolio-image-overlay">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fermentorship;