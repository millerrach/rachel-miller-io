import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import croatia from '../images/about/croatia.jpg';
import Github from './links/Github.jsx';
import Codepen from './links/Codepen.jsx';
import styled from 'styled-components'


const skills = ["React", "JavaScript", "HTML5", "CSS3", "Sass", "Material UI", "Git", "Figma", "Sketch"];

const AboutWrapper = styled.div`
.croatia {
    position: sticky;
    top: 0;
    z-index: 0;
    width: 100%;
    object-fit: cover;
    height: 100vh;
};
`;

const ScrollingText = styled.div`
color: #fff;
font-size: ${props => props.xs ? "1.5rem" : props.sm || props.md || props.lg ? "2rem" : props.xl ? "3rem" : "4.5rem"};
line-height: 1.25;
background-color: #4E334E;
grid-template-columns: repeat(12, 1fr);
display: grid;
grid-template-areas: ${props => props.xs | props.sm || props.md || props.lg ?
        `
". stc stc stc stc stc stc . . . ."
". amI amI amI amI amI amI . . . ."
". thx thx thx thx thx thx . . . ."
` : props.xl ?
            `
". stc stc stc stc . . . . . ."
". amI amI amI amI . . . . . ."
". thx thx thx thx .   . . . . ."
` :
            `
". stc stc stc . . . . . . ."
". amI amI amI amI . . . . . ."
". thx thx thx . .   . . . . ."
`
    };
.heading {
font-size: ${props => props.xs ? "1.75rem" : props.sm || props.md || props.lg ? "2.5rem" : props.xl ? "3.5rem" : "5rem"}; 
font-weight: 700;
padding-bottom: .5em;
}
.skills {
position: relative;
z-index: 1;
grid-area: stc;
height: 90vh;
padding-top: 1em;
}
.whereAmI {
position: relative;
z-index: 1;
grid-area: amI;
height: 60vh;
}
.live {
font-size: ${props => props.xs ? "1.5rem" : props.sm || props.md || props.lg ? "2rem" : props.xl ? "2.75rem" : "4.25rem"};
}
.thanks {
position: relative;
z-index: 1;
grid-area: thx;
height: 90vh;
display: flex;
justify-content: center;
flex-direction: column;
}
.email {
padding-bottom: 1.5em;
font-weight: 300;
color: #fff;
text-decoration: none;
}
.socialContainer {
opacity: ${props => props.showGithub ? 1 : 0};
transition: opacity 1s;
display: flex;
justify-content: space-between;
width: ${props => props.socialWidth * 2}px;
}
.siteBottom {
position: absolute;
height: 5;
bottom: -1;
}
`;

const About = props => {
    const { xs, sm, md, lg, xl, touchscreen } = props;
    const [showGithub, setGithub] = useState(false);
    const onEnter = () => {
        setGithub(true)
    }
    const onLeave = () => {
        setGithub(false)
    }
    const socialWidth = xs ? 30 : sm ? 40 : md || lg ? 45 : xl ? 60 : 100;
    return (
        <AboutWrapper className="About" {...props} showGithub={showGithub}>
            <img src={croatia} className="croatia" alt="croatia" />
            <ScrollingText className="scrollingText" {...props} showGithub={showGithub} socialWidth={socialWidth}>
                <div className="skills">
                    <div className="myStack heading">My Stack</div>
                    <div className="skillList">{skills.map((skill, i) => <div key={i}>{skill}</div>)}</div>
                </div>
                <div className="whereAmI">
                    <div className="heading">Where am I?</div>
                    <div className="live">In the last 2 {'\u00BD'} years, my husband and I have lived in 16 countries but are now happily settled in Minneapolis, MN.</div>
                </div>
                <div className="thanks">
                    <div className="heading">Thank You.</div>
                    <a className="email" href="mailto:mail@rachelmiller.io" target="_blank" rel="noopener noreferrer">mail@rachelmiller.io</a>
                    <div className="socialContainer">
                        <Github width={socialWidth} absolute={true} />
                        <Codepen width={socialWidth} absolute={true} touchscreen={touchscreen} />
                    </div>
                    <Waypoint onEnter={onEnter} onLeave={onLeave}>
                        <div className="siteBottom"></div>
                    </Waypoint>
                </div>
            </ScrollingText >
        </AboutWrapper >
    )
}
export default About;