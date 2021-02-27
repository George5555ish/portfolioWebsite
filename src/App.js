import React , {useState} from "react";

import "./App.css";
import NavOverlay from './NavBar/NavOverlay';
import Homepage from './components/Homepage/Homepage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Aboutme from "./components/AboutMe/Aboutme";
import SingleProject from "./components/SingleProject/SingleProject";

const App = () => {

  const today = new Date();

  return (      <Router>
    <div className="main">
      <NavOverlay />
      
      {/* <Developer /> */}

      


      <Route exact path="/" component={Homepage} className="main"/>
      <Route path="/about" component={Aboutme}/>
      <Route path="/projects/:id" component={SingleProject}/>

      <div className="container">
      

    
           
     
           
           <div></div>
       
        <footer id="footer">
<div class="wrapper">
<div class="row footer-row">
<div class="contact">
<h3>Contact <br></br>information —</h3>
<p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
<ul class="contact-links">
<li>E: <a class="special" href="/cdn-cgi/l/email-protection#b3d7d2dedad2dd9dc4d2c7c1d2d0c9f3d4ded2dadf9dd0dcde"><span class="__cf_email__" data-cfemail="e387828e8a828dcd94829791828099a3848e828a8fcd808c8e">[email&#160;protected]</span></a></li>
<li>P: <span class="gray-darkest">+48-517-512-348</span></li>
</ul>
</div>
<div class="col-sm-6-6 col-md-6-12 col-smd-6-12 col-lg-2-12 col-lg-offset-1-12">
<h3>Latest <br></br>projects —</h3>
<ul class="project-links">
<li><a href="project/iceland" class="special internal">Iceland</a></li>
<li><a href="project/basicux" class="special internal">Basic UX</a></li>
<li><a href="project/triniso" class="special internal">Triniso</a></li>
<li><a href="project/symova" class="special internal">Symova</a></li>
<li><a href="project/pmr" class="special internal">PMR</a></li>
<li><a href="project/sonicsmith" class="special internal">Sonicsmith</a></li>
<li><a href="project/photography" class="special internal">Photography</a></li>
<li><a href="/" class="special internal">All projects</a></li>
</ul>
</div>
<div class="col-sm-6-6 col-md-3-12 col-smd-3-12 col-lg-2-12">
<h3>Current <br></br>availability —</h3>
<p>
I usually work on several projects but I’ll be happy to discuss new opportunities. Let’s get in touch!
</p>
</div>
<div class="col-sm-6-6 col-md-3-12 col-smd-3-12 col-lg-2-12 col-lg-offset-1-12">
<h3>Follow <br></br>me on —</h3>
<ul class="social-links">
<li><a href="https://dribbble.com/damianwatracz" class="special" target="_blank">Dribbble</a></li>
<li><a href="https://www.instagram.com/damianwatracz" class="special" target="_blank">Instagram</a></li>
<li><a href="https://www.behance.net/damianwatracz" class="special" target="_blank">Behance</a></li>
<li><a href="https://www.linkedin.com/in/damianwatracz" class="special" target="_blank">LinkedIn</a></li>
</ul>
</div>
<div class="col-sm-6-6 col-md-12-12 col-smd-12-12 col-lg-12-12 copyright">
<a href="home" className="internal rotateSvg">
<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="46px" height="46px" viewBox="0 0 46 46" enable-background="new 0 0 46 46" space="preserve">
<path fill="#cfd0d2" d="M22.953,0A23,23,0,1,0,45.909,23,22.978,22.978,0,0,0,22.953,0Zm0,43A20,20,0,1,1,42.915,23,19.981,19.981,0,0,1,22.953,43Zm5.055-16.727L24.83,16.009h-3.5l-3.178,10.24-2.529-10.24H11.99L16.162,32H19.75l3.286-10.6L26.3,32h3.523L34,16.009h-3.5Z" />
</svg>
</a>
<p class="small copyright-text">© 2018 — {today.getFullYear()} Mbajiaku George.<br></br>Made in Lagos, Nigeria.</p>
</div>
</div>
</div>
</footer>
        </div>
    
    </div>
    </Router>
  );
};

export default App;
