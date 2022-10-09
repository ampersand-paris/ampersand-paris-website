import React from "react";

const Skills = () => {

    return (
        <>
            <a id="skills"></a>
            <div className="stnd-padding full-height flex column al-center just-center bg-bright-red">
                
                <div className="white-border border-radius text-padding text-width bg-white">
                    <h1 className="bright-red sub-title opacity-80 no-space">Skills</h1>
                    <div>
                        <p className="no-space"><b>Languages:</b> JavaScript (ES6) | HTML & HTML5 | CSS & CSS3 | Python</p>
                        <p className="no-space"><b>Libraries and Frameworks:</b> React | Vue | Node.js | Express.js | Django | Git & GitHub</p>
                        <p className="no-space"><b>Database and Deployment:</b> MongoDB | Mongoose | PostgreSQL | Heroku | Netlify</p>
                        <p className="no-space"><b>Design:</b> Adobe Creative Suite | Figma | Double Diamond UX Process | Responsive Design</p>  
                        <p className="no-space"><b>Soft Skills:</b> Strong written + verbal communication | Reliable + collaborative | Highly adaptable</p>            
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;