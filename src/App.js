import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import { useState } from "react";

/* === Components === */
import Footer from './Footer';
import Ampersand from './Ampersand/Ampersand'
import LeftMenu from './Menus/LeftMenu'
import RightMenu from "./Menus/RightMenu";
import Home from "./Home";

function App() {
  const [whiteBackground, setWhiteBackground] = useState('50vW');  
  const [redBackground, setRedBackground] = useState('50vW');  

  const[rightOpacity, setRightOpacity] = useState('');
  const[leftOpacity, setLeftOpacity] = useState('');
  const[rightDisplay, setRightDisplay] = useState('flex');
  const[leftDisplay, setLeftDisplay] = useState('flex')

  const toggleWhiteBackground = () => {
    setWhiteBackground('25vW')
    setRedBackground('0vW')
    setRightOpacity('100%')
    setLeftDisplay('none')
  }

  const toggleRedBackground = () => {
    setRedBackground('100vW')
    setWhiteBackground('0vW')
    setLeftOpacity('100%')
    setRightDisplay('none')
  }

  function reducer (state, action) {
    if (action === 'rightMenu'){
      
    } else if (action === 'leftMenu'){
      
    }
  }

  return (
    <Router>
      <LeftMenu active={toggleWhiteBackground} opacity={leftOpacity} display={leftDisplay}/>
      <RightMenu active={toggleWhiteBackground} opacity={rightOpacity} display={rightDisplay}/>
      <Routes>
        <Route path="/" element={<Home redWidth={redBackground} whiteWidth={whiteBackground}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/ampersand" element={<Ampersand />} />
      </Routes>
    </Router>
  );
}

export default App;
