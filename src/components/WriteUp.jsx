import React, { useState, useEffect } from "react";
import { Waypoint } from 'react-waypoint';


const writeUps = [
  {
    name: "Juiceline",
    description:
      "Made for a juice company in Budapest, Hungary. A progressive web app that allows customers to see what's offered at the current moment.",
    stack: ["Figma", "React", "JS", "CSS3", "Sass"]
  },
  {
    name: "Honda",
    description:
      "A project done for Portlight Technologies. It’s a touch-screen app that‘s displayed at Honda dealerships. It allows the user to view available makes, models, specs, colors, trim levels and current offers.",
    stack: ["JS", "jQuery", "HTML5", "CSS3", "Sass", "Jira"]
  },
  {
    name: "Jubeck Brewery",
    description:
      "This project was done for Jubeck New World Brewing so they can track their beer memberships. This web app allows them to add pints and growlers and also edit and renew memberships.",
    stack: ["React", "Redux", "MUI", "JS", "CSS3", "Sass"]
  },
];

const WriteUp = props => {
  const { xs, sm, md, lg, index, notTop } = props;
  const [opacity, setOpacity] = useState(0);
  const [animate, setAnimate] = useState(false);
  const wui = writeUps[index];
  const skills = wui.stack;
  useEffect(() => {
    if (notTop) { setAnimate(true) }
  }, [notTop]);
  const _trigger = () => {
    setAnimate(true);
    setOpacity(1)
  }
  const styles = {
    WriteUpStyle: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "3em 1fr",
      gridTemplateAreas: xs ?
        `
      ". name name name name name name name . stac stac    . "
      ". desc desc desc desc desc desc desc . stac stac . "` : sm || md ?
          `
      ". name name name name name name name . stac stac . "
      ". desc desc desc desc desc desc desc . stac stac . "` : lg ?
            `
      ". . name name name name name name . stac . . "
      ". . desc desc desc desc desc desc . stac . . "` :
            `
      ". . . name name name name . stac . . . "
      ". . . desc desc desc desc . stac . . . "`,
      margin: xs || sm ? "4rem 0" : md ? "4rem 0" : "8rem 0",
      opacity: opacity,
      transition: "all 2s",
      fontSize: xs ? null : sm || md ? "1.25rem" : "2rem",
    },
    name: {
      gridArea: "name",
      transition: "all 1s",
      transform: animate ? "translateY(0)" : "translateY(50px)",
      opacity: animate ? 1 : 0,
      fontSize: xs ? "1.5rem" : sm || md ? "1.75rem" : "3rem",
    },
    description: {
      gridArea: "desc",
      alignSelf: "end",
      transition: "all 1s",
      transform: animate ? "translateY(0)" : "translateY(50px)",
      opacity: animate ? 1 : 0,
      lineHeight: animate ? 1.5 : 2.5,
      fontWeight: xs ? null : 300,
      letterSpacing: xs ? 0 : "1.5px",
    },
    stack: {
      gridArea: "stac",
      fontWeight: 500,
      color: "#4C857A",
      display: "grid",
      alignContent: "space-around",
      justifyContent: "end",
      alignItems: "end",
      height: "100%",
    },
    skill: {
      transform: animate ? "translateY(0)" : "translateY(50px)",
      transition: "all 1s",
      opacity: animate ? 1 : 0,
      lineHeight: animate ? 1.5 : 2.5,
      width: "min-content",
    }
  };
  return (
    <div className="WriteUp" style={styles.WriteUpStyle}>
      <div className="name" style={styles.name}>{wui.name}</div>
      <Waypoint onEnter={_trigger}>
        <div className="description" style={styles.description}>{wui.description}</div>
      </Waypoint>
      <div className="stack" style={styles.stack}>
        {skills.map((skill, i) => <div key={i} style={styles.skill}>{skill}</div>)}
      </div>
    </div>
  );
}

export default WriteUp;
