import React, { Component } from "react";
import email from "../images/email.svg";
import github from "../images/github.svg";
import down from "../images/down.svg";

class Intro extends Component {
  render() {
    const styles = {
      IntroStyle: {
        backgroundColor: "#000",
        color: "#fff",
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        grideTemplateRows: "min-content .75fr",
        fontSize: "1.75em"
      },
      textStyle: {
        gridColumn: "2 / 12",
        display: "grid",
        placeItems: "center",
        placeContent: "center"
      },
      linkBarStyle: {
        gridArea: "1 / 2 / 2 / 3",
        padding: "1em 0",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "space-between",
      },
      linksStyle: {
        // display: "inline-flex",
        // flexDirection: "column",
      }
    };
    const { width } = this.props;
    return (
      <div className="Intro" style={styles.IntroStyle}>
        <div className="linkBar" style={styles.linkBarStyle}>
          <div className="links" style={styles.linksStyle}>
            <img
              src={github}
              alt="github"
              className="github"
              style={{ marginBottom: ".75em" }}
            />
            <img src={email} alt="email" />
          </div>
          {width > 600 ? <img src={down} alt="down" /> : null}
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
