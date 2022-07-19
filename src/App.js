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

  const toggleLeftMenu = () => {
    document.getElementById('left-menu').classList.toggle('open-left-menu')

  }

  const toggleRightMenu = () => {
    document.getElementById('right-menu').classList.toggle('open-right-menu')
  }

  function reducer (state, action) {
    if (action === 'rightMenu'){
      
    } else if (action === 'leftMenu'){
      
    }
  }

  return (
    <Router>
      <LeftMenu active={toggleLeftMenu} opacity={leftOpacity} display={leftDisplay}/>
      <RightMenu active={toggleRightMenu} opacity={rightOpacity} display={rightDisplay}/>
      <Routes>
        <Route path="/" element={<Home redWidth={redBackground} whiteWidth={whiteBackground}/>} />
        <Route path="/about" element={<Coding active={toggleLeftMenu}/>} />
        <Route path="/ampersand" element={<Performance active={toggleRightMenu}/>} />
      </Routes>
    </Router>
  );
}

export default App;
