import React, { useState, useEffect } from "react";
import down from "../images/down.svg";
import Email from "../images/links/email.jsx";
import Github from "../images/links/github.jsx";


const Intro = props => {
  const { xs, sm, md, screenWidth } = props;
  const tablet = screenWidth > 760 && screenWidth < 1030;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const areas = xs ?
    `
        ". links .     .     .     .     .     .     .     .     . ."
        ". about about about about about about about about about . ."`
    : sm ?
      `
        "links .     .     .     .     .     .     .     .     .     .     ."
        "links .     about about about about about about about about about ."`
      : md ?
        `
        "links .     .     .     .     .     .     .     . . . ."
        "links .     about about about about about about . . . ."`
        :
        `
        "links .     .     .     .     .     .     .     . . . ."
        "links .     about about about about about about . . . ."`;
  const styles = {
    Intro: {
      backgroundColor: "#000",
      color: "#fff",
      width: "100%",
      height: "100vh",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: ".25fr .75fr",
      gridTemplateAreas: areas,
    },
    linkBar: {
      gridArea: "links",
      width: "100%",
      height: xs ? null : "88vh",
      alignSelf: xs ? "end" : "start",
      display: "grid",
      padding: !xs ? "6vh 0" : null,
      transform: loaded ? "translateX(0)" : "translateX(-500%)",
      opacity: loaded ? 1 : 0,
      transition: "all 2s",
    },
    links: {
      display: "flex",
      width: "100%",
      height: xs ? "8em" : "10em",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: tablet ? "flex-end" : "center",
    },
    text: {
      gridArea: "about",
      display: "grid",
      gridAutoRows: "min-content",
      alignSelf: "center",
      opacity: loaded ? 1 : 0,
      transition: "opacity 1s",
      fontSize: xs ? "1.75em" : "3.5em",
      fontWeight: xs ? null : 700,
    },
  };
  return (
    <div id="Intro" style={styles.Intro}>
      <div className="linkBar" style={styles.linkBar}>
        <div className="links" style={styles.links}>
          <Github width={xs ? 28 : 30} absolute={false} />
          <Email width={xs ? 25 : 28} />
        </div>
        {screenWidth > 600 ? <img src={down} alt="down" style={{ alignSelf: "end", justifySelf: tablet ? "end" : "center", width: 40 }} /> : null}
      </div>
      <div className="text" style={styles.text}>
        <div
          style={{ paddingBottom: "1em" }}>
          Hi, I'm Rachel Miller, Front-End Web Developer and Designer.
          </div>
        <div>
          My focus is React and custom web apps.
          </div>
      </div>
    </div >
  );
}

export default Intro;
