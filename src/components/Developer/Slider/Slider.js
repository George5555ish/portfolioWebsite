import React from "react";

import "./slider.css";

import Img1 from "../../../images/slider_images/img1.jpg";
import Img2 from "../../../images/slider_images/img2.jpg";
import Img3 from "../../../images/slider_images/img3.jpg";
import Img4 from "../../../images/slider_images/img4.jpg";
export default function Slider() {

  return (
    <div className="slider-main slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />

        {/* Slider images */}
        <div className="slide first">
          <div className="slide-details">
            <h3 className="slide-name">Covid 19 Tracker</h3>
            <desc>This is a simple text on covid 19 tracker</desc>
          </div>
          <img alt="img" src={Img1} width="850px" height="550px" />
        </div>

        <div className="slide">
          <div className="slide-details">
            <h3 className="slide-name">Covid 19 Tracker</h3>
            <desc>This is a simple text on covid 19 tracker</desc>
          </div>
          <img alt="img" src={Img2} width="850px" height="550px" />
        </div>

        <div className="slide">
          <div className="slide-details">
            <h3 className="slide-name">Covid 19 Tracker</h3>
            <desc>This is a simple text on covid 19 tracker</desc>
          </div>
          <img alt="img" src={Img3} width="850px" height="550px" />
        </div>

        <div className="slide">
          <div className="slide-details">
            <h3 className="slide-name">Covid 19 Tracker</h3>
            <desc>This is a simple text on covid 19 tracker</desc>
          </div>
          <img alt="img" src={Img4} width="850px" height="550px" />
        </div>
      </div>

      {/* <div className="nav-auto">
        <div className= {highlight[0] ? "auto-btn1 active" : "auto-btn1"}></div>
        <div className={highlight[1] ? "auto-btn2 active" : "auto-btn2"}></div>
        <div className={highlight[2] ? "auto-btn3 active" : "auto-btn3"}></div>
        <div className={highlight[3] ? "auto-btn4 active" : "auto-btn4"}></div>
      </div> */}

      <div className="nav-manual">
        <label for="radio1" className="manual-btn"></label>
        <label for="radio2" className="manual-btn"></label>
        <label for="radio3" className="manual-btn"></label>
        <label for="radio4" className="manual-btn"></label>
      </div>
    </div>
  );
}
