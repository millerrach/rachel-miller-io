import React, { useState } from "react";
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
      "This project was done for Portlight Technologies. It’s a touch-screen app that‘s displayed at Honda dealerships. It allows the user to view available makes, models, specs, colors, trim levels and current offers.",
    stack: ["JS", "HTML5", "CSS3", "Sass"]
  },
  {
    name: "Jubeck Brewery",
    description:
      "This project was done for Jubeck New World Brewing. They were looking to track their beer memberships but couldn’t find a solution, so they came to us for a custom app. This allows them to add pints and growlers and also edit and renew memberships.",
    stack: ["React", "Redux", "MUI", "JS", "CSS3", "Sass"]
  },
];

const WriteUp = props => {
  const { index, alignBottom } = props;
  const [animate, setAnimate] = useState(false);
  const wui = writeUps[index];
  const skills = wui.stack;
  const _trigger = () => {
    setAnimate(true);
  }
  const styles = {
    WriteUpStyle: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "3em 1fr",
      gridTemplateAreas: `
      ". name name name name name name name . stac stac . "
      ". desc desc desc desc desc desc desc . stac stac . "`,
      margin: "3em 0",
      opacity: animate ? 1 : 0,
      transition: "all 2s",
    },
    name: {
      gridArea: "name",
      transition: "all 1s",
      transform: animate ? "translateY(0)" : "translateY(50px)",
      opacity: animate ? 1 : 0,
      fontSize: "1.5em",
    },
    description: {
      gridArea: "desc",
      alignSelf: "end",
      transition: "all 1s",
      transform: animate ? "translateY(0)" : "translateY(50px)",
      opacity: animate ? 1 : 0,
      lineHeight: animate ? 1.5 : 3,
    },
    stackTop: {
      gridArea: "2 / 10 / 3 / 12",
      lineHeight: "1.5",
      justifySelf: "end",
    },
    stackBottom: {
      gridArea: "stac",
      justifySelf: "end",
      alignSelf: "end",
      lineHeight: "1.5",
    },
    skill: {
      transform: animate ? "translateY(0)" : "translateY(50px)",
      transition: "all 1s",
      opacity: animate ? 1 : 0,
      lineHeight: animate ? 1.5 : 3,
    }
  };
  return (
    <div className="WriteUp" style={styles.WriteUpStyle}>
      <div className="name" style={styles.name}>{wui.name}</div>
      <Waypoint onEnter={_trigger}>
        <div className="description" style={styles.description}>{wui.description}</div>
      </Waypoint>
      <div className="stack" style={alignBottom ? styles.stackBottom : styles.stackTop}>
        {skills.map((skill, i) => <div key={i} style={styles.skill}>{skill}</div>)}
      </div>
    </div>
  );
}

export default WriteUp;
