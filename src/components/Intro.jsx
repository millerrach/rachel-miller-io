import React, { Component } from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import down from '../images/down.svg';


class Intro extends Component {
  render() {
    return (
      <div className="Intro">
        <div className="linkBar">
          <div className="links">
            <img src={github} alt="github" className="github" />
            <img src={email} alt="email" />
          </div>
          <img src={down} alt="down" />
        </div>
        <div className="text">
          <div className="iAm">
            I am Rachel Miller. Front-End Web Developer and Designer.
          </div>
          <div className="working">
            Working freelance, with a focus on React and custom progressive web
            apps.
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
