import React from "react";
import styled from 'styled-components';
import down from "../images/down.svg";
import Email from "./links/Email.jsx";
import Github from "./links/Github.jsx";


const IntroWrapper = styled.div`
  background-color: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: .25fr .75fr;
  grid-template-areas: ${props => props.xs ?
    `
    ". links .     .     .     .     .     .     .     .     . ."
    ". about about about about about about about about about . ."`
    : props.sm ?
      `
    "links .     .     .     .     .     .     .     .     .     .     ."
    "links .     about about about about about about about about about ."`
      : props.md ?
        `
    "links .     .     .     .     .     .     .     . . . ."
    "links .     about about about about about about . . . ."`
        : props.lg ?
          `
    "links .     .     .     .     .     .     .     . . . ."
    "links .     about about about about about about . . . ."` :
          `
    "links .     .     .     .     .     .     .     . . . ."
    "links .     .     about about about about about . . . ."`};
  .linkBar {
    grid-area: links;
    width: 100%;
    height: ${props => props.xs ? null : "88vh"};
    align-self: ${props => props.xs ? "end" : "start"};
    display: grid;
    padding: ${props => !props.xs ? "6vh 0" : null};
    transform: ${props => props.loaded ? "translateX(0)" : "translateX(-500%)"};
    opacity: ${props => props.loaded ? 1 : 0};
    transition: all 2s;
  }
  .links {
    display: flex;
    width: 100%;
    height: ${props => props.xs ? "8em" : props.sm || props.md || props.lg ? "10em" : props.xl ? "15em" : "20em"};
    flex-direction: column;
    justify-content: space-between;
    align-items: ${props => props.tablet ? "flex-end" : "center"};
  }
  .text {
    grid-area: about;
    display: grid;
    grid-auto-rows: min-content;
    align-self: center;
    opacity: ${props => props.loaded ? 1 : 0};
    transition: opacity 1s;
    font-size: ${props => props.xs ? "1.75em" : props.sm || props.md || props.lg ? "3.25em" : props.xl ? "4em" : "6em"};
    font-weight: ${props => props.xs ? null : 700},
  }
  .firstParagraph {
    padding-bottom: 1em;
  }
`;
const Intro = props => {
  const { xs, sm, md, lg, xl, screenWidth, touchscreen } = props;
  const tablet = screenWidth > 760 && screenWidth < 1030;
  return (
    <IntroWrapper className="Intro" {...props}>
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
