/* === React Elements === */
import React from "react";
import MailchimpFormContainer from "./Mailchimp/Mailchimp";

const Footer = () => {

    return (
        <div className="mobile-100vH flex column just-center al-center footer-padding side-padding bg-vermillion">
            <div className="flex just-center al-center">
                <a href="mailto:ampersand.s.paris@gmail.com"><img className="icon-footer icon-padding" src="./Images/MailWhite.svg" /></a>
                <a href="https://instagram.com/ampersandparis"><img className="icon-footer icon-padding" src="./Images/Instagram_Glyph_White.png" /></a>
                <a href="https://github.com/ampersand-paris"><img className="icon-footer icon-padding" src="./Images/GitHub.png" /></a>
                <a href="https://www.linkedin.com/in/ampersand-paris/"><img className="icon-footer icon-padding" src="./Images/LinkedInWhite.svg" /></a>
            </div>
            <MailchimpFormContainer />
            <p className="white text-al-center">Designed and Developed by 
            <br></br>Ampersand Paris</p>
        </div>
    )
}

export default Footer;