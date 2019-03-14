import React, { useState, useEffect } from "react";
import down from "../images/down.svg";
import Email from "../images/links/email.jsx";
import Github from "../images/links/github.jsx";


const Intro = props => {
  const { screenWidth } = props;
  const sm = screenWidth < 600;
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const areas = sm ?
    `
        ". links .     .     .     .     .     .     .     .     . ."
        ". about about about about about about about about about . ."` :
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
      fontSize: "1.75em",
    },
    linkBar: {
      gridArea: "links",
      width: "100%",
      height: sm ? null : "88vh",
      alignSelf: sm ? "end" : "start",
      display: "grid",
      padding: !sm ? "6vh 0" : null,
      transform: loaded ? "translateX(0)" : "translateX(-500%)",
      opacity: loaded ? 1 : 0,
      transition: "all 2s",
    },
    links: {
      display: "flex",
      width: "100%",
      height: sm ? "4em" : "6em",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
    },
    text: {
      gridArea: "about",
      display: "grid",
      alignSelf: "center",
      opacity: loaded ? 1 : 0,
      transition: "opacity 1s",
    },
  };
  return (
    <div id="Intro" style={styles.Intro}>
      <div className="linkBar" style={styles.linkBar}>
        <div className="links" style={styles.links}>
          <Github width={sm ? 25 : 30} absolute={false} />
          <Email width={sm ? 23 : 28} />
        </div>
        {screenWidth > 600 ? <img src={down} alt="down" style={{ alignSelf: "end", justifySelf: "center", width: 40 }} /> : null}
      </div>
      <div className="text" style={styles.text}>
        <div
          style={{ paddingBottom: "1em" }}>
          I'm Rachel Miller, Front-End Web Developer and Designer.
          </div>
        <div>
          Working freelance, with a focus on React and custom progressive web
          apps.
          </div>
      </div>
    </div >
  );
}

export default Intro;
