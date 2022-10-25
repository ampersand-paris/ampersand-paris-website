const Writings = () => {

    return (
        <>   
            <a id="writings"></a> 
            <div class="seventy-five full-height flex column just-center">
	            <h1 className="bright-red no-space">Writings</h1>
                <div className="flex relative z-index-100">
                    <div className="flex mobile-column">
                        <div className="fifty-percent flex column red-border-right mobile-border-bottom">
                            <h2 className="writing-title bright-red ">A Field Guide to Lacto-Fermentation in Four Lessons</h2>
                            <div className="flex no-space">
                                <p className="tech-padding-first">Fermentation</p>
                                <p className="tech-padding-first">TGNC</p>
                                <p className="tech-padding-first">Performance</p>
                            </div>
                        </div>
                        <div className="flex column space-btwn writing-details">
                            <div>
                                <p className="no-space">September 27, 2022</p>
                                <p className="no-space">Published in Issue #56 of the <a href="https://movementresearch.org/publications/performance-journal/issue-56">Movement Research Performance Journal</a></p>
                            </div>
                            <a href="https://medium.com/@ampersand.s.paris/a-field-guide-to-lacto-fermentation-in-four-lessons-f728984681d4" target="_blank"><img className="icon icon-padding-first" src="./Images/BrightRedExternalLink.svg" /></a>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Writings;