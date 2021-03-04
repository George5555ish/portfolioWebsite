import React, { useState } from "react";
import Navbar from "./Navbar";
import "./NavOverlay.css";

function NavOverlay() {
  const defaultImage = "overlay-image";
  const [overlay, setOverlay] = useState(false);
  const [backgroundClass, setBackgroundClass] = useState(defaultImage);

  const setToogle = () => {
   
    setOverlay(() =>{
      if (overlay === true){
        return false;
      } else {
        return true;
      }
    });
    console.log(overlay);
  };

  const changeBackground = (value) => {
    if (value === 1) {
      setBackgroundClass("overlay-image2");
    }

    if (value === 2) {
      setBackgroundClass("overlay-image3");
    }

    if (value === 3) {
      setBackgroundClass("overlay-image4");
    }
    if (value === 4) {
      setBackgroundClass("overlay-image5");
    }
    if (value === 5) {
      setBackgroundClass("overlay-image6");
    }
  };

  const resetBackground = () => {
    setBackgroundClass(defaultImage);
  };
  return (
    <nav className={overlay ? "close" : "open-nav"}>
   <Navbar setToogle={setToogle} overlay={overlay} />
      <nav id="nav-overlay-content">
        <div className={backgroundClass}></div>
        
          <div className="content">
            <Navbar
              setToogle={setToogle}
              overlay={overlay}
              changeColor={true}
            />
            <h5>Menu</h5>
            <ul>
              <li>
                <a href="/" data-page="home">
                  <i
                    className="i-hover"
                    onMouseOver={() => changeBackground()}
                    onMouseOut={() => resetBackground()}
                  ></i>
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="/about"
                  data-page="about"
                  className="nav-over"
                  onMouseOver={() => changeBackground(3)}
                  onMouseOut={() => resetBackground()}
                >
                  <i></i>About me
                </a>
              </li>
             
              <li>
                <a
                  href="https://www.instagram.com/george_son_/"
                  rel="noreferrer"
                  target="_blank"
                  className="nav-over"
                  onMouseOver={() => changeBackground(1)}
                  onMouseOut={() => resetBackground()}
                >
                  <i></i>Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/george-mbajiaku-8747b2ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="nav-over"
                  onMouseOver={() => changeBackground(2)}
                  onMouseOut={() => resetBackground()}
                >
                  <i></i>LinkedIn
                </a>
              </li>
             
            </ul>
          </div>
      
      </nav>
    </nav>
  );
}

export default NavOverlay;
