import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from "react-router-dom";
import { useState } from "react";

/* === Components === */
import Footer from './Footer';
import Ampersand from './Ampersand/Components/Ampersand'
import LeftMenu from './Menus/LeftMenu'
import RightMenu from "./Menus/RightMenu";
import Home from "./Home";
import Coding from "./Portfolio/Coding";
import Performance from "./Ampersand/Performance";

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
    setRedBackground('25vW')
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
      <LeftMenu active={toggleRedBackground} opacity={leftOpacity} display={leftDisplay}/>
      <RightMenu active={toggleWhiteBackground} opacity={rightOpacity} display={rightDisplay}/>
      <Routes>
        <Route path="/" element={<Home redWidth={redBackground} whiteWidth={whiteBackground}/>} />
        <Route path="/about" element={<Coding />} />
        <Route path="/ampersand" element={<Performance />} />
      </Routes>
    </Router>
  );
}

export default App;
