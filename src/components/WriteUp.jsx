import React, { useState, useEffect } from "react";
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';


const writeUps = [
  {
    name: "Juiceline",
    description:
      "Made for a juice company in Budapest, Hungary. A progressive web app that allows customers to see what's offered at the current moment.",
    stack: ["React", "JS", "CSS3", "Sass", "Figma"]
  },
  {
    name: "Honda",
    description:
      "A project done with Portlight Technologies. It’s a touch-screen app displayed at Honda dealerships. It allows the user to view available makes, models, specs, colors, trim levels and current offers.",
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
  const trigger = () => {
    setAnimate(true);
    setOpacity(1)
  }
  const WriteUpWrapper = styled.div`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: 3em 1fr;
      grid-template-areas: ${xs ?
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
  ". . . desc desc desc desc . stac . . . "`};
      margin: ${xs || sm || md ? "5rem 0" : "10rem 0"};
      opacity: ${opacity};
      transition: all 2s;
      font-size: ${xs ? null : sm || md ? "1.25rem" : "2rem"};
    .name {
      grid-area: name;
      transition: all 1s;
      transform: ${animate ? "translateY(0)" : "translateY(50px)"};
      opacity: ${animate ? 1 : 0};
      font-size: ${xs ? "1.5rem" : sm || md ? "1.75rem" : "3rem"};
    }
    .description {
      grid-area: desc;
      align-self: end;
      transition: all 1s;
      transform: ${animate ? "translateY(0)" : "translateY(50px)"};
      opacity: ${animate ? 1 : 0};
      font-weight: ${xs ? null : 300};
      line-height: 1.5;
      letter-spacing: ${xs ? 0 : "1.5px"};
    }
    .stack {
      grid-area: stac;
      font-weight: 500;
      color: #4C857A;
      display: grid;
      align-content: space-around;
      justify-content: end;
      align-items: end;
      height: 100%;
    }
    .skill {
      transform: ${animate ? "translateY(0)" : "translateY(50px)"};
      transition: all 1s;
      opacity: ${animate ? 1 : 0};
      line-height: 1.5;
      width: min-content;
    }
  `
  return (
    <WriteUpWrapper className="WriteUp">
      <div className="name">{wui.name}</div>
      <Waypoint onEnter={trigger}>
        <div className="description">{wui.description}</div>
      </Waypoint>
      <div className="stack">
        {skills.map((skill, i) => <div key={i}>{skill}</div>)}
      </div>
    </WriteUpWrapper>
  );
}

export default WriteUp;
