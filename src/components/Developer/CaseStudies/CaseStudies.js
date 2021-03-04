import React from 'react';

import totalObjects from '../../../data/projects';
import internalObjects from '../../../data/internal';
import {Link, Route} from 'react-router-dom';
import './casestudies.css';
import rightArrow from '../../../images/right-arrow.svg';

export const CaseStudies = ({header, subheader, internal}) =>{
 
        return (
          <section className="margin-div home-portfolio main-copy" id="projects">
          <h5>{header}</h5>
           <h1 className="large-studies">{subheader}</h1>
           {/* <h3 className="header-light"></h3> */}
          
           <div className="flex-div">
           
          {
          !internal ? totalObjects[0].map((project, index) => {
              return (
                <Route key={index}>
                <Link className="list-item-portfolio" key={index} to={`/projects/${project.projectUrl}`}>
                <div className={`flex-inner ${project.projectUrl}`}>
           <Link to={`/projects/${project.projectUrl}`} className="flex-link">
             
             <div className="flex-inner-pri">
             <div className="opp-action">
             <strong className="regular dark-bg">
               <div className="h5 light-font-helper"> {project.date}</div><br></br>
               <span className="dark-font-helper">{project.title}</span>
               <div className="more with-icon"><p>
                   View Case Study<span
                     className="icon icon-arrow-link-thin icon--on-right">
                        <img src={rightArrow} width="30px" height="12px" alt=""/>
                     </span>
                     </p></div>
             </strong>
             </div>
             
             </div>
           </Link>
              </div>
          </Link>
          </Route>
              )
            }) : <>
                  {
                    internalObjects.map((project, index) => {
              return (
                <Route key={index}>
                <Link className="list-item-portfolio" key={index} to={`/projects/${project.projectUrl}`}>
                <div className={`flex-inner ${project.projectUrl}`}>
                <Link to={`/projects/${project.projectUrl}`} className="flex-link">
             
             <div className="flex-inner-pri">
             <div className="opp-action">
             <strong className="regular dark-bg">
               <div className="h5 light-font-helper"> {project.date}</div><br></br>
               <span className="dark-font-helper">{project.title}</span>
               <div className="more with-icon"><p>
                   View Case Study<span
                     className="icon icon-arrow-link-thin icon--on-right">
                        <img src={rightArrow} width="30px" height="12px" alt=""/>
                     </span>
                     </p></div>
             </strong>
             </div>
             
             </div>
           </Link>
              </div>
          </Link>
          </Route>
              )
            })
                  }
            </>
          }
          

          
           </div>
          
           <div className="flex-div">
           {
            !internal ? totalObjects[1].map((project, index) => {
              return (
                <Route key={index}>
                <Link className="list-item-portfolio" key={index} to={`/projects/${project.projectUrl}`}>
             <div className={`flex-inner ${project.projectUrl}`}>
             <Link to={`/projects/${project.projectUrl}`} className="flex-link">
             
             <div className="flex-inner-pri">
             <div className="opp-action">
             <strong className="regular dark-bg">
               <div className="h5 light-font-helper"> {project.date}</div><br></br>
               <span className="dark-font-helper">{project.title}</span>
               <div className="more with-icon"><p>
                   View Case Study<span
                     className="icon icon-arrow-link-thin icon--on-right">
                        <img src={rightArrow} width="30px" height="12px" alt=""/>
                     </span>
                     </p></div>
             </strong>
             </div>
             
             </div>
           </Link>
              </div>
          </Link>
          </Route>
              )
            }) : <div></div>
          }
            
      
          
          
           </div>
          </section>

        )
  
}

export default CaseStudies
