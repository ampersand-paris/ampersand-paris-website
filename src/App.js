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
    let menu = document.getElementById('left-menu');
    let openTriangle = document.getElementById('left-open');
    let closeTriangle = document.getElementById('left-close');

    if(menu.classList.contains('open-left-menu')){
      menu.classList.remove('open-left-menu');
      menu.classList.add('close-left-menu');
      closeTriangle.classList.toggle('left-menu-triangle-close-animation');
      closeTriangle.classList.toggle('left-menu-triangle-open-animation');
      openTriangle.classList.toggle('left-menu-triangle-open-animation');
      openTriangle.classList.toggle('left-menu-triangle-close-animation');
    } else if (menu.classList.contains('close-left-menu')) {
      menu.classList.remove('close-left-menu');
      menu.classList.add('open-left-menu');
      closeTriangle.classList.toggle('left-menu-triangle-close-animation');
      closeTriangle.classList.toggle('left-menu-triangle-open-animation');
      openTriangle.classList.toggle('left-menu-triangle-open-animation');
      openTriangle.classList.toggle('left-menu-triangle-close-animation');
    } else {
      menu.classList.add('open-left-menu');
      openTriangle.classList.toggle('left-menu-triangle-open-animation')
      closeTriangle.classList.toggle('left-menu-triangle-close-animation')
    }
  }

  const toggleRightMenu = () => {
    let menu = document.getElementById('right-menu');
    let openTriangle = document.getElementById('right-open');
    let closeTriangle = document.getElementById('right-close');

    if(menu.classList.contains('open-right-menu')){
      console.log('1')
      menu.classList.remove('open-right-menu');
      menu.classList.add('close-right-menu');
      closeTriangle.classList.toggle('right-menu-triangle-close-animation');
      closeTriangle.classList.toggle('right-menu-triangle-open-animation');
      openTriangle.classList.toggle('right-menu-triangle-open-animation');
      openTriangle.classList.toggle('right-menu-triangle-close-animation');
    } else if (menu.classList.contains('close-right-menu')) {
      console.log('2')
      menu.classList.remove('close-right-menu');
      menu.classList.add('open-right-menu');
      closeTriangle.classList.toggle('right-menu-triangle-close-animation');
      closeTriangle.classList.toggle('right-menu-triangle-open-animation');
      openTriangle.classList.toggle('right-menu-triangle-open-animation');
      openTriangle.classList.toggle('right-menu-triangle-close-animation');
    } else {
      console.log('3')
      menu.classList.add('open-right-menu');
      openTriangle.classList.toggle('right-menu-triangle-open-animation')
      closeTriangle.classList.toggle('right-menu-triangle-close-animation')
    }
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
        <Route path="/se" element={<Coding active={toggleLeftMenu}/>} />
        <Route path="/creative" element={<Performance active={toggleRightMenu}/>} />
      </Routes>
    </Router>
  );
}

export default App;
