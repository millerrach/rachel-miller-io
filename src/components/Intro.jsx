import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import down from "../images/down.svg";
import Email from "./links/Email.jsx";
import Github from "./links/Github.jsx";


const Intro = props => {
  const { xs, sm, md, lg, xl, screenWidth, touchscreen } = props;
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
        : lg ?
          `
        "links .     .     .     .     .     .     .     . . . ."
        "links .     about about about about about about . . . ."` :
          `
        "links .     .     .     .     .     .     .     . . . ."
        "links .     .     about about about about about . . . ."`;
  const IntroWrapper = styled.div`
      background-color: #000;
      color: #fff;
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: .25fr .75fr;
      grid-template-areas: ${areas};
      .linkBar {
        grid-area: links;
        width: 100%;
        height: ${xs ? null : "88vh"};
        align-self: ${xs ? "end" : "start"};
        display: grid;
        padding: ${!xs ? "6vh 0" : null};
        transform: ${loaded ? "translateX(0)" : "translateX(-500%)"};
        opacity: ${loaded ? 1 : 0};
        transition: all 2s;
      }
      .links {
        display: flex;
        width: 100%;
        height: ${xs ? "8em" : sm || md || lg ? "10em" : xl ? "15em" : "20em"};
        flex-direction: column;
        justify-content: space-between;
        align-items: ${tablet ? "flex-end" : "center"};
      }
      .text {
        grid-area: about;
        display: grid;
        grid-auto-rows: min-content;
        align-self: center;
        opacity: ${loaded ? 1 : 0};
        transition: opacity 1s;
        font-size: ${xs ? "1.75em" : sm || md || lg ? "3.25em" : xl ? "4em" : "6em"};
        font-weight: ${xs ? null : 700},
      }
      .firstParagraph {
        padding-bottom: 1em;
      }
  `;
  return (
    <IntroWrapper className="Intro">
      <div className="linkBar">
        <div className="links">
          <Github touchscreen={touchscreen} width={xs ? 28 : sm || md ? 30 : lg ? 35 : xl ? 45 : 60} absolute={false} />
          <Email touchscreen={touchscreen} width={xs ? 25 : sm || md ? 27 : lg ? 32 : xl ? 42 : 57} />
        </div>
        {screenWidth > 600 ? <img src={down} alt="down" style={{ alignSelf: "end", justifySelf: tablet ? "end" : "center", width: xs ? 25 : sm || md ? 27 : lg ? 32 : xl ? 42 : 57 }} /> : null}
      </div>
      <div className="text">
        <div className="firstParagraph">
          Hi, I'm Rachel Miller, Front-End Web Developer and Designer.
          </div>
        <div>
          My focus is React and custom web apps.
          </div>
      </div>
    </IntroWrapper >
  );
}

export default Intro;
