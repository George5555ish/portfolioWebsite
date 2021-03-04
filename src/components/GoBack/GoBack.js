import React from 'react';
import {Link, Route} from 'react-router-dom';
import arrowImg from '../../images/right-arrow.svg';
import './goback.css'

function GoBack() {
    return (
  
        <Route>
        <Link to="/">
        <div className="work-tgt">
         
          <div className="working">
            <div className="return-div">
              <h5> Return Home</h5>
              <img src={arrowImg} width="260px" height="20px" alt=""/>
            </div>
          </div>
        </div>
        </Link>
        </Route>
    )
}

export default GoBack;
