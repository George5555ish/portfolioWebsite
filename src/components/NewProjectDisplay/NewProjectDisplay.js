import React, {useRef, useEffect} from "react";
import "./styles.css";
import {useHistory} from 'react-router-dom'
import data from '../../data/projects';
import {debounce} from 'lodash'
function NewProjectDisplay() {

    const scrollRef = useRef(null);
    const imageRef = useRef(null);
    const divscroll = useRef(null)

  
    const navHistory = useHistory()

    const handleClick = (index) => {
        const count = index + 1

        navHistory.push('projects/' + count)
    }

    useEffect(() => {


     
        scrollRef.current.addEventListener('mousemove', (e) => {
            
                 console.log(e)

                //  imageRef.current.style.left = `${e.clientX}px`;
       
                //  imageRef.current.style.top =  `${e.clientY - e.pageY + 250}px`;
                //  imageRef.current.style.bottom =  `${e.clientY - e.pageY - 550}px`;
        })
    
    }, [])
  return (
    <div className="display-head" ref={divscroll} id="projects">
      <div className="display-container">
        <h1>PROJECTS</h1>

        <div className="project-list" ref={scrollRef} >
       
       {
           data.map((project, index) => {

               const count = index + 1;
               return(
                   
                <div className="project-container animate" onClick={() =>handleClick(index)}>
            <h3 class="work-title">
              <span className="project-title stroke-help">
               {project.title}
              </span>

            </h3>
            <img
             src={process.env.PUBLIC_URL + '/images/project-images/project'+ count +'/pathfinder1' +'.JPG'} 
              className="project-image"
              ref={imageRef}
            />
         
           
          </div>
               )
           })
       }
         
        </div>
      </div>
    </div>
  );
}

export default NewProjectDisplay;
