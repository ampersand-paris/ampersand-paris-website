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

  // For future development
  // const[rightOpacity, setRightOpacity] = useState('');
  // const[leftOpacity, setLeftOpacity] = useState('');
  // const[rightDisplay, setRightDisplay] = useState('flex');
  // const[leftDisplay, setLeftDisplay] = useState('flex')


  const toggleLeftMenu = () => {
    const leftMenu = document.getElementById('left-menu');
    const rightMenu = document.getElementById('right-menu');
  
    let openTriangle = document.getElementById('left-open');
    let closeTriangle = document.getElementById('left-close');
    let openTriangleOpposite = document.getElementById('right-open');
    let closeTriangleOpposite = document.getElementById('right-close');


    if (window.length < 600){
      if(rightMenu.classList.contains('open-right-menu')){
        rightMenu.classList.remove('open-right-menu');
        rightMenu.classList.add('close-right-menu');
        closeTriangleOpposite.classList.toggle('right-menu-triangle-close-animation');
        closeTriangleOpposite.classList.toggle('right-menu-triangle-open-animation');
        openTriangleOpposite.classList.toggle('right-menu-triangle-open-animation');
        openTriangleOpposite.classList.toggle('right-menu-triangle-close-animation');
      }

      if(leftMenu.classList.contains('open-left-menu')){
        leftMenu.classList.remove('open-left-menu');
        leftMenu.classList.add('close-left-menu');
        closeTriangle.classList.toggle('left-menu-triangle-close-animation');
        closeTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-close-animation');
      } else if (leftMenu.classList.contains('close-left-menu')) {
        leftMenu.classList.remove('close-left-menu');
        leftMenu.classList.add('open-left-menu');
        closeTriangle.classList.toggle('left-menu-triangle-close-animation');
        closeTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-close-animation');
      } else {
        leftMenu.classList.add('open-left-menu');
        openTriangle.classList.toggle('left-menu-triangle-open-animation')
        closeTriangle.classList.toggle('left-menu-triangle-close-animation')
      }
    } else {
      if(leftMenu.classList.contains('open-left-menu')){
        leftMenu.classList.remove('open-left-menu');
        leftMenu.classList.add('close-left-menu');
        closeTriangle.classList.toggle('left-menu-triangle-close-animation');
        closeTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-close-animation');
      } else if (leftMenu.classList.contains('close-left-menu')) {
        leftMenu.classList.remove('close-left-menu');
        leftMenu.classList.add('open-left-menu');
        closeTriangle.classList.toggle('left-menu-triangle-close-animation');
        closeTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-open-animation');
        openTriangle.classList.toggle('left-menu-triangle-close-animation');
      } else {
        leftMenu.classList.add('open-left-menu');
        openTriangle.classList.toggle('left-menu-triangle-open-animation')
        closeTriangle.classList.toggle('left-menu-triangle-close-animation')
      }
    }  
  }

  const toggleRightMenu = () => {
    const leftMenu = document.getElementById('left-menu');
    const rightMenu = document.getElementById('right-menu');
  
    let openTriangle = document.getElementById('right-open');
    let closeTriangle = document.getElementById('right-close');
    let openTriangleOpposite = document.getElementById('left-open');
    let closeTriangleOpposite = document.getElementById('left-close');

    if (window.length < 600){
      if(leftMenu.classList.contains('open-left-menu')){
        leftMenu.classList.remove('open-left-menu');
        leftMenu.classList.add('close-left-menu');
        closeTriangleOpposite.classList.toggle('left-menu-triangle-close-animation');
        closeTriangleOpposite.classList.toggle('left-menu-triangle-open-animation');
        openTriangleOpposite.classList.toggle('left-menu-triangle-open-animation');
        openTriangleOpposite.classList.toggle('left-menu-triangle-close-animation');
      }

      if(rightMenu.classList.contains('open-right-menu')){
        console.log('1')
        rightMenu.classList.remove('open-right-menu');
        rightMenu.classList.add('close-right-menu');
        closeTriangle.classList.toggle('right-menu-triangle-close-animation');
        closeTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-close-animation');
      } else if (rightMenu.classList.contains('close-right-menu')) {
        console.log('2')
        rightMenu.classList.remove('close-right-menu');
        rightMenu.classList.add('open-right-menu');
        closeTriangle.classList.toggle('right-menu-triangle-close-animation');
        closeTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-close-animation');
      } else {
        console.log('3')
        rightMenu.classList.add('open-right-menu');
        openTriangle.classList.toggle('right-menu-triangle-open-animation')
        closeTriangle.classList.toggle('right-menu-triangle-close-animation')
      }
    } else {
      if(rightMenu.classList.contains('open-right-menu')){
        console.log('1')
        rightMenu.classList.remove('open-right-menu');
        rightMenu.classList.add('close-right-menu');
        closeTriangle.classList.toggle('right-menu-triangle-close-animation');
        closeTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-close-animation');
      } else if (rightMenu.classList.contains('close-right-menu')) {
        console.log('2')
        rightMenu.classList.remove('close-right-menu');
        rightMenu.classList.add('open-right-menu');
        closeTriangle.classList.toggle('right-menu-triangle-close-animation');
        closeTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-open-animation');
        openTriangle.classList.toggle('right-menu-triangle-close-animation');
      } else {
        console.log('3')
        rightMenu.classList.add('open-right-menu');
        openTriangle.classList.toggle('right-menu-triangle-open-animation')
        closeTriangle.classList.toggle('right-menu-triangle-close-animation')
      }
    }
  }

  return (
    <Router>
      <LeftMenu active={toggleLeftMenu} />
      <RightMenu active={toggleRightMenu} />
      <Routes>
        <Route path="/" element={<Home redWidth={redBackground} whiteWidth={whiteBackground}/>} />
        <Route path="/se" element={<Coding active={toggleLeftMenu}/>} />
        <Route path="/creative" element={<Performance active={toggleRightMenu}/>} />
      </Routes>
    </Router>
  );
}

export default App;
