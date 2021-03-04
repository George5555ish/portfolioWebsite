import React from "react";
import "./Navbar.css";
import NameImg from "../images/portfolio-real2.svg";
import NameImg2 from '../images/portfolio-svg2.svg';

const Navbar = ({setToogle, overlay}) => {

  
window.onscroll = function () { 

  var myNav = document.getElementById('header');
 
    if ((document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100)  && myNav !== null) {
     
        myNav.classList.add("nav-colored");
 myNav.classList.remove("nav-transparent");


    } 
    else {
     
        myNav.classList.add("nav-transparent");
         myNav.classList.remove("nav-colored");
       
    }

   
};
 
  return (
    // <nav className={overlay ? "changeBackground" : "unchange"}>
      <header id="header"  className={overlay ? "nav-on" : "nav-off"}>
      {/* Add nav on className to the header  className="nav-on"*/}
        <a href="/" className="logo internal" data-page="home">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="46px"
            height="46px"
            viewBox="0 0 46 46"
          
            space="preserve"
          >
            <path
              fill={overlay ? "#878a8f" : "#0f141e"}
              d="M22.953,0A23,23,0,1,0,45.909,23,22.978,22.978,0,0,0,22.953,0Zm0,43A20,20,0,1,1,42.915,23,19.981,19.981,0,0,1,22.953,43Zm5.055-16.727L24.83,16.009h-3.5l-3.178,10.24-2.529-10.24H11.99L16.162,32H19.75l3.286-10.6L26.3,32h3.523L34,16.009h-3.5Z"
            />
          </svg>
          <img src={overlay ? NameImg2 :NameImg} className="image-text" alt=""/>
        </a>
        <a href="#"className="menu" onClick={() => setToogle()} style={{"transition": .5}}>
          <span >{overlay ? 'CLOSE' : 'MENU'}</span>
          <b>
            <i></i>
            <i></i>
            <i></i>
          </b>
        </a>

       
      </header>

      /* <NavOverlay overlay={overlay}/> */
    // </nav>
  );
};

export default Navbar;
