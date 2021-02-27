import React from 'react';
import './developer.css';

import developer from '../../images/developer4.png';
import Slider from './Slider/Slider'

const Developer = () => {
    return (
      <div className="main">
            <div className= "developer">
       <img src={developer} className='img1'/>
       {/* <img src={mainImg} className='img2'/> */}
       

        {/* <Slider /> */}
        </div>
      
      </div>
    )
}

export default Developer;