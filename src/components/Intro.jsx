import React, { useState } from "react";
import down from "../images/down.svg";
import Email from "../images/links/email.jsx";
import Github from "../images/links/github.jsx";



const Intro = props => {
  const { screenWidth } = props;
  const sm = screenWidth < 600;
  //Hover links
  const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
  };
  const [hover, setHover] = useState(STATUS.NORMAL);
  const _onMouseEnter = event => {
    console.log("enter")
    setHover(STATUS.HOVERED);
  }
  const _onMouseLeave = event => {
    console.log("leave")
    setHover(STATUS.NORMAL);
  }
  //end hover links
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
      fontSize: "1.75em",
    },
    linkBarStyle: {
      gridArea: "links",
      justifySelf: sm ? "start" : "center",
      width: "1em",
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
          <a
            className={hover}
            href={"https://github.com/millerrach"}
            onMouseEnter={_onMouseEnter}
            onMouseLeave={_onMouseLeave}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github width="1em" passStyle={{ marginBottom: ".75em" }} />
          </a>
          <a
            className={hover}
            href={"mailto:mail@rachelmiller.io"}
            onMouseEnter={_onMouseEnter}
            onMouseLeave={_onMouseLeave}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email width="1em" />
          </a>
        </div>
        {screenWidth > 600 ? <img src={down} alt="down" style={{ alignSelf: "end", justifySelf: "center", width: 30 }} /> : null}
      </div>
      <div className="text" style={styles.textStyle}>
        <div
          onMouseEnter={_onMouseEnter}
          onMouseLeave={_onMouseLeave}
          style={{ paddingBottom: "1em" }}>
          I'm Rachel Miller, Front-End Web Developer and Designer.
          </div>
        <div>
          Working freelance, with a focus on React and custom progressive web
          apps.
          </div>
      </div>
    </div>
  );
}

export default Intro;
