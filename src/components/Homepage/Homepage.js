import React, { useState, useEffect } from "react";
import CaseStudies from "../Developer/CaseStudies/CaseStudies";
import Developer from "../Developer/Developer";
import rightArrow from "../../images/right-arrow.svg";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import emailjs from 'emailjs-com';
import CircularProgress from "@material-ui/core/CircularProgress";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./homepage.css";
import { Typography } from "@material-ui/core";
import mainImg from "../../images/project-images/portfolio-image-main.png";

function Homepage() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },

    form: {
      // border: '1px solid',
      width: "100%",
      height: "100%",
      display: "flex",
    },
    heading: {
      color: "#222",
      fontSize: "35px",
      fontFamily: "Inter",
    },
    buttonText: {
      fontFamily: "Inter",
      padding: "5px 0",
      fontWeight: "bold",
      fontSize: "15px",
    },
  }));

  const classes = useStyles();
  const YOUR_TEMPLATE_ID = 'template_qhbva0j';
  const USER_ID = 'user_gzCNIAVpLSlnwQY2JzwTl';
  const SERVICE_ID = 'service_hfn8n2h';
  const [emailValue, setEmailValue] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [reason, setReason] = useState("What are you Interested In?");
  const [toggleForm, setToggleForm] = useState(false);
  const [showCircular, setShowCircular] = useState(false)

  useEffect(() => {
    var el = document.getElementById("open-popup-btn");
    var dismiss = document.getElementById("dismiss-popup-btn");

    if (el) {
      el.addEventListener("click", function () {
        // console.log("dd");
        document.getElementsByClassName("popup")[0].classList.add("active");
      });
    }

    if (dismiss) {
      dismiss.addEventListener("click", function () {
        // if (finalValidation){
        // }
      });
    }
  });

  const removeClass = () => {
    document.getElementsByClassName("popup")[0].classList.remove("active");
  };

  const sendEmail = () => {

    const templateParams = {
      fullName: fullName,
      email: emailValue,
      reason: reason,
      message: message
    }

    emailjs.send(SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, USER_ID)
    .then(function(response) {
      setToggleForm(true);
      
      setTimeout(() => {
        removeClass();
      }, 1500);
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    
       console.log('FAILED...', error);
    });
  }
  const handleChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowCircular(true);
    sendEmail();
    // document.getElementsByClassName("popup")[0].classList.remove("active");
    clearInputs();
  };

  const setChange = (e) => {
    setEmailValue(e.target.value);
  };

  const setNameChange = (e) => {
    setFullName(e.target.value);
  };

  const setMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const clearInputs = () => {
    setEmailValue("");
    setFullName("");
    setReason("");
    setMessage("");
  };



  return (
    <div>
      <Developer />
      <div className="container">
        <div className="wrapper-div">
          <img src={mainImg} className="wrapper-div-img" />
          <div className="row">
            <div className="main-copy">
              <h5>Mbajiaku George</h5>
              <span className="large">Web || App Developer</span>
              <h3 className="header-light">
                Over the past 9 years, as an art director and designer, I’ve
                worked with big companies and up-and-coming startups to
                successfully help them reach their full potential and attract
                new customers.
              </h3>
              <nav className="links">
                <h4>
                  <a href="#projects" className="internal special hover-help">
                    View Projects
                  </a>
                </h4>
                <span>or</span>
                <h4>
                  <a href="about" className="internal special hover-help">
                    Read About Me
                  </a>
                </h4>
              </nav>
            </div>
          </div>
          <div className="adjust-svg">
            <a className="special2" href="#projects">
              <div className="scroll-to-icon"></div>
            </a>
          </div>
        </div>

        <CaseStudies header={"PERSONAL PROJECTS"} subheader={"Case Studies"} />
        <CaseStudies
          header={"INTERNAL PROJECTS"}
          subheader={"Case Studies"}
          internal={true}
        />

        <div className="work-tgt">
          <a href="#">
            <div> NEED A DEVELOPER ?</div>
          </a>
          <div className="working">
            <div id="open-popup-btn">
              <h5> Let's Work Together</h5>
              <img src={rightArrow} width="160px" height="20px" />
            </div>
          </div>
        </div>

        <div>
          <div class="popup center">
        
          {
            toggleForm ? <div>
            <div class="icon">
    <i class="fa fa-check"></i>
  </div>
  <div class="title">
    Success!!
  </div>
  <div class="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nihil provident voluptatem nulla placeat
  </div>
  <div class="dismiss-btn">
    <button id="dismiss-popup-btn">
      Dismiss
    </button>
  </div>
            </div> : showCircular ? <CircularProgress /> : <div class="row">
              <form
                class="col-sm-6-6 col-md-6-12 col-smd-12-12 col-lg-6-12"
                onSubmit={handleSubmit}
                id="myForm"
              >
                <FormControl className={classes.form}>
                  <Typography
                    variant="h2"
                    color="secondary"
                    className={classes.heading}
                  >
                    Contact Me
                  </Typography>
                  <TextField
                    id="standard-basic"
                    label="Full Name"
                    type="name"
                    onChange={setNameChange}
                    value={fullName}
                    fullWidth
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    required
                    type="email"
                    onChange={setChange}
                    value={emailValue}
                    fullWidth
                  />
                </FormControl>

                <FormControl className={classes.form}>
                  <InputLabel id="demo-simple-select-label">
                    What are you Interested In?
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={reason}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Need help with a one-off project"}>
                      Need help with a one-off project
                    </MenuItem>
                    <MenuItem value={"Looking for a long term partnership"}>
                      Looking for a long term partnership
                    </MenuItem>
                    <MenuItem value={"Want to hire me full-time"}>
                      Want to hire me full-time
                    </MenuItem>
                    <MenuItem value={"Just wanted to say hi!"}>
                      Just wanted to say hi!
                    </MenuItem>
                  </Select>

                  <FormControl>
                    <TextField
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      required
                      onChange={setMessageChange}
                      value={message}
                      variant="outlined"
                    />
                  </FormControl>
                  <Button
                    variant="contained"
                    id="dismiss-popup-btn"
                    type="submit"
                    className={classes.buttonText}
                  >
                    Submit Message
                  </Button>
                  <Button
                    variant="contained"
                    id="dismiss-popup-btn"
                    onClick={removeClass}
                    className={classes.buttonText}
                  >
                    Cancel
                  </Button>
                </FormControl>
              </form>
            </div>
          }
           
          </div>
          {/* <div class="center">
  <button>
    Open Popup
  </button>
</div> */}
        </div>

        <div className="hr"></div>
      </div>
    </div>
  );
}

export default Homepage;
