import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import { useState } from "react";

/* === Components === */
import Footer from './Footer';
import Ampersand from './Ampersand/Ampersand'

function App() {
  const [whiteBackground, setWhiteBackground] = useState('50vW');  
  const [redBackground, setRedBackground] = useState('50vW');  

  const [ampersand, setAmpersand] = useState('none')

  const toggleWhiteBackground = () => {
    setWhiteBackground('100vW')
    setRedBackground('0vW')
  }

  const toggleAmpersand = () => {
    setAmpersand('flex')
  }


  return (
    <Router>
      <div className="flex">
        <div style={{width: redBackground}} className="full-height flex bg-bright-red">
          <div style={{width: redBackground}} className="z-index h-one-hundred flex column just-center side-padding left-menu bg-bright-red">
            <h2 className="white">portfolio</h2>
            <h2 className="white">resume</h2>
            <h2 className="white"></h2>
            <h2 className="white">writings</h2>
            <h2 className="white">FAILSPACE Design Services</h2>
          </div>
        </div>
        <div className="full-height full-width flex just-center absolute">
          <img className="ampersand" src="/Images/left-half-ampersand.svg" />
          <img className="ampersand" src="/Images/right-half-ampersand.svg" />
        </div>
        <div style={{width: whiteBackground}} className="full-height flex al-center flex-end txt-al-right bg-white">
          <Ampersand active={ampersand}/>
          <div style={{width: whiteBackground}} className="z-index  h-one-hundred flex column just-center side-padding left-menu bg-white">
            <Link to="/ampersand"><h2 onClick={() => {toggleWhiteBackground(); toggleAmpersand()}} className="bright-red">ampersand</h2></Link>
            <h2 className="bright-red">fermentation CSA</h2>
            <h2 className="bright-red">fermentorship</h2>
            <h2 className="bright-red">recipes</h2>
            <h2 className="bright-red">writings</h2>
            <h2 className="bright-red">FAILSPACE</h2>
          </div>
        </div>
      </div>
      <Footer />
      <Routes>
        <Route path="/ampersand" element={<Ampersand active={ampersand} />} />
      </Routes>
    </Router>
  );
}

export default App;
