import React, { Component } from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import down from "../images/down.svg";

class Intro extends Component {
  render() {
    const { width } = this.props;
    const sm = width < 600;
    const areas = sm ?
      `
        ". links .     .     .     .     .     .     .     .     . ."
        ". about about about about about about about about about . ."` :
      `
        "links .     .     .     .     .     .     .     . . . ."
        "links .     about about about about about about . . . ."`;
    const styles = {
      IntroStyle: {
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gridTemplateRows: ".25fr .75fr",
        gridTemplateAreas: areas,
        fontSize: "1.75em"
      },
      linkBarStyle: {
        gridArea: "links",
        alignSelf: sm ? "center" : null,
        display: "grid",
        padding: !sm ? "2em 0" : null,
      },
      textStyle: {
        gridArea: "about",
        display: "grid",
        alignSelf: "center",
      },
    };
    return (
      <div className="Intro" style={styles.IntroStyle}>
        <div className="linkBar" style={styles.linkBarStyle}>
          <div className="links">
            <img
              src={github}
              alt="github"
              className="github"
              style={{ marginBottom: ".75em", height: "1em" }}
            />
            <img src={email} alt="email" style={{ height: "1em" }} />
          </div>
          {width > 600 ? <img src={down} alt="down" style={{ alignSelf: "end", justifySelf: "center", width: 40 }} /> : null}
        </div>
        <div className="text" style={styles.textStyle}>
          <div style={{ paddingBottom: "1em" }}>
            I am Rachel Miller, Front-End Web Developer and Designer.
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
