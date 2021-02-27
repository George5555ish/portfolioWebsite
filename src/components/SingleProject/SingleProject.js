import React, {useState, useEffect}from 'react';
import totalObjects from '../../data/projects';
import internal from '../../data/internal';
import "./singleproject.css";
import img1 from '../../images/project-images/pathfinder.JPG';
import img11 from '../../images/developer3.png';
import img3 from '../../images/george-picture.png';
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
    });

 const project = totalObjects.map(projectArray => projectArray);


//  const urlFactor = location.split('project')[0];

// we used 2 arrays in the projects file
//so we had to loop through the two arrays to find
//where the object of our data to render was.
 const object1 = project[0].find(project => project.projectUrl === location );
 const object2 = project[1].find(project => project.projectUrl === location );
 const object3 = internal.find(project => project.projectUrl === location );

//  console.log(object2, object1)
//  if (!object1 || object1 === undefined){
//      setFinalObject(object2);
//      console.log(finalObject)
//  } else {
//     setFinalObject(object1);
//     console.log(finalObject)

//  }
  


    return (


        <div className="container">
         <div className="margin-bottom">

</div>
      {
          object1 !== undefined &&  <div><div class="project-row">
   

            <div class="project-info"> 
            <h5 className="project-info-header">Case study</h5>
        
            <h1 className="project-heading">{object1.title}</h1>
        <h5 className="margin-top-class">My role</h5>
        <h4 class="header-dark">Creative Direction<br></br>
        UX / UI<br></br>
        Website Design<br></br>
        Icon Design</h4>

        <h4 className="header-dark">InVision</h4>
        <h5 className="margin-top-class">Year</h5>
        <h4 className="header-dark">{object1.date}</h4>
            </div>

            
            <div  class="project-content"> 

            <div> 
            
            <p class="header-light"> InVision Studio is a new powerful tool where you can design, prototype and animate your projects easily.
        One of InVision's initiatives is the Design Forward Fund, a $5 million fund dedicated to investing in the future of design.
        I'm happy to say that my idea was among several selected for implementation and shortly after the initial interviews, 
        we began shaping requirements for the Basic UX project.
        </p><br></br>
        <p class="header-light">
        Our goal was to create an extensive library of components and assets to help designers wireframe their web projects faster.
        Over the course of 5 months I designed more than 400 layout components in 30 categories (each prepared for desktop, tablet & phone screens), 128 icons, 56 user journey map elements and over 100 user interface elements.
        You can easily customize and combine them when working on your wireframes.
        </p>
        <br></br>
        <p class="header-light">
        Aside from that, I was in touch with the Director of Product and the InVision tech team to report issues and bugs that I found within the software, as well as to propose improvements regarding certain functionalities.
        It was exciting to see how the product evolved and improved with each update during this short time.
        </p>
        <br></br>
        <p class="header-light">
        The final deliverable was a family of 4 products that you can download and use for free.
        Just download <a href="https://www.invisionapp.com/studio/" target="_blank">InVision Studio</a>, open their App Store and search for 128 Outline Icons, eCommerce Wireframe Kit, User Interface Kit and Web Wireframe Kit.
        </p>
        <br></br>
        <p class="header-light"><a href="https://www.behance.net/gallery/81908469/Basic-UX-Free-design-resources-for-InVision-Studio" target="_blank">View case study on Behance.</a></p>
       
       </div>
          
            </div>
        
        
        </div>

        <div>
        {
            object1.imageUrl.map((image, index) => {
                
                const count = index + 1;
                return <img src={process.env.PUBLIC_URL + '/images/project-images/project'+object1.imgProp+'/pathfinder'+count +'.JPG'} width="100%"/> 
            })
        }
        </div>
        </div>
      }

      {
          object2 !== undefined && <div> <div class="project-row">
   

   <div className="project-info"> 
   <h5 className="project-info-header">Case study</h5>

   <h1 className="project-heading">{object2.title}</h1>
<h5 >My role</h5>
<h4 className="header-dark">object 2<br></br>
UX / UI<br></br>
Website Design<br></br>
Icon Design</h4>

<h4 class="header-dark">InVision</h4>
<h5>Year</h5>
<h4 class="header-dark">{object2.date}</h4>
   </div>

   
   <div  className="project-content"> 

   <div> <p class="header-light"> InVision Studio is a new powerful tool where you can design, prototype and animate your projects easily.
One of InVision's initiatives is the Design Forward Fund, a $5 million fund dedicated to investing in the future of design.
I'm happy to say that my idea was among several selected for implementation and shortly after the initial interviews, 
we began shaping requirements for the Basic UX project.</p>
<br></br>
<p className="header-light">
Our goal was to create an extensive library of components and assets to help designers wireframe their web projects faster.
Over the course of 5 months I designed more than 400 layout components in 30 categories (each prepared for desktop, tablet & phone screens), 128 icons, 56 user journey map elements and over 100 user interface elements.
You can easily customize and combine them when working on your wireframes.
</p>
<br></br>
<p className="header-light">
Aside from that, I was in touch with the Director of Product and the InVision tech team to report issues and bugs that I found within the software, as well as to propose improvements regarding certain functionalities.
It was exciting to see how the product evolved and improved with each update during this short time.
</p>
<br></br>
<p className="header-light">
The final deliverable was a family of 4 products that you can download and use for free.
Just download <a href="https://www.invisionapp.com/studio/" target="_blank">InVision Studio</a>, open their App Store and search for 128 Outline Icons, eCommerce Wireframe Kit, User Interface Kit and Web Wireframe Kit.
</p>
<br></br>
<h4 className="header-light"><a href="https://www.behance.net/gallery/81908469/Basic-UX-Free-design-resources-for-InVision-Studio" target="_blank">View case study on Behance.</a></h4>

</div>
 
   </div>

</div>

<div>
        {
            object2.imageUrl.map((image, index) => {
                
                const count = index + 1;
                return <img src={process.env.PUBLIC_URL + '/images/project-images/project'+object2.imgProp+'/pathfinder'+count +'.JPG'} width="100%"/> 
            })
        }
        </div>
</div>
      }

      {
          object3 !== undefined &&  <div><div class="project-row">
   

   <div class="project-info"> 
   <h5>Case study</h5>

   <h1 className="project-heading">{object3.title}</h1>
<h5 >My role</h5>
<h4 class="header-dark">Creative Direction<br></br>
UX / UI<br></br>
Website Design<br></br>
Icon Design</h4>

<h4 class="header-dark">InVision</h4>
<h5>Year</h5>
<h4 class="header-dark">{object3.date}</h4>
   </div>

   
   <div  class="project-content"> 

   <div> <p class="header-light"> InVision Studio is a new powerful tool where you can design, prototype and animate your projects easily.
One of InVision's initiatives is the Design Forward Fund, a $5 million fund dedicated to investing in the future of design.
I'm happy to say that my idea was among several selected for implementation and shortly after the initial interviews, 
we began shaping requirements for the Basic UX project.</p>
<br></br>
<p class="header-light">
Our goal was to create an extensive library of components and assets to help designers wireframe their web projects faster.
Over the course of 5 months I designed more than 400 layout components in 30 categories (each prepared for desktop, tablet & phone screens), 128 icons, 56 user journey map elements and over 100 user interface elements.
You can easily customize and combine them when working on your wireframes.
</p>
<br></br>
<p class="header-light">
Aside from that, I was in touch with the Director of Product and the InVision tech team to report issues and bugs that I found within the software, as well as to propose improvements regarding certain functionalities.
It was exciting to see how the product evolved and improved with each update during this short time.
</p>
<br></br>
<p class="header-light">
The final deliverable was a family of 4 products that you can download and use for free.
Just download <a href="https://www.invisionapp.com/studio/" target="_blank">InVision Studio</a>, open their App Store and search for 128 Outline Icons, eCommerce Wireframe Kit, User Interface Kit and Web Wireframe Kit.
</p>
<br></br>
<h4 class="header-light"><a href="https://www.behance.net/gallery/81908469/Basic-UX-Free-design-resources-for-InVision-Studio" target="_blank">View case study on Behance.</a></h4>

</div>
 
   </div>

</div>

<div>
        {
            object3.imageUrl.map((image, index) => {
                
                const count = index + 1;
                return <img src={process.env.PUBLIC_URL + '/images/project-images/project'+object3.imgProp+'/pathfinder'+count +'.JPG'} width="100%"/> 
            })
        }
        </div>
</div>
      }
        </div>
        
    )
}
