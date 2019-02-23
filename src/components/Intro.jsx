import React, { Component } from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import down from '../images/down.svg';


class Intro extends Component {
  render() {
      const IntroStyle = {
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        height: "80vh",
        display: "grid",
        gridTemplateColumns: "0.25fr 1fr 0.75fr",
        fontSize: "2em",
      }
      const linkBarStyle = {
        width: "2em",
        padding: "1em 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }
      const linksStyle = {
        display: "inline-flex",
        flexDirection: "column",
      }
      const textStyle = {
        display: "grid",
        placeItems: "center",
        placeContent: "center",
      }
    return (
      <div className="Intro" style={IntroStyle}>
        <div className="linkBar" style={linkBarStyle}>
          <div className="links" style={linksStyle}>
            <img src={github} alt="github" className="github" style={{marginBottom: ".75em"}} />
            <img src={email} alt="email" />
          </div>
          <img src={down} alt="down" />
        </div>
        <div className="text" style={textStyle}>
          <div style={{paddingBottom: "2em"}}>
            I am Rachel Miller. Front-End Web Developer and Designer.
          </div>
          <div>
            Working freelance, with a focus on React and custom progressive web
            apps.
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
