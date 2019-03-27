import React, { useState } from "react";
import { Waypoint } from 'react-waypoint';
import croatia from '../images/about/croatia.jpg';
import Github from '../images/links/github.jsx';
import Codepen from './links/Codepen.jsx';



const skills = ['React', 'JS', 'HTML5', 'CSS3', 'Material UI', 'Sass', 'Figma', 'Sketch', 'Git'];

const About = props => {
    const { xs, sm, md, lg, xl, touchscreen } = props;
    const [showGithub, setGithub] = useState(false);
    const _toggle = () => {
        setGithub(!showGithub)
    }
    const socialWidth = xs ? 30 : sm ? 40 : md || lg ? 45 : xl ? 60 : 100;
    const styles = {
        About: {
            color: "#fff",
            display: "grid",
            position: "relative",
            fontSize: xs ? "1.5rem" : sm || md || lg ? "2rem" : xl ? "3rem" : "4.5rem",
            lineHeight: 1.25,
            backgroundColor: "#4E334E",
        },
        croatia: {
            position: "sticky",
            top: 0,
            zIndex: 0,
            width: "100%",
            objectFit: "cover",
            height: "100vh",
        },
        scrollingText: {
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateAreas: xs | sm || md || lg ?
                `
            ". stc stc stc stc stc stc . . . ."
            ". amI amI amI amI amI amI . . . ."
            ". thx thx thx thx thx thx . . . ."
            ` : xl ?
                    `
            ". stc stc stc stc . . . . . ."
            ". amI amI amI amI . . . . . ."
            ". thx thx thx thx .   . . . . ."
            ` :
                    `
            ". stc stc stc . . . . . . ."
            ". amI amI amI amI . . . . . ."
            ". thx thx thx . .   . . . . ."
            ` ,
        },
        heading: {
            fontSize: xs ? "1.75rem" : sm || md || lg ? "2.5rem" : xl ? "3.5rem" : "5rem", fontWeight: 700
        },
        skills: {
            position: "relative",
            zIndex: 1,
            gridArea: "stc",
            height: "90vh",
        },
        whereAmI: {
            position: "relative",
            zIndex: 1,
            gridArea: "amI",
            height: "60vh",
        },
        thanks: {
            position: "relative",
            zIndex: 1,
            gridArea: "thx",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
        },
        email: {
            padding: "0.5em 0px 1.5em 0",
            fontWeight: 300,
            color: "#fff",
            textDecoration: "none",
        },
        githubContainer: {
            opacity: showGithub ? 1 : 0,
            transition: "opacity 1s",
            display: "flex",
            justifyContent: "space-between",
            width: socialWidth * 2,
        },
        siteBottom: {
            position: "absolute",
            height: 5,
            bottom: -1,
        }
    }
    return (
        <div className="About" style={styles.About} >
            <img src={croatia} className="croatia" alt="croatia" style={styles.croatia} />
            <div className="scrollingText" style={styles.scrollingText}>
                <div id="skills" style={styles.skills}>
                    <div className="myStack" style={styles.heading}>My Stack</div>
                    <div className="skills" style={{ paddingTop: "1em" }}>{skills.map((skill, i) => <div key={i}>{skill}</div>)}</div>
                </div>
                <div className="whereAmI" style={styles.whereAmI}>
                    <div style={styles.heading}>Where am I?</div>
                    <div style={{ paddingTop: "1em", fontSize: xs ? "1.5rem" : sm || md || lg ? "2rem" : xl ? "2.75rem" : "4.25rem" }}>In the last 2 {'\u00BD'} years, my husband and I have lived in 16 countries but are soon to be settled in Minneapolis, MN.</div>
                </div>
                <div className="thanks" style={styles.thanks}>
                    <div style={styles.heading}>Thank You.</div>
                    <a className="email" style={styles.email} href="mailto:mail@rachelmiller.io" target="_blank" rel="noopener noreferrer">mail@rachelmiller.io</a>
                    <div className="githubContainer" style={styles.githubContainer}>
                        <Github width={socialWidth} absolute={true} />
                        <Codepen width={socialWidth} absolute={true} touchscreen={touchscreen} />
                    </div>
                    <Waypoint onEnter={_toggle} onLeave={_toggle}>
                        <div className="siteBottom" style={styles.siteBottom}></div>
                    </Waypoint>
                </div>
            </div >
        </div >
    )
}

export default About;