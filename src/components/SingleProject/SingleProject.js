import React, {useState, useEffect}from 'react';
import totalObjects from '../../data/projects';
import internal from '../../data/internal';
import "./singleproject.css";
import GoBack from '../GoBack/GoBack';
export default function SingleProject() {
    const [location, setLocation] = useState('');
    // const [finalObject, setFinalObject] = useState('');

    useEffect(() => {

        const url = window.location.href;
        // console.log(url.split("/").length);

        // We get the current project to display
        // from the url visited
        let loc = url.split("/")[4];

        //then we get the last value.
        //this will enable us check the value with
        //what's in our projects file in data/projects
      

        setLocation(loc);
    },[]);

 const project = totalObjects.map(projectArray => projectArray);


//  const urlFactor = location.split('project')[0];

// we used 2 arrays in the projects file
//so we had to loop through the two arrays to find
//where the object of our data to render was.
 const object1 = project.find(project => project.projectUrl === 'project' + location );

  


    return (


        <div className="container">

        <GoBack />
         <div className="margin-bottom">

</div>
      {
          object1 !== undefined &&  <div>
          <div className="project-row">
   

            <div className="project-info"> 
            <h5 className="project-info-header">Case study</h5>
        
            <h1 className="project-heading">{object1.title}</h1>
        <h5 className="margin-top-class">Tech Stack</h5>
        <h4 className="header-dark">{object1.techStack1}<br></br>
        {object1.techStack2}<br></br>
        {object1.techStack3}<br></br>
       </h4>

        <h5 className="margin-top-class">Year</h5>
        <h4 className="header-dark">{object1.date}</h4>
            </div>

            
            <div  className="project-content"> 

            <div> 
            
            <p className="header-light tech-text"> {object1.text1}
   
        </p><br></br>
        <p className="header-light tech-text">{object1.text2}
      
        </p>
        <br></br>
        <p className="header-light tech-text">
        {object1.text3}
     
        </p>
        <br></br>
        <p className="header-light tech-text">
        The final deliverable can be viewed as a live demo below:
        </p>
        <br></br>
        <p className="header-light"><a href={object1.projectHref} target="_blank" rel="noreferrer">View Live Demo</a></p>
       
       </div>
          
            </div>
        
        
        </div>

        <div>
        {
            object1.imageUrl.map((image, index) => {
                
                const count = index + 1;
                return <img src={process.env.PUBLIC_URL + '/images/project-images/project'+object1.imgProp+'/pathfinder'+count +'.JPG'} width="100%" key={index} alt=""/> 
            })
        }
        </div>
        </div>
      }

     
        </div>
        
    )
}
