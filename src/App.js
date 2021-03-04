import React from "react";

import "./App.css";
import NavOverlay from "./NavBar/NavOverlay";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutme from "./components/AboutMe/Aboutme";
import SingleProject from "./components/SingleProject/SingleProject";

const App = () => {
  const today = new Date();

  return (
    <Router>
      <div className="main">
        <NavOverlay />

        {/* <Developer /> */}

        <Route exact path="/" component={Homepage} className="main" />
        <Route path="/about" component={Aboutme} />
        <Route path="/projects/:id" component={SingleProject} />

        <div className="container">
          <div></div>

          <footer id="footer">
            <div className="wrapper ">
              <div className="row footer-row">
                <div className="footer-nav-links contact">
                  <h3>
                    Contact <br></br>information —
                  </h3>
                  <p>
                    Feel free to reach out to me any time. I prefer to talk over
                    email, especially since we may be a few time zones away.
                  </p>
                  <ul className="contact-links">
                    <li>
                     
                      <p className="special">E:{" "}
                        <a> mbajiakugeorge@yahoo.com</a>
                      </p>
                    </li>
                    <li>
                      P:{" "}
                      <span className="gray-darkest">+234- 810 849 7673</span>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-links latest-project-links">
                  <h3>
                    Latest <br></br>projects —
                  </h3>
                  <ul className="project-links">
                    <li>
                      <a href="/projects/project1" className="special internal">
                        PathFinder
                      </a>
                    </li>
                    <li>
                      <a href="/projects/project2" className="special internal">
                        COVID 19
                      </a>
                    </li>
                    <li>
                      <a href="/projects/project3" className="special internal">
                        Memories App
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-sm-6-6 col-md-3-12 col-smd-3-12 col-lg-2-12">
<h3>Current <br></br>availability —</h3>
<p>
I usually work on projects but I’ll be happy to discuss new opportunities. Let’s get in touch!
</p>
</div> */}
                <div className="footer-nav-links follow-links">
                  <h3>
                    Follow <br></br>me on —
                  </h3>
                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/george-mbajiaku-8747b2ab/"
                        className="special"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/george_son_/"
                        className="special"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-links copyright">
                  <a href="/" className="internal rotateSvg">
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
                        fill="#cfd0d2"
                        d="M22.953,0A23,23,0,1,0,45.909,23,22.978,22.978,0,0,0,22.953,0Zm0,43A20,20,0,1,1,42.915,23,19.981,19.981,0,0,1,22.953,43Zm5.055-16.727L24.83,16.009h-3.5l-3.178,10.24-2.529-10.24H11.99L16.162,32H19.75l3.286-10.6L26.3,32h3.523L34,16.009h-3.5Z"
                      />
                    </svg>
                  </a>
                  <p className="small copyright-text">
                    © 2018 — {today.getFullYear()} Mbajiaku George.<br></br>Made
                    in Lagos, Nigeria.
                  </p>
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
